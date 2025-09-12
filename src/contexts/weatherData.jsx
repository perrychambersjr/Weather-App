import { fetchWeatherApi } from 'openmeteo';
import { createContext, useEffect, useState } from "react";

export const WeatherDataContext = createContext(null);

export const WeatherDataContextProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [weatherDataHourly, setWeatherDataHourly] = useState(null);
    const [locationData, setLocationData] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const url = "https://api.open-meteo.com/v1/forecast";
    const params = {
        "latitude": 52.52,
        "longitude": 13.41,
        "hourly": "temperature_2m"
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await fetchWeatherApi(url, params);
                
                //process first location. Add a for-loop for multiple locations or weather models
                const response = responses[0];

                //attributes for timezone and location
                const latitude = response.latitude();
                const longitude = response.longitude();
                const elevation = response.elevation();
                const utcOffsetSeconds = response.utcOffsetSeconds();

                const hourly = response.hourly();

                // Note: The order of weather variables in the URL query and the indices below need to match!
                const weatherData = {
                    hourly: {
                        time: [...Array((Number(hourly.timeEnd()) - Number(hourly.time())) / hourly.interval())].map(
                            (_, i) => new Date((Number(hourly.time()) + i * hourly.interval() + utcOffsetSeconds) * 1000)
                        ),
                        temperature_2m: hourly.variables(0).valuesArray(),
                    },
                };

                // 'weatherData' now contains a simple structure with arrays with datetime and weather data
                setWeatherData(weatherData);
                setWeatherDataHourly(weatherData.hourly);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }      
        fetchData();
    }, []);

    return (
        <WeatherDataContext.Provider value={{ weatherData, setWeatherData, locationData, setLocationData, selectedLocation, setSelectedLocation }}>
            {children}
        </WeatherDataContext.Provider>
    );
}


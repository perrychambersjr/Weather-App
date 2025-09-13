import { fetchWeatherApi } from 'openmeteo';
import { createContext, useEffect, useState } from "react";

export const WeatherDataContext = createContext(null);

export const WeatherDataContextProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState([]);
    const [locationData, setLocationData] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    useEffect(() => {
        const fetchDefaultWeather = async () => {
        try {
            const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`
            );
            const data = await res.json();
            setWeatherData(data);
            setSelectedLocation({ name: "Berlin", latitude: 52.52, longitude: 13.41 });
        } catch (err) {
            console.error("Error fetching default weather:", err);
        }
        };

        fetchDefaultWeather();
    }, []);

  return (
    <WeatherDataContext.Provider
      value={{
        weatherData,
        setWeatherData,
        locationData,
        setLocationData,
        selectedLocation,
        setSelectedLocation,
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
}


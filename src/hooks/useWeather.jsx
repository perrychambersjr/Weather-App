import { useCallback, useContext, useEffect, useState } from "react";
import { WeatherDataContext } from "../contexts/weatherData";

export const useWeather = () => {
  const { selectedLocation, setWeatherData, weatherData } = useContext(WeatherDataContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!selectedLocation) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${selectedLocation.latitude}&longitude=${selectedLocation.longitude}&hourly=temperature_2m`
        );
        const data = await res.json();
        setWeatherData(data); // update context
      } catch (err) {
        console.error("Error fetching weather: ", err);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [selectedLocation, setWeatherData]);

  return { weatherData, loading };
};
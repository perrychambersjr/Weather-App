import React, { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/weatherData';
import { useLocation } from '../../hooks/useLocation';
import { useWeather } from '../../hooks/useWeather';
import DailyForecast from '../Hero/DailyForecast';
import HeroImage from '../Hero/HeroImage';
import HeroStats from '../Hero/HeroStats';
import HourlyForecast from '../Hero/HourlyForecast';

const Hero = () => {
  const { weatherData, loading: weatherLoading } = useWeather();
  const { selectedLocation } = useContext(WeatherDataContext);

  if (weatherLoading || !weatherData) {
    return (
      <section className="text-center p-10">
        <p className="text-lg text-[var(--color-neutral-200)]">Loading weather...</p>
      </section>
    )
  }

  const firstTime = weatherData.hourly?.time?.[0];
  const time = firstTime
    ? new Date(firstTime).toLocaleString("en-US", {
        weekday: "short", // Thu
        month: "short",   // Sep
        day: "numeric",   // 12
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      })
    : "Now";

  const times = weatherData.hourly?.time ?? [];
  const temps = weatherData.hourly?.temperature_2m ?? [];
  let temperature = '--';

  temperature = temps[0] ?? '--';

  return (
    <div className="max-w-6xl mx-auto px-6 mt-20">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-6">
          <HeroImage 
            location={selectedLocation} 
            date={time} 
            temp={temperature} 
          />
          <HeroStats />
          <DailyForecast />
        </div>

        <div className="col-span-1">
          <HourlyForecast />
        </div>
      </div>
    </div>
  )
}

export default Hero
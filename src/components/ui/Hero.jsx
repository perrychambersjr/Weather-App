import React, { useContext } from 'react';
import { WeatherDataContext } from '../../contexts/weatherData';
import DailyForecast from '../Hero/DailyForecast';
import HeroImage from '../Hero/HeroImage';
import HeroStats from '../Hero/HeroStats';
import HourlyForecast from '../Hero/HourlyForecast';

const Hero = () => {
  const { weatherData, locationData, selectedLocation } = useContext(WeatherDataContext);

  if (!weatherData) {
    return (
      <section className="text-center p-10">
        <p className="text-lg text-[var(--color-neutral-200)]">Loading weather...</p>
      </section>
    )
  }

  console.log(weatherData.hourly)
  const temperature = weatherData.hourly.temperature_2m[0];
  const time = weatherData.hourly.time[0].toLocaleString("en-US", {
    weekday: "short",  // Thu
    month: "short",    // Sep
    day: "numeric",    // 12
    hour: "numeric",
    minute: "2-digit",
    hour12: true       // 12-hour format
  });
  const currentLocation = locationData?.[0];

  return (
    <div className="max-w-6xl mx-auto px-6 mt-20">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-6">
          <HeroImage location={selectedLocation} date={time} temp={temperature} />
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
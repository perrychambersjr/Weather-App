import React from 'react';
import DailyForecast from '../Hero/DailyForecast';
import HeroImage from '../Hero/HeroImage';
import HeroStats from '../Hero/HeroStats';
import HourlyForecast from '../Hero/HourlyForecast';

const Hero = () => {
  const location = "Berlin, Germany";
  const date = "Tuesday, Aug 5, 2025";
  const temperature = "20"

  return (
    <div className="max-w-6xl mx-auto px-6 mt-20">
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-6">
          <HeroImage location={location} date={date} temperature={temperature} />
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
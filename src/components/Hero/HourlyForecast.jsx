import React from 'react';
import HourlyCard from './HourlyCard';

const HourlyForecast = () => {
  const hours = 24;

  return (
    <div className="bg-(--color-neutral-800) w-1/3 h-full rounded-xl mb-2">
      <div className="flex flex-row items-center justify-between p-4">
        <h1 className="text-white text-2xl font-dm font-semibold">Hourly Forecast</h1>
        <button className="bg-(--color-neutral-600) text-white w-1/4 h-1/3 cursor-pointer rounded-xl">Tuesday</button>
      </div>
      {/* Hourly Cards */}
      <div className="flex flex-col items-center justify-center w-full p-4 gap-2">
          <HourlyCard />
          <HourlyCard />
          <HourlyCard />
          <HourlyCard />
          <HourlyCard />
          <HourlyCard />
          <HourlyCard />
          <HourlyCard />
      </div>
    </div>
  )
}

export default HourlyForecast
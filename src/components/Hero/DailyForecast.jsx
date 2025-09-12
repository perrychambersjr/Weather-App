import React from 'react';
import IconRain from '../../assets/images/icon-rain.webp';
import IconSunny from '../../assets/images/icon-sunny.webp';

const DailyForecast = () => {
  // example items
  const days = [
    { d: "Tue", icon: IconRain, high: "20°", low: "14°" },
    { d: "Wed", icon: IconRain, high: "21°", low: "15°" },
    { d: "Thu", icon: IconSunny, high: "24°", low: "14°" },
    // ...
  ];

  return (
    <div className="mt-6">
      <h3 className="text-white font-semibold mb-3">Daily forecast</h3>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {days.map((x) => (
          <div key={x.d} className="bg-[var(--color-neutral-800)] rounded-2xl p-3 min-w-[84px] flex flex-col items-center">
            <span className="text-sm text-white">{x.d}</span>
            <img src={x.icon} className="w-8 h-8 my-2" />
            <div className="flex flex-row justify-between gap-4 items-center">
              <span className="text-sm text-white font-medium">{x.high}</span>
              <span className="text-xs text-white opacity-70">{x.low}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast
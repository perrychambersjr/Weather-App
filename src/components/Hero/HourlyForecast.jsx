import React from 'react';
import IconPartlyCloudy from '../../assets/images/icon-partly-cloudy.webp';
import HourlyCard from './HourlyCard';

const HourlyForecast = () => {
  const hours = 24;

  return (
    <div className="bg-[var(--color-neutral-800)] rounded-2xl p-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-white text-xl font-semibold">Hourly Forecast</h2>
        <button className="bg-[var(--color-neutral-600)] text-white px-3 py-1 rounded-full text-sm whitespace-nowrap cursor-pointer">
          Tuesday
        </button>
      </div>

      <div className="flex-1 overflow-y-auto max-h-[600px] pr-2 space-y-3">
        <HourlyCard time="3 PM" temp="20°" icon={IconPartlyCloudy} />
        <HourlyCard time="4 PM" temp="20°" icon={IconPartlyCloudy} />
        <HourlyCard time="5 PM" temp="19°" icon={IconPartlyCloudy} />
        <HourlyCard time="6 PM" temp="19°" icon={IconPartlyCloudy} />
        <HourlyCard time="7 PM" temp="19°" icon={IconPartlyCloudy} />
        <HourlyCard time="8 PM" temp="19°" icon={IconPartlyCloudy} />
        <HourlyCard time="9 PM" temp="19°" icon={IconPartlyCloudy} />
        <HourlyCard time="10 PM" temp="19°" icon={IconPartlyCloudy} />
        <HourlyCard time="11 PM" temp="19°" icon={IconPartlyCloudy} />
        <HourlyCard time="12 AM" temp="19°" icon={IconPartlyCloudy} /> 

        {/* ... */}
      </div>
    </div>
  )
}

export default HourlyForecast
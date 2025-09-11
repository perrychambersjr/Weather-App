import React from 'react';

const HeroStats = () => {
  const stats = [
    { label: "Feels Like", value: "18°" },
    { label: "Humidity", value: "46%" },
    { label: "Wind", value: "14 km/h" },
    { label: "Precipitation", value: "0 mm" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {stats.map((s) => (
        <div key={s.label} className="bg-[var(--color-neutral-800)] rounded-2xl p-4">
          <div className="text-sm text-white opacity-80">{s.label}</div>
          <div className="text-xl text-white font-semibold">{s.value}</div>
        </div>
      ))}
    </div>
  )
}

export default HeroStats
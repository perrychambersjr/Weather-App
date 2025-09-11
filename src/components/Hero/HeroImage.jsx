import React from 'react'
import BGTodayLarge from '../../assets/images/bg-today-large.svg'
import BGTodaySmall from '../../assets/images/bg-today-small.svg'

const HeroImage = ({ location, date, temperature}) => {
  return (
    <div className="relative w-full h-full">
    {/* Background image */}
    <img
        src={BGTodayLarge}
        alt="Background"
        className="w-full h-full object-cover rounded-lg"
    />

    {/* Overlay text */}
    <div className="absolute inset-0 z-10 flex flex-col justify-between items-center p-6">
        <div className="flex flex-row justify-center items-center gap-2">
            <h1 className="text-white text-2xl font-semibold">{location}</h1>
            <p className="text-white text-sm">{date}</p>
        </div>

        <h1 className="text-white text-4xl font-bold">{temperature}</h1>
    </div>
    </div>
  )
}

export default HeroImage
import React from 'react'
import BGTodayLarge from '../../assets/images/bg-today-large.svg'
import BGTodaySmall from '../../assets/images/bg-today-small.svg'
import IconSunny from '../../assets/images/icon-sunny.webp'

const HeroImage = ({ location, date, temperature}) => {
  return (
    <div className="relative w-2/3 h-full">
    {/* Background image */}
    <img
        src={BGTodayLarge}
        alt="Background"
        className="w-full h-full object-cover rounded-lg"
    />

    {/* Overlay text */}
    <div className="absolute inset-0 z-10 flex flex-row justify-between items-center p-6">
        <div className="flex flex-col justify-center items-start gap-2">
            <h1 className="text-white text-3xl font-semibold">{location}</h1>
            <p className="text-white text-md">{date}</p>
        </div>
        <div className="flex flex-row justify-end items-center gap-2">
          <img src={IconSunny} className="w-30 h-30" />
          <h1 className="text-white text-8xl font-semibold italic">{temperature} °</h1>
        </div>
    </div>
    </div>
  )
}

export default HeroImage
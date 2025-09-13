import React from 'react'
import BGTodayLarge from '../../assets/images/bg-today-large.svg'
import BGTodaySmall from '../../assets/images/bg-today-small.svg'
import IconSunny from '../../assets/images/icon-sunny.webp'

const HeroImage = ({ location, date, temp}) => {

  return (
    <div className="relative h-[320px] rounded-2xl overflow-hidden">
      <img src={BGTodayLarge} alt="bg" className="w-full h-full object-cover" />
      <div className="absolute inset-0 z-10 flex items-center justify-between p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-3xl font-semibol whitespace-pre-line">
            {location ? 
              `${location.name}${location.admin1 ? ", " + location.admin1 : ""} \n${location.country}`: "Your Location"}
        </h1>
          <p className="text-white text-sm opacity-80">{date}</p>
        </div>

        <div className="flex items-center gap-4">
          <img src={IconSunny} className="w-16 h-16" />
          <h1 className="text-white text-[78px] font-semibold leading-none">{temp}°</h1>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
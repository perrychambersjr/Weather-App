import React from 'react';
import HeroImage from '../Hero/HeroImage';
import HourlyForecast from '../Hero/HourlyForecast';

const Hero = () => {
  const location = "Berlin, Germany";
  const date = "Tuesday, Aug 5, 2025";
  const temperature = "20"

  return (
    <div className="grid grid-cols-5 h-full min-h-full grid-rows-3 gap-4 p-20">
        <div className="col-span-3 w-full h-full">
            <HeroImage 
                location={location} 
                date={date} 
                temperature={temperature}
            />
        </div>
        <div className="row-span-4 col-span-2 w-full h-full ">
            <HourlyForecast 
   
            />
        </div>
    </div>
  )
}

export default Hero
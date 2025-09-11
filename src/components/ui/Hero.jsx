import React from 'react';
import HeroImage from '../Hero/HeroImage';
import HourlyForecast from '../Hero/HourlyForecast';

const Hero = () => {
  const location = "Berlin, Germany";
  const date = "Tuesday, Aug 5, 2025";
  const temperature = "20"

  return (
    <div className="flex flex-row items-start jusity-between p-20 gap-4">
            <HeroImage 
                location={location} 
                date={date} 
                temperature={temperature}
            />

            <HourlyForecast 
   
            />

    </div>
  )
}

export default Hero
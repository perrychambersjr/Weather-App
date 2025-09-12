import React, { useContext, useEffect, useState } from 'react';
import { WeatherDataContext } from '../contexts/weatherData';
import Header from './Header';
import LocationSearch from './LocationSearch';
import Hero from './ui/Hero';

const Dashboard = () => {
    const { weatherData } = useContext(WeatherDataContext);
    const [searchQuery, setSearchQuery] = useState('');

    const handleDebouncedChange = async (val) => {
        setSearchQuery(val);
    }

  return (
    <div className="bg-(--color-neutral-900) h-full p-1">
        <div>
            <Header />
            <h1 className="text-[52px] font-bricolage font-semibold text-white flex items-center justify-center">How's the sky looking today?</h1>
        </div>

        <LocationSearch 
            searchQuery={searchQuery} 
            setSearchQuery={setSearchQuery} 
            onDebouncedChange={handleDebouncedChange}
        />
        <Hero />

    </div>
    
  )
}

export default Dashboard
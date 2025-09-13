import React, { useContext, useEffect, useState } from 'react';
import { WeatherDataContext } from '../contexts/weatherData';
import { useLocation } from '../hooks/useLocation';
import { useWeather } from '../hooks/useWeather';
import Header from './Header';
import LocationSearch from './LocationSearch';
import Hero from './ui/Hero';

const Dashboard = () => {
    const { selectedLocation } = useLocation();
    const { weatherData, loading } = useWeather(selectedLocation);

  return (
    <div className="bg-(--color-neutral-900) h-full p-1">
        <Header />
        <h1 className="text-[52px] font-bricolage font-semibold text-white flex items-center justify-center">How's the sky looking today?</h1>

        <LocationSearch />
        <Hero weatherData={weatherData} loading={loading}/>
    </div>
    
  )
}

export default Dashboard
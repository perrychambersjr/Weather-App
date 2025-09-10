import React, { useContext, useEffect } from 'react';
import { WeatherDataContext } from '../contexts/weatherData';

const Dashboard = () => {
    const { weatherData } = useContext(WeatherDataContext);

  return (
    <div>
        <h1>dashboard</h1>
        <pre>{JSON.stringify(weatherData, null, 2)}</pre>

    </div>
  )
}

export default Dashboard
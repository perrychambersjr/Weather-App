import { fetchWeatherApi } from 'openmeteo';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { WeatherDataContext } from '../contexts/weatherData';
import { useLocation } from '../hooks/useLocation';
import { useLocationSearch } from '../hooks/useLocationSearch';
import Dropdown from './ui/Dropdown';
import SearchInput from './ui/SearchInput';

const LocationSearch = () => {
  const {
    locationData,
    setLocationData,
    setSelectedLocation,
  } = useContext(WeatherDataContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [userIsTyping, setUserIsTyping] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      setLocationData([]);
      return;
    }

    const fetchLocations = async () => {
      try {
        const res = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
            searchQuery
          )}`
        );
        const data = await res.json();
        setLocationData(data.results || []);
      } catch (err) {
        console.error("Error fetching locations:", err);
        setLocationData([]);
      }
    };

    fetchLocations();
  }, [searchQuery, setLocationData]);

  const handleSelectLocation = (loc) => {
      setSearchQuery(loc.name);
      setSelectedLocation(loc);
      setUserIsTyping(false);
  }
  
  return (
    <div className="relative w-1/3 mx-auto">
      <SearchInput
        value={searchQuery}
        onChange={(val) => {
          setSearchQuery(val);
          setUserIsTyping(true);
        }}
        onSubmit={() => setUserIsTyping(true)}
      />

      <Dropdown
        items={locationData}
        isOpen={userIsTyping && locationData.length > 0}
        onClose={() => setUserIsTyping(false)}
        onSelect={handleSelectLocation}
      >
        {(loc) => (
          <span className="text-white">
            {loc.name}
            {loc.admin1 ? `, ${loc.admin1}` : ""}, {loc.country}
          </span>
        )}
      </Dropdown>
    </div>
  )
}

export default LocationSearch
import { fetchWeatherApi } from 'openmeteo';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Search from '../assets/images/icon-search.svg';
import { WeatherDataContext } from '../contexts/weatherData';
import { useDebounce } from '../hooks/useDebounce';

const LocationSearch = ({ searchQuery, setSearchQuery, onDebouncedChange }) => {
    const debouncedQuery = useDebounce(searchQuery, 500);
    const { locationData, setLocationData, setWeatherData, setSelectedLocation } = useContext(WeatherDataContext);
    const [showDropdown, setShowDropdown] = useState(false);
    const wrapperRef = useRef(null);
    const [userIsTyping, setUserIsTyping] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('pressed dropdown')
        
        // Fetch weather API here
        const url = "https://geocoding-api.open-meteo.com/v1/search?name=Berlin&count=10&language=en";

        try {
            const response = await fetch(url);
            const data = await response.json();

            if(!data.results || data.results.length === 0) {
                throw new Error("Location not found.");
            }

            console.log(data.results);
            setLocationData(data.results);
            setShowDropdown(true);

        } catch (error) {
            console.error(`Error fetching weather data for ${searchQuery}: `, error);
        }
    }

    const handleSelectLocation = async (location, e) => {
        if(e) e.preventDefault();
        setShowDropdown(false);
        setSearchQuery(location.name);
        setSelectedLocation(location);
        setUserIsTyping(false);
        
        try {
            const res = await fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m`
            );
            const data = await res.json();

            setWeatherData(data);
        } catch (err) {
            console.error("Error fetching weather:", err);
        }
    }

    // debounce input
    useEffect(() => {
        const fetchLocations = async () => {
            if (!debouncedQuery || !userIsTyping) {
                setLocationData([]);
                setShowDropdown(false);
                return;
            }

            try {
                const res = await fetch(
                    `https://geocoding-api.open-meteo.com/v1/search?name=${debouncedQuery}&count=5&language=en`
                );
                const data = await res.json();

                if (data.results) {
                    setLocationData(data.results);
                    setShowDropdown(true);
                } else {
                    setLocationData([]);
                    setShowDropdown(false);
                } 
            } catch (err) {
                console.error("Error fetching locations:", err);
            }
        }


        if (debouncedQuery !== "") {
            fetchLocations();
        }
    }, [debouncedQuery, userIsTyping]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return() => {
            document.removeEventListener("mousedown", handleClickOutside)
        };
    }, []);

  return (
    <div className="relative w-1/3 mx-auto" ref={wrapperRef}>
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        {/* Input wrapper */}
        <div className="relative w-full">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src={Search} alt="search" className="w-4 h-4" />
        </div>

        <input
            type="text"
            placeholder="Search for a place..."
            value={searchQuery}
            onChange={(e) => {
                setSearchQuery(e.target.value)
                setUserIsTyping(true);
            }}
            className="w-full bg-[var(--color-neutral-800)] border border-[var(--color-neutral-600)] text-[var(--color-neutral-200)] text-sm rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
        />
        </div>

        <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
        Search
        </button>
    </form>

    {/* Dropdown */}
    {showDropdown && locationData.length > 0 && (
        <ul className="absolute top-full left-0 mt-1 w-full z-50 bg-[var(--color-neutral-800)] border border-[var(--color-neutral-600)] rounded-lg shadow-lg max-h-60 overflow-y-auto">
        {locationData.map((loc) => (
            <li
            key={loc.id}
            onClick={(e) => handleSelectLocation(loc, e)}
            className="px-4 py-2 text-sm text-[var(--color-neutral-200)] cursor-pointer hover:bg-[var(--color-neutral-700)]"
            >
            {loc.name}, {loc.admin1 ? `${loc.admin1}, ` : ""}{loc.country}
            </li>
        ))}
        </ul>
    )}
    </div>
  )
}

export default LocationSearch
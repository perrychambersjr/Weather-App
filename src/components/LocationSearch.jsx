import React, { useEffect } from 'react';
import Search from '../assets/images/icon-search.svg';
import { useDebounce } from '../hooks/useDebounce';

const LocationSearch = ({ searchQuery, setSearchQuery, onDebouncedChange }) => {
    const debouncedQuery = useDebounce(searchQuery, 500);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        onDebouncedChange(searchQuery);
        // do search
    }

    // debounce input
    useEffect(() => {
        if (debouncedQuery !== "") {
            onDebouncedChange(searchQuery); 
        }
    }, [debouncedQuery, onDebouncedChange]);

  return (
    <form className="flex items-center w-1/3 gap-2 mx-auto"
          onSubmit={handleSubmit}
    >
    <label htmlFor="location-search" className="sr-only">
        Search
    </label>

    <div className="relative w-full">
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <img src={Search} alt="search" className="w-4 h-4 text-[var(--color-neutral-200)]" />
        </div>

        {/* Input */}
        <input
            type="text"
            id="location-search"
            placeholder="Search for a place..."
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            className="w-full bg-[var(--color-neutral-800)] border border-[var(--color-neutral-600)] text-[var(--color-neutral-200)] text-sm rounded-lg pl-10 pr-3 py-2 focus:ring-2 focus:ring-blue-600 focus:outline-none"
        />
    </div>

    {/* Button */}
    <button
        type="submit"
        className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
    >
        <span className="sr-only">Search</span>
        Search
    </button>
    </form>
  )
}

export default LocationSearch
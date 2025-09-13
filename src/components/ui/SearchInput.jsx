import React from 'react';
import Search from '../../assets/images/icon-search.svg';

const SearchInput = ({ value, onChange, onSubmit }) => {
  return (
    <form
    className="flex items-center gap-2"
    onSubmit={(e) => {
      e.preventDefault();
      onSubmit();
    }}
  >
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <img src={Search} alt="search" className="w-4 h-4" />
      </div>
      <input
        type="text"
        placeholder="Search for a place..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-[var(--color-neutral-800)] border border-[var(--color-neutral-600)] 
                   text-[var(--color-neutral-200)] text-sm rounded-lg pl-10 pr-3 py-2 
                   focus:ring-2 focus:ring-blue-600 focus:outline-none"
      />
    </div>

    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
    >
      Search
    </button>
  </form>
  )
}

export default SearchInput
import React, { useEffect, useRef } from 'react';

const Dropdown = ({ items, isOpen, onSelect, onClose, children }) => {
    if(!isOpen) return null;
    if(!items?.length) return null;

    const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            onClose();
        }
    };

    if(isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if(!items || items.length === 0) return null;

  return (
    <ul
        ref={wrapperRef}
        className="absolute top-full left-0 w-full z-50
        bg-(--color-neutral-800) border border-(--color-neutral-600)
        rounded-lg shadow-lg max-h-60 overflow-y-auto"
    >
        {items.map((item, index) => (
            <li key={index}
                onClick={(e) => {e.preventDefault(); onSelect(item); }}
                className="px-4 py-2 text-sm text-[var(--color-neutral-200)] cursor-pointer 
                     hover:bg-[var(--color-neutral-700)]"
            >
                {children(item)}
            </li>
        ))}
    </ul>
  )
}

export default Dropdown;
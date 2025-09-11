import { useEffect, useState } from 'react';

/**
 * Debounce any fast-changing value
 * @param value: The value to be debounced
 * @param delay: Delay in ms
 * @param returns: The debounced value
 */

export function useDebounce(value, delay = 500) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

export const useLocationSearch = (query, userIsTyping) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const debouncedQuery = useDebounce(query, 500);

    useEffect(() => {
        const fetchLocations = async () => {
            if(!debouncedQuery) {
                setResults([]);
                return;
            }

            setLoading(true);
            try {
                const res = await fetch(
                    `https://geocoding-api.open-meteo.com/v1/search?name=${debouncedQuery}&count=5&language=en`
                );
                const data = await res.json();
                setResults(data.results || []);
            } catch(err) {
                console.error(`Error fetching data for location: ${query}`);
                setResults([]);
            } finally {
                setLoading(false);
            }
        };

        fetchLocations();
    }, [debouncedQuery, userIsTyping]);

    return { results, loading };
};
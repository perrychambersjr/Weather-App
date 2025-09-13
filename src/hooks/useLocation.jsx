import { useState } from "react";
import { useLocationSearch } from './useLocationSearch';

const defaultLocation = {
  name: "Berlin",
  country: "Germany",
  latitude: 52.52,
  longitude: 13.41,
};

export const useLocation = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [userIsTyping, setUserIsTyping] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState(defaultLocation);

    const { results: locationData, loading } = useLocationSearch(searchQuery, userIsTyping);

    return {
        searchQuery,
        setSearchQuery,
        userIsTyping,
        setUserIsTyping,
        selectedLocation,
        setSelectedLocation,
        locationData,
        loading
    };
};
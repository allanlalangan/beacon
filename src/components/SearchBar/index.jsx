import { useState, useCallback } from 'react';
import { Autocomplete } from '@react-google-maps/api';

export default function SearchBar({ setCoordinates }) {
  const [autocomplete, setAutocomplete] = useState(null);
  const onAutocompleteLoad = (ac) => {
    setAutocomplete(ac);
  };

  const onPlaceChanged = useCallback(() => {
    setCoordinates({
      lat: autocomplete.getPlace().geometry.location.lat(),
      lng: autocomplete.getPlace().geometry.location.lng(),
    });
  }, [autocomplete, setCoordinates]);
  return (
    <Autocomplete
      className="w-full"
      onLoad={onAutocompleteLoad}
      onPlaceChanged={onPlaceChanged}
    >
      <input
        type="text"
        placeholder="Search"
        className="w-full p-2 text-black"
      />
    </Autocomplete>
  );
}

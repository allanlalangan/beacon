import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useJsApiLoader } from '@react-google-maps/api';
import SearchBar from '../../components/SearchBar';
import Map from '../../components/Map';

const center = {
  lat: 40.58,
  lng: -98.46,
};

export default function MapPage() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    libraries: ['places'],
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
  });

  const [coordinates, setCoordinates] = useState(center);

  return (
    <main className="flex flex-col items-center justify-center">
      <span>Map</span>
      <Link className="underline underline-offset-2" to="/">
        Home
      </Link>
      <section className="flex w-full">
        <div className="w-1/4 px-2">
          {isLoaded && <SearchBar setCoordinates={setCoordinates} />}
        </div>
        <div className="w-3/4">
          {isLoaded && (
            <Map coordinates={coordinates} setCoordinates={setCoordinates} />
          )}
        </div>
      </section>
    </main>
  );
}

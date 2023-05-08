import { memo, useCallback, useState, useRef, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  // width: "12rem",
  minHeight: "100vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const options = {
  clickableIcons: false,
  disableDefaultUI: true,
  zoomControl: true,
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    libraries: ["places"],
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
  });

  const [coordnates, setCoordnates] = useState(center);
  const mapRef = useRef();
  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    (map) => {
      mapRef.current = map;
      setMap(mapRef.current);
    },
    [setMap]
  );

  const onDragEnd = () => {
    console.log({
      lat: map.center.lat(),
      lng: map.center.lng(),
    });
  };

  const onTilesLoaded = () => {
    const newBounds = map.getBounds();
    const tr_latitude = newBounds.getNorthEast().lat();
    const tr_longitude = newBounds.getNorthEast().lng();
    const bl_latitude = newBounds.getSouthWest().lat();
    const bl_longitude = newBounds.getSouthWest().lng();
    console.log({ tr_latitude, tr_longitude, bl_latitude, bl_longitude });
  };

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordnates}
      zoom={11}
      options={options}
      onLoad={onLoad}
      onDrag={onDragEnd}
      onTilesLoaded={onTilesLoaded}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <p>Loading</p>
  );
}

export default memo(Map);

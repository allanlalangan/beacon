import { memo, useCallback, useState, useRef } from 'react';
import { GoogleMap } from '@react-google-maps/api';

const containerStyle = {
  // width: "12rem",
  minHeight: '100vh',
};

const options = {
  clickableIcons: false,
  disableDefaultUI: true,
  zoomControl: true,
};

function Map({ coordinates, setCoordinates }) {
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

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={coordinates}
      zoom={5}
      options={options}
      onLoad={onLoad}
      onDrag={onDragEnd}
      onTilesLoaded={onTilesLoaded}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  );
}

export default memo(Map);

import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import getCenter from 'geolib/es/getCenter';

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  // transformed searchResults into required object for our Map
  const mapCoordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const centerOfMap = getCenter(mapCoordinates);

  const [viewport, setViewPort] = useState({
    width: '100%',
    height: '100%',
    latitude: centerOfMap.latitude,
    longitude: centerOfMap.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/dasiddiqui/cks58j0hp5jzj17pe7jz6cicv"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewPort(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              role="img"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {/* pop up that shows if a marker is clicked */}
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import React from 'react';
import 'leaflet/dist/leaflet.css';

function FitBounds({ markers }) {
  const map = useMap();
  React.useEffect(() => {
    if (markers.length > 0) {
      map.fitBounds(L.latLngBounds(markers));
    }
  }, [markers, map]);
  return null;
}

export default function MapWithMarkers({ markers }) {
  return (
    <MapContainer center={[45.4642, 9.19]} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {markers.map((pos, i) => (
        <Marker key={i} position={pos}>
          <Popup>Posizione {i + 1} - Milano</Popup>
        </Marker>
      ))}
      <FitBounds markers={markers} />
    </MapContainer>
  );
}

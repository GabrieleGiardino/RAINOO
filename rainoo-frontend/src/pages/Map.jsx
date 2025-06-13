import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import React from 'react';
import 'leaflet/dist/leaflet.css';

const emojiIcon = (emoji) =>
  L.divIcon({
    html: `<div style="font-size: 24px;">${emoji}</div>`,
    className: 'emoji-marker',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
  });

function FitBounds({ markers }) {
  const map = useMap();

  React.useEffect(() => {
    if (markers.length > 0) {
      map.fitBounds(L.latLngBounds(markers));
    }
  }, [markers, map]);

  return null;
}

export default function Map({ markers }) {
  const emojis = ['☂️', '📍', '🚏', '🌧️'];

  return (
    <MapContainer center={[45.4642, 9.19]} zoom={13} className="leaflet-container">
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {markers.map((pos, i) => (
        <Marker
          key={i}
          position={pos}
          icon={emojiIcon(emojis[i % emojis.length])}
        >
          <Popup>Posizione {i + 1} - Milano</Popup>
        </Marker>
      ))}
      <FitBounds markers={markers} />
    </MapContainer>
  );
}


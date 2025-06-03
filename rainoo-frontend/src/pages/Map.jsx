import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';

// Fix icona marker Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng
});

function Map() {
  return (
    <div style={{ width: '100%', height: '400px', marginTop: '20px' }}>
      <MapContainer
        center={[45.4642, 9.19]} // Milano
        zoom={13}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <Marker position={[45.4642, 9.19]}>
          <Popup>Stazione Rainoo - Milano 📍 </Popup>
          📍
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  // Fix Leaflet icon issue in React
  useEffect(() => {
    // Fix Leaflet's default icon path issues
    const L_Icon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    L.Marker.prototype.options.icon = L_Icon;
  }, []);

  // Coordinates for Ben Ahmed, Morocco
  const position: [number, number] = [33.062782, -7.230399]; // Approximate coordinates, adjust as needed
  
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <MapContainer center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <strong>Archimedes School</strong><br />
            Lotissement Jawhart Chaouiya<br />
            Ben Ahmed, Maroc
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

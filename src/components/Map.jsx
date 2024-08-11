import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [-1.288, 36.823] // KICC coordinates

  return (
    <MapContainer center={position} zoom={18} style={{ height: "600px", width: "90%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A sample marker
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map;
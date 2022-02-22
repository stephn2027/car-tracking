import React from 'react';
import { LocationMarker } from './Operator';
import { MapContainer, TileLayer } from 'react-leaflet';
function Tracking() {
  return (
    <main className="container">
      <MapContainer center={{ lat: 36.2048, lng: 138.2529 }} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker msg={'customer location'} />
      </MapContainer>
    </main>
  );
}

export default Tracking;

import React,{useState} from 'react';
import NavOperator from './NavOperator';
import { MapContainer, TileLayer, Marker, Popup,useMapEvents } from 'react-leaflet';


function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}


export default function Operator({ user, logout }) {

  const tokyo = [35.689487,139.691711];
  return (
    <React.Fragment>
      <NavOperator user={user} logout={logout}></NavOperator>
      <main className="container" style={{ paddingTop: '75px' }}>
      <MapContainer center={{ lat: 35.689487, lng: 139.691711 }} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://www.openstreetmap.org/#map=10/35.6889/139.7239&layers=YG"
      />
      <LocationMarker />
    </MapContainer>
      </main>
    </React.Fragment>
  );
}

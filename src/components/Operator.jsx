import React, { useEffect, useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import { v4 as uuid } from 'uuid';
import { getCities, getCars } from '../services/httpService';
import NavOperator from './NavOperator';
import carIcon from '../64px-Circle-icons-car.svg.png';
import locationIcon from '../location-svgrepo-com.svg';


export function LocationMarker({ msg }) {
  const [position, setPosition] = useState(null);
  
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  const car = new Icon({
    iconUrl: carIcon,
    iconSize: [45, 45],
    iconAnchor: [25, 25],
  });

  return position === null ? null : (
    <Marker position={position} icon={car}>
      <Popup>{msg}</Popup>
    </Marker>
  );
}

export default function Operator({ user, logout }) {
  const [cities, setCities] = useState([]);
  const [currentCity,setCurrentCity] = useState(null);
  
  const [cars, setCars] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let { data: cities } = await getCities();
      const citiesComplete = cities.map((city) => {
        city.id = uuid();
        city.car = '';
        city.operator = '';
        return city;
      });
      setCities(citiesComplete.slice(0, 30));

      const { data: cars } = await getCars();
      const carsWithID = cars.map((car) => {
        car.id = uuid();
        return car;
      });
      setCars(carsWithID.slice(0, 20));
    }
    fetchData();
  }, []);

  
  const locIcon = new Icon({
    iconUrl:locationIcon,
    iconSize: [45,45],

  }) 
  return (
    <React.Fragment>
      <NavOperator user={user} logout={logout}></NavOperator>
      <main className="container" style={{ paddingTop: '75px' }}>
        <MapContainer center={{ lat: 35.689487, lng: 139.691711 }} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {cities.map((city) => (
            <Marker key={city.id} position={[city.lat, city.lng]}
            icon={locIcon}
            >
            
              <Popup position={[city.lat, city.lng]} >
                <h2>{city.city}</h2>
              </Popup>
            </Marker>
          ))}
          <LocationMarker msg={'you are here'} />
        </MapContainer>
      </main>
    </React.Fragment>
  );
}

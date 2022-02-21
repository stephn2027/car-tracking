import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getCities, getCars } from '../services/httpService';
import { v4 as uuid } from 'uuid';
import City from './City';
import Nav from './Nav';
import Tracking from './Tracking';
import Users from './Users';
import Car from './Car';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../login.css';

export default function Admin({
  user,
  logout,
  managers,
  operators,
  deleteOperator,
  addOperator,
}) {
  const [cities, setCities] = useState([]);
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
      setCities(citiesComplete.slice(0, 10));

      const { data: cars } = await getCars();
      const carsWithID = cars.map((car) => {
        car.id = uuid();
        return car;
      });
      setCars(carsWithID.slice(0, 10));
    }
    fetchData();
  }, []);

  const handleDelete = (city) => {
    const citiesCopy = cities.filter((c) => c.city !== city.city);
    setCities(citiesCopy);
  };
  const handleCityChange = (e,city_id) => {
    e.preventDefault();
    
  };

  const handleCitySubmit = (city) => {
    const newCity = {
      id:uuid(),
      city: city.city,
      admin_name: city.prefecture,
      car: city.car,
      operator: city.operator,
    };
    
    setCities([...cities,newCity])
  };

  const handleCityUpdate = (cityDetails,city_id)=>{
    const editedCity = [...cities];
    const index = editedCity.findIndex(c=>c.id==city_id)
    editedCity[index] = cityDetails;
    setCities(editedCity);
  }

  const deleteCar = (car_id) => {
    setCars(cars.filter((c) => c.id !== car_id));
  };

  const handleCarChange = (car_id) => {
    console.log(car_id);
  };

  const handleCarSubmit=(carDetails)=>{
      const newCar = {
          id:uuid(),
          Name:carDetails.name,
          Miles_per_Gallon:carDetails.milesPerGallon,
          Year:carDetails.year,
          Cylinders:carDetails.cylinders,
      }
      setCars([...cars,newCar]);
  }

  return (
    <React.Fragment>
      <Nav user={user} logout={logout}></Nav>
      <div style={{ paddingTop: '75px' }}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <City
                cities={cities}
                handleCitySubmit={handleCitySubmit}
                handleCityChange={handleCityChange}
                handleDelete={handleDelete}
                cars={cars}
                operators={operators}
                handleCityUpdate={handleCityUpdate}
              />
            }
          />
          <Route path="/tracking" element={<Tracking />} />
          <Route
            path="/users"
            element={
              <Users
                managers={managers}
                operators={operators}
                deleteOperator={deleteOperator}
                addOperator={addOperator}
              />
            }
          />
          <Route
            path="/car"
            element={
              <Car
                cars={cars}
                deleteCar={deleteCar}
                handleCarChange={handleCarChange}
                handleCarSubmit={handleCarSubmit}
              />
            }
          />
        </Routes>
      </div>
    </React.Fragment>
  );
}

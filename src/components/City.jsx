import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import TableHead from './TableHead';
import CityDisplay from './CityDisplay';
function City(props) {
  const {
    cities,
    handleChange,
    handleDelete,
    cars,
    operators,
    handleCitySubmit,
  } = props;
  const [cityDetails, setCityDetails] = useState({
    city: '',
    prefecture: '',
    car: '',
    operator: '',
  });
  

  const handleSubmit = e => {
    e.preventDefault();
    handleCitySubmit(cityDetails);
  };

  return (
    <main className="container">
      <table className="table">
        <TableHead />
        <tbody>
          {cities.map((city, i) => {
            city.id = uuid();
            return (
              <CityDisplay
                key={city.id}
                index={i}
                city={city}
                handleChange={handleChange}
                handleDelete={handleDelete}
              />
            );
          })}
        </tbody>
      </table>

      <form onSubmit={handleSubmit}>
      <div className='form-inner'>
       
          <div className="form-group">
            <label htmlFor="city" className='form-label'>City</label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Enter City Name"
              onChange={(e) =>
                setCityDetails({ ...cityDetails, city: e.target.value })
              }
              value={cityDetails.city}
            />
          </div>
          <div className="form-group">
            <label htmlFor="prefecture" className='form-label'>Prefecture</label>
            <input
              type="text"
              name="prefecture"
              id="prefecture"
              placeholder="Enter prefecture"
              onChange={(e) =>
                setCityDetails({ ...cityDetails, prefecture: e.target.value })
              }
              value={cityDetails.prefecture}
            />
          </div>
          <div className="form-group">
            <label htmlFor="operator" className='form-label'>Operator</label>
            <select
              name="operator"
              id="operator"
              className="form-control"
              onChange={(e) =>
                setCityDetails({ ...cityDetails, operator: e.target.value })
              }
              value={cityDetails.operator}
            >
              <option value="">Choose an operator</option>
              {operators.map((o) => (
                <option key={o.email} value={o.email}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="operator" className='form-label'>Cars</label>
            <select
              name="operator"
              id="operator"
              className="form-control"
              onChange={(e) =>
                setCityDetails({ ...cityDetails, car: e.target.value })
              }
              value={cityDetails.car}
            >
              <option value="">Choose a car</option>
              {cars.map((car) => (
                <option key={car.id} value={car.Name}>
                  {car.Name}
                </option>
              ))}
            </select>
          </div>
          <input type="submit" value="Add" />
        
        </div>
      </form>
    </main>
  );
}

export default City;

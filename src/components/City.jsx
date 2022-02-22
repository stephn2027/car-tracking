import React, { useState } from 'react';

import CityDisplay from './CityDisplay';
import CityEdit from './CityEdit';
import TableHead from './TableHead';
function City(props) {
  const {
    cities,
    handleCityUpdate,
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

  const [editCityId, setEditCityId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCitySubmit(cityDetails);
    setCityDetails({
      city: '',
      prefecture: '',
      car: '',
      operator: '',
    });
  };

  const handleEditClick = (e, city_id) => {
    e.preventDefault();
    setEditCityId(city_id);
  };

  const handleEditedCity = (e) => {
    e.preventDefault();
    setEditCityId(null);
  };
  const handleCancelClick =()=>{
    setEditCityId(null);
  }
  return (
    <main className="container">
      <form onSubmit={handleEditedCity}>
        <table className="table">
          <TableHead />
          <tbody>
            {cities.map((city, i) => {
              return (
                <React.Fragment>
                  {editCityId === city.id ? (
                    <CityEdit
                      city={city}
                      cityID={city.id}
                      handleCityUpdate={handleCityUpdate}
                      setEditCityId={setEditCityId}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <CityDisplay
                      key={city.id}
                      index={i}
                      city={city}
                      handleEdit={handleEditClick}
                      handleDelete={handleDelete}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </form>

      <form onSubmit={handleSubmit}>
        <div className="row gy-2 gx-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="autoSizingInput" className="visually-hidden">
              City
            </label>
            <input
              className="form-control"
              type="text"
              name="city"
              id="autoSizingInput"
              placeholder="Enter City Name"
              onChange={(e) =>
                setCityDetails({ ...cityDetails, city: e.target.value })
              }
              value={cityDetails.city}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="autoSizingInput" className="visually-hidden">
              Prefecture
            </label>
            <input
              className="form-control"
              type="text"
              name="prefecture"
              id="autoSizingInput"
              placeholder="Enter prefecture"
              onChange={(e) =>
                setCityDetails({ ...cityDetails, prefecture: e.target.value })
              }
              value={cityDetails.prefecture}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="autoSizingInput" className="visually-hidden">
              Operator
            </label>
            <select
              name="operator"
              id="autoSizingInput"
              className="form-control"
              onChange={(e) =>
                setCityDetails({ ...cityDetails, operator: e.target.value })
              }
              value={cityDetails.operator}
              style={{ cursor: 'pointer' }}
            >
              <option value="">Choose an operator ▿</option>
              {operators.map((o) => (
                <option key={o.email} value={o.email}>
                  {o.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-auto">
            <label htmlFor="autoSizingInput" className="visually-hidden">
              Cars
            </label>
            <select
              name="cars"
              id="autoSizingInput"
              className="form-control"
              style={{ cursor: 'pointer' }}
              onChange={(e) =>
                setCityDetails({ ...cityDetails, car: e.target.value })
              }
              value={cityDetails.car}
            >
              <option value="">Choose a car ▿</option>
              {cars.map((car) => (
                <option key={car.id} value={car.Name}>
                  {car.Name}
                </option>
              ))}
            </select>
          </div>
          <div
            className="form-inner col-auto"
            style={{ margin: '10px', padding: '0px' }}
          >
            <input type="submit" value="Add" />
          </div>
        </div>
      </form>
    </main>
  );
}

export default City;

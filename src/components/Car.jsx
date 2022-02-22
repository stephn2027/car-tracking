import React, { useState } from 'react';
import { Fragment } from 'react';
import CarDisplay from './CarDisplay';
import CarEdit from './CarEdit';

function Car(props) {
  const { cars, handleCarUpdate, deleteCar, handleCarSubmit } = props;
  const [carDetails, setCarDetails] = useState({
    name: '',
    milesPerGallon: '',
    year: '',
    cylinders: '',
  });
  const [editCarId, setEditCarId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCarSubmit(carDetails);
    setCarDetails({ name: '', milesPerGallon: '', year: '', cylinders: '' });
  };

  const handleEditCarId = (e, car_id) => {
    e.preventDefault();
    setEditCarId(car_id);
  };

  const handleCancelClick = () => {
    setEditCarId(null);
  };

  return (
    <main className="container">
      <form>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Miles/Gallon</th>
              <th>Year</th>
              <th>Cylinders</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cars.map((car, i) => {
              return (
                <Fragment key={car.id}>
                  {editCarId === car.id ? (
                    <CarEdit
                      key={car.id}
                      car={car}
                      handleCancelClick={handleCancelClick}
                      handleCarUpdate={handleCarUpdate}
                      setEditCarId={setEditCarId}
                      carID={car.id}
                      i={i}
                    />
                  ) : (
                    <CarDisplay
                      key={car.id}
                      car={car}
                      deleteCar={deleteCar}
                      handleEditCarId={handleEditCarId}
                      i={i}
                    />
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </form>
      <form onSubmit={handleSubmit}>
        <div className="row gy-2 gx-3 align-items-center">
          <div className="col-auto">
            <label className="visually-hidden" htmlFor="autoSizingInput">
              Car name
            </label>
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Enter Car Name"
              onChange={(e) =>
                setCarDetails({ ...carDetails, name: e.target.value })
              }
              value={carDetails.name}
            />
          </div>

          <div className="col-auto">
            <label className="visually-hidden" htmlFor="autoSizingInput">
              Miles/Gallon
            </label>
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Enter Miles/Gallon"
              onChange={(e) =>
                setCarDetails({ ...carDetails, milesPerGallon: e.target.value })
              }
              value={carDetails.milesPerGallon}
            />
          </div>

          <div className="col-auto">
            <label className="visually-hidden" htmlFor="autoSizingInput">
              Year
            </label>
            <input
              type="date"
              className="form-control"
              id="autoSizingInput"
              placeholder="Enter Year"
              onChange={(e) =>
                setCarDetails({ ...carDetails, year: e.target.value })
              }
              value={carDetails.year}
            />
          </div>

          <div className="col-auto">
            <label className="visually-hidden" htmlFor="autoSizingInput">
              Cylinders
            </label>
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Enter Cylinders"
              onChange={(e) =>
                setCarDetails({ ...carDetails, cylinders: e.target.value })
              }
              value={carDetails.cylinders}
            />
          </div>
          <div className="col-auto form-inner" style={{ padding: '0px' }}>
            <input type="submit" value="Add" />
          </div>
        </div>
      </form>
    </main>
  );
}

export default Car;

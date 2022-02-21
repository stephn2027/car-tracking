import React, {useState } from 'react';

function Car(props) {
  const { cars, handleCarChange, deleteCar,handleCarSubmit } = props;
  const [carDetails,setCarDetails] = useState({name:"",milesPerGallon:"",year:"",cylinders:""})

  const handleSubmit=(e)=>{
    e.preventDefault();
    handleCarSubmit(carDetails);
    setCarDetails({name:"",milesPerGallon:"",year:"",cylinders:""})
  }

  return (
    <main className="container">
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
              <tr key={car.id}>
                <td>{i + 1}</td>
                <td>{car.Name}</td>
                <td>{car.Miles_per_Gallon}</td>
                <td>{car.Year}</td>
                <td>{car.Cylinders}</td>

                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteCar(car.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-info"
                    onClick={() => handleCarChange(car.id)}
                  >
                    Change
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
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
          <div className='col-auto form-inner' style={{padding:"0px"}}>
              <input type="submit" value="Add"/>
          </div>
         
        </div>
      </form>
    </main>
  );
}

export default Car;

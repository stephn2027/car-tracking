import React from 'react';

export default function CarDisplay({ car, deleteCar, handleEditCarId, i }) {
  return (
    <tr key={car.id}>
      <td>{i + 1}</td>
      <td>{car.Name}</td>
      <td>{car.Miles_per_Gallon}</td>
      <td>{car.Year}</td>
      <td>{car.Cylinders}</td>

      <td>
        <button className="btn btn-danger" onClick={() => deleteCar(car.id)}>
          Delete
        </button>
      </td>
      <td>
        <button
          className="btn btn-info"
          onClick={(e) => handleEditCarId(e, car.id)}
        >
          Change
        </button>
      </td>
    </tr>
  );
}

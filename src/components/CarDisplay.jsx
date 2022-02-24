import React from 'react';

export default function CarDisplay({ car, deleteCar, handleEditCarId, i }) {
  return (
    <tr>
      <td>{i + 1}</td>
      <td>{car.Name}</td>
      <td>{car.Miles_per_Gallon}</td>
      <td>{car.Year}</td>
      <td>{car.Cylinders}</td>

      <td className='col-sm'>
        <button className="btn btn-danger" onClick={() => deleteCar(car.id)}>
          Delete
        </button>
      </td>
      <td className='col-sm'>
        <button
          className="btn btn-info"
          onClick={(e) => handleEditCarId(e, car.id)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
}

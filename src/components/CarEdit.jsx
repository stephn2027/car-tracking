import React, { useState } from 'react';

export default function CarEdit({ car, i, handleCancelClick, handleCarUpdate, carID, setEditCarId }) {
  

  const [carEditDetails, setCarEditDetails] = useState({
    name: car.Name,
    milesPerGallon: car.Miles_per_Gallon,
    year: car.Year,
    cylinders: car.Cylinders,
  });

  const handleSubmitUpdate = () => {
    handleCarUpdate(carID, carEditDetails);
    setEditCarId(null);
  };
  return (
    <tr>
      <td>{i + 1}</td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter name"
          name="name"
          onChange={(e) =>
            setCarEditDetails({ ...carEditDetails, name: e.target.value })
          }
          value={carEditDetails.name === '' ? car.Name : carEditDetails.name}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter miles/gallon"
          name="miles"
          onChange={(e) =>
            setCarEditDetails({
              ...carEditDetails,
              milesPerGallon: e.target.value,
            })
          }
          value={
            carEditDetails.milesPerGallon === ''
              ? car.Miles_per_Gallon
              : carEditDetails.milesPerGallon
          }
        />
      </td>

      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter date"
          name="date"
          onChange={(e) =>
            setCarEditDetails({ ...carEditDetails, year: e.target.value })
          }
          value={carEditDetails.year === '' ? car.Year : carEditDetails.year}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter cylinders"
          name="cylinders"
          onChange={(e) =>
            setCarEditDetails({ ...carEditDetails, cylinders: e.target.value })
          }
          value={
            carEditDetails.cylinders === ''
              ? car.Cylinders
              : carEditDetails.cylinders
          }
        />
      </td>
      <td>
        <input
          type="submit"
          value="Save"
          className="btn btn-primary"
          onClick={handleSubmitUpdate}
        />
      </td>
      <td>
        <input
          type="submit"
          value="Cancel"
          className="btn btn-info"
          onClick={handleCancelClick}
        />
      </td>
    </tr>
  );
}

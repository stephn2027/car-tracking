import React, { useState } from 'react';

export default function CarEdit({
  car,
  handleCancelClick,
  handleCarUpdate,
  carID,
  setEditCarId,
}) {
  const [carEditDetails, setCarEditDetails] = useState({
    Name: car.Name,
    Miles_per_Gallon: car.Miles_per_Gallon,
    Year: car.Year,
    Cylinders: car.Cylinders,
  });

  const handleSubmitUpdate = () => {
    handleCarUpdate( carEditDetails,carID);
    setEditCarId(null);
  };
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter name"
          name="name"
          onChange={(e) =>
            setCarEditDetails({ ...carEditDetails, Name: e.target.value })
          }
          value={carEditDetails.Name}
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
              Miles_per_Gallon: e.target.value,
            })
          }
          value={
            carEditDetails.Miles_per_Gallon === ''
              ? car.Miles_per_Gallon
              : carEditDetails.Miles_per_Gallon
          }
        />
      </td>

      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter date"
          name="date"
          onChange={(e) =>
            setCarEditDetails({ ...carEditDetails, Year: e.target.value })
          }
          value={carEditDetails.Year === '' ? car.Year : carEditDetails.Year}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter cylinders"
          name="cylinders"
          onChange={(e) =>
            setCarEditDetails({ ...carEditDetails, Cylinders: e.target.value })
          }
          value={
            carEditDetails.Cylinders === ''
              ? car.Cylinders
              : carEditDetails.Cylinders
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

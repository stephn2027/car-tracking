import React, { useState } from 'react';

export default function CityEdit({ city, handleCityUpdate, cityID }) {
  const [cityEditedDetails, setCityEditedDetails] = useState({
    city: city.city,
    admin_name: city.admin_name,
    car: city.car,
    operator: city.operator 
  });

  const handleSubmit = () => {
    handleCityUpdate(cityEditedDetails,cityID);
    // setCityEditedDetails({ city: city, admin_name: city.admin_name });
  };
  return (
    <tr>
      <td></td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter name"
          name="city"
          onChange={(e) =>
            setCityEditedDetails({...cityEditedDetails, city: e.target.value })
          }
          value={cityEditedDetails.city ===""?city.city:cityEditedDetails.city}
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter prefecture"
          name="prefecture"
          onChange={(e) =>
            setCityEditedDetails({
              ...cityEditedDetails,
              admin_name: e.target.value,
            })
          }
          value={cityEditedDetails.admin_name ===""?city.city:cityEditedDetails.admin_name}
        />
      </td>
      <td>{city.car}</td>
      <td>{city.operator}</td>
      <td>
        <input type="submit" value="Save" onClick={handleSubmit} />
      </td>
    </tr>
  );
}

import React, { useState, useEffect } from 'react';
import {getCities} from '../services/httpService';
import { v4 as uuid } from 'uuid';

function City() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchData(){
      let {data:cities} = await getCities();
      cities = cities.slice(0,15);
      setCities(cities)
    }
    fetchData();
   
  }, []);

  

  const handleDelete=(city)=>{
    const citiesCopy = cities.filter(c=>c.city !== city.city )
    setCities(citiesCopy);
  }
  const handleChange= (city_id)=>{
      console.log(city_id);
  }
  
  return (
    <main className="container">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>City</th>
            <th>Prefecture</th>
            <th>Car</th>
            <th>Operator</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cities.map((city, i) => {
            city.id = uuid();
            return (
              <tr key={uuid()}>
                 
                <td>{i + 1}</td>
                <td>{city.city}</td>
                <td>{city.admin_name}</td>
                <td style={{fontStyle:"italic"}}></td>
                <td style={{fontStyle:"italic"}}>Vacant</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>handleDelete(city)}>Delete</button>
                </td>
                <td>
                  <button className="btn btn-info" onClick={()=>handleChange(city.id)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default City;

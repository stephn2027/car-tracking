import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';
function ManagerDashboard() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () => {
    try {
      let { data } = await axios.get(
        'https://raw.githubusercontent.com/stephn2027/FCCweb/main/myProjects/citySearch/jp.json'
      );
      data = data.slice(0,15);
      setCities(data);
    } catch (error) {
      console.log(error);
    }
  };

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
                <td style={{fontStyle:"italic"}}>Vacant</td>
                <td style={{fontStyle:"italic"}}>Vacant</td>
                <td>
                  <button className="btn btn-danger" onClick={()=>handleDelete(city)}>Delete</button>
                </td>
                <td>
                  <button className="btn btn-info" onClick={()=>handleChange(city.id)}>Change</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
}

export default ManagerDashboard;

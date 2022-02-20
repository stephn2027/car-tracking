import React,{useEffect,useState}from 'react'



function Car(props) {
const {cars,handleCarChange,deleteCar}=props
   

    return (
        <main className='container'>
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
                  <button className="btn btn-danger" onClick={()=>deleteCar(car.id)}>Delete</button>
                </td>
                <td>
                  <button className="btn btn-info" onClick={()=>handleCarChange(car.id)}>Change</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </main>
    )
}

export default Car

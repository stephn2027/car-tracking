import React from 'react'
import {v4 as uuid} from 'uuid';
function Users(operators,managers,handleDelete,handleChange) {
    return (
        
    <main className='container'>
     <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* {operators.map((operator, i) => {
            operator.id = uuid();
            return (
              <tr key={uuid()}>
                 
                <td>{i + 1}</td>
                <td>{operator.name}</td>
                <td>{operator.email}</td>
                <td>{operator.password}</td>
                
                <td>
                  <button className="btn btn-danger" onClick={handleDelete(operator.email)}>Delete</button>
                </td>
                <td>
                  <button className="btn btn-info" onClick={handleChange(operator.id)}>Change</button>
                </td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
        </main>
    )
}

export default Users;

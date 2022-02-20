import React from 'react'
import {v4 as uuid} from 'uuid';
function Users(props) {
   const {operators,managers,deleteOperator,addOperator,handleUserChange}=props;
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
         Managers
        {managers.map((m,i)=>{
            m.id = uuid();
            return (
                <tr key={m.id}>
                <td>{i+1}</td>
                <td>{m.name}</td>
                <td>{m.email}</td>
                <td style={{fontStyle:"italic"}}>Hidden</td>
                </tr>
            )
        })}

        </tbody>
       
        <tbody>
        Operators
          {operators.map((operator, i) => {
            operator.id = uuid();
            return (
              <tr key={operator.id}>
                 
                <td>{i + 1}</td>
                <td>{operator.name}</td>
                <td>{operator.email}</td>
                <td style={{fontStyle:"italic"}}>{operator.password!==""?operator.password:"not yet assigned"}</td>
                
                <td>
                  <button className="btn btn-danger" onClick={()=>deleteOperator(operator.id)}>Delete</button>
                </td>
                <td>
                  <button className="btn btn-info" onClick={()=>handleUserChange(operator.id)}>Change</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </main>
    )
}

export default Users;

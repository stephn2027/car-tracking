import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import UsersDisplay from './UsersDisplay';
import UsersEdit from './UsersEdit';
function Users(props) {
  const { operators, managers, deleteOperator, addOperator, handleUserChange } =
    props;
  const [operatorDetails, setOperatorDetails] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [editUserId, setEditUserId] = useState(null);
  const [isChecked, setCheck] = useState(false);
  const handleCheck = () => setCheck(!isChecked);

  const handleSubmit = (e) => {
    e.preventDefault();
    addOperator(operatorDetails);
    setOperatorDetails({
      name: '',
      email: '',
      password: '',
    });
    handleCheck();
  };

  const generateSixDigitCode = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const handleEditClick = (user_id) => {
   
    setEditUserId(user_id);
  };
  const handleCancelClick = () => {
    setEditUserId(null);
  };
  

  return (
    <main className="container">
      <form >
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
           <tr>Managers</tr> 
            {managers.map((m, i) => {
              m.id = uuid();
              return (
                <tr key={m.id}>
                  <td>{i + 1}</td>
                  <td>{m.name}</td>
                  <td>{m.email}</td>
                  <td style={{ fontStyle: 'italic' }}>Hidden</td>
                </tr>
              );
            })}
          </tbody>

          <tbody>
            <tr>Operators</tr> 
            {operators.map((operator, i) => {
              
              return (
                <React.Fragment key={i}>
                  {editUserId !== null ? (
                    <UsersEdit
                      key={operator.id}
                      operator={operator}
                      handleCancelClick={handleCancelClick}
                      handleUserChange={handleUserChange}
                      setEditUserId={setEditUserId}
                      userID={operator.id}
                      i={i}
                    />
                  ) : (
                    <UsersDisplay
                      i={i}
                      key={operator.id}
                      operator={operator}
                      handleEditClick={handleEditClick}
                      deleteOperator={deleteOperator}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </form>
      <form onSubmit={handleSubmit}>
        <div className="row gy-2 gx-3 align-items-center">
          <div className="col-auto">
            <label className="visually-hidden" htmlFor="autoSizingInput">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="autoSizingInput"
              placeholder="Enter Name"
              onChange={(e) =>
                setOperatorDetails({ ...operatorDetails, name: e.target.value })
              }
              value={operatorDetails.name}
            />
          </div>
          <div className="col-auto">
            <label className="visually-hidden" htmlFor="autoSizingInputGroup">
              Email
            </label>
            <div className="input-group">
              <div className="input-group-text">@</div>
              <input
                type="text"
                className="form-control"
                id="autoSizingInputGroup"
                placeholder="Enter Email"
                onChange={(e) =>
                  setOperatorDetails({
                    ...operatorDetails,
                    email: e.target.value,
                  })
                }
                value={operatorDetails.email}
              />
            </div>
          </div>
          <div className="col-auto">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoSizingCheck"
                checked={isChecked}
                onChange={() => {
                  setOperatorDetails({
                    ...operatorDetails,
                    password: generateSixDigitCode(),
                  });
                  handleCheck();
                }}
              />
              <label className="form-check-label" htmlFor="autoSizingCheck">
                Generate password?
              </label>
            </div>
          </div>

          <div
            className="col-auto form-inner"
            style={{ padding: '0px', margin: '10px' }}
          >
            <input type="submit" className="btn btn-primary" value="Add" />
          </div>
        </div>
      </form>
    </main>
  );
}

export default Users;

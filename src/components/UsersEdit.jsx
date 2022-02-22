import React,{useState} from 'react';


export default function UsersEdit({userID,operator,handleCancelClick,handleUserChange,setEditUserId,i}) {
 
 const [userDetails,setUserDetails] = useState({name:operator.name,email:operator.email,password:operator.password});
 
 const handleSubmit = ()=>{
    handleUserChange(userDetails,userID);
    setEditUserId(null)
    
 };    

  return (
    <tr>
    <td>{i+1}</td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter name"
          name="name"
          onChange={(e) =>
            setUserDetails({ ...userDetails, name: e.target.value })
          }
          value={
            userDetails.name === '' ? operator.name : userDetails.name
          }
        />
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter email"
          name="email"
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
          value={
            userDetails.email === '' ? operator.email : userDetails.email
          }
        />
      </td>
     
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter password"
          name="password"
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
          value={
            userDetails.password === '' ? operator.password : userDetails.password
          }
        />
      </td>
      <td>
        <input
          type="submit"
          value="Save"
          className="btn btn-primary"
          onClick={handleSubmit}
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

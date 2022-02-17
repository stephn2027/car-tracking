import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Login from './Login';
import Admin from './Admin';
import Operator from './Operator';
import '../App.css';

function App() {
  const admin = { email: 'admin@admin.com', password: 'admin123' };
  const operator = {email: 'user@user.com', password: 'user123'};
  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const login = details => {
    if((details.email === admin.email && details.password === admin.password )|| (details.email === operator.email && details.password === operator.password )){
      console.log("Logged In");
      setUser({name: details.name,email:details.email})
    }else{
      setError("details do not match!");
    }

  };

  const logout = details => setUser({name:"",email:""});

  return (
    <React.Fragment>
      <div className='App'>
        {user.email !== '' ? (
          user.email === admin.email ? (
            <Admin user={user} logout={logout}></Admin>
          ) : (
            <Operator user={user} logout={logout}/>
          )
        ) : (
          <Login login={login} error={error} />
        )}
      </div>
    </React.Fragment>
  );
}

export default App;

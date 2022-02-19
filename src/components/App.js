import React, { useState } from 'react';
import Login from './Login';
import Admin from './Admin';
import Operator from './Operator';
import '../App.css';

function App() {
  const [currentAdmin, setAdmin] = useState({
    email: 'admin@admin.com',
    password: 'admin123',
  });
  const [currentOperator, setOperator] = useState({
    name: 'Jessie',
    email: 'user@user.com',
    password: 'user123',
  });
  const admin = [
    { name: 'Chelsey', email: 'admin@admin.com', password: 'admin123' },
    { name: 'Tabitha', email: 'admin2@admin.com', password: 'admintwo' },
  ];
  const operators = [
    { name: 'Jessie', email: 'user@user.com', password: 'user123' },
    { name: 'Patrick', email: 'user2@user.com', password: 'usertwo' },
  ];
  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const login = (details) => {
    if (
      (details.email === currentAdmin.email &&
        details.password === currentAdmin.password) ||
      details.password === currentOperator.password
    ) {
      console.log(`${details.name} 'Logged In'`);
      setUser({ name: details.name, email: details.email });
    } else {
      setError('details do not match!');
    }
  };

  const logout = (details) => setUser({ name: '', email: '' });

  const addOperator = (operator) => {
    const newOperator = {
      name: operator.name,
      email: operator.email,
      password: operator.password,
    };
    operators.push(newOperator);
  };

  const generateSixDigitCode = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  return (
    <React.Fragment>
      <div className="App">
        {user.email !== '' ? (
          user.email === admin.email ? (
            <Admin
              user={user}
              logout={logout}
              addOperator={addOperator}
              admin={admin}
              operators={operators}
            />
          ) : (
            <Operator user={user} logout={logout} />
          )
        ) : (
          <Login login={login} error={error} />
        )}
      </div>
    </React.Fragment>
  );
}

export default App;

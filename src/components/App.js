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

  const [operators,setOperators] = useState(operatorsList);
  const [managers,setmanagers] = useState(adminList);
  
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
    setOperators(...operators,newOperator);
  };

  const deleteOperator=(operator_id)=>{
    const filteredOperators = operators.filter(o=>o.email!==operator_id);
    setOperators(filteredOperators);
  };

 


  const generateSixDigitCode = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  return (
    <React.Fragment>
      <div className="App">
        {user.email !== '' ? (
          user.email === currentAdmin.email ? (
            <Admin
              user={user}
              logout={logout}
              addOperator={addOperator}
              deleteOperator={deleteOperator}
              managers={managers}
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

const adminList = [
  { name: 'Chelsey', email: 'admin@admin.com', password: 'admin123' },
  { name: 'Tabitha', email: 'admin2@admin.com', password: 'admintwo' },
];
const operatorsList = [
  { name: 'Jessie', email: 'user@user.com', password: 'user123' },
  { name: 'Patrick', email: 'user2@user.com', password: '' },
];

export default App;

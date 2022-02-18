import React from 'react';
import { Routes,Route } from 'react-router-dom';
import ManagerDashboard from './ManagerDashboard';
import NavBar from './Navbar';
export default function Admin({user,logout}) {
    return (
    <React.Fragment>
    <NavBar user={user} logout={logout}></NavBar>
        <div className="admin-dashboard">
        <h2>
          welcome, Admin <span>{user.name}</span>
        </h2>
        <button onClick={logout}>Logout</button>

      </div>
      <Routes>
          <Route path="/" component={<ManagerDashboard/>} />
      </Routes>
      </React.Fragment>
    )
}

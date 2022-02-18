import React from 'react';
import { Routes,Route } from 'react-router-dom';
import ManagerDashboard from './ManagerDashboard';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tracking from './Tracking';
import Customer from './Customer';
import Car from './Car';
export default function Admin({user,logout}) {
    return (
    <React.Fragment>
    <Nav user={user} logout={logout}></Nav>
     <div style={{paddingTop:"75px"}}>   
      <Routes>
          <Route exact path="/" element={<ManagerDashboard/>} />
          <Route path="/tracking" element={<Tracking/>} />
          <Route path="/customer" element={<Customer/>} />
          <Route path="/car" element={<Car/>} />
      </Routes>
      </div>
      </React.Fragment>
    )
}

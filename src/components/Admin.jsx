import React from 'react';
import { Routes,Route } from 'react-router-dom';
import City from './City';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tracking from './Tracking';
import Users from './Users';
import Car from './Car';

export default function Admin({user,logout}) {
    

    
    return (
    <React.Fragment>
    <Nav user={user} logout={logout}></Nav>
     <div style={{paddingTop:"75px"}}>   
      <Routes>
          <Route exact path="/" element={<City />} />
          <Route path="/tracking" element={<Tracking/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/car" element={<Car/>} />
      </Routes>
      </div>
      </React.Fragment>
    )
}

//This is the element on the DashboardPage that holds buttons for user actions
//User should be able to logout and create a new property from here
//create buttons for each of those actions
import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="NavBar">
        <h1>AirBnB Optimal Price</h1>        
      
        <Link to='/components/AddPropertyPage'>New Property</Link>
        <Link to='/components/LoginPage'>Logout</Link>
      </div>
    </div>
  );
};

export default Navigation;

// <Link to='/'>Home</Link>
//This page should contain the most important information the user will want to see
//Main element of this page is displaying the user's properties and the prices that should be charged for them

//components contained in this page:
//Navbar
//PropertyCardList

import React from 'react';
import Navigation from './Navbar';
import AddProperty from './AddPropertyPage';
// import LoginPage from './LoginPage';
// import { AddProperty, LoginPage, Navigation } from './components';
import { Route } from 'react-router-dom';

function Dashboard() {
    return (
      <div>
        <Navigation />

        <Route exact path='/components/AddPropertyPage' component={AddProperty}/>
    

      </div>
    );
  }
  
  export default Dashboard;

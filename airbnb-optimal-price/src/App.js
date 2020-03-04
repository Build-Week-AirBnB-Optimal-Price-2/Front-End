import React from 'react';
import './App.css';
// import LoginPage from './components/LoginPage';
import Dashboard from './components/DashboardPage';
import LoginPage from './components/LoginPage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/components/DashboardPage' component={Dashboard}/>
        <Route exact path='/components/LoginPage' component={LoginPage}/>
      </header>
    </div>
  );
}

export default App;

//testing

// <LoginPage />
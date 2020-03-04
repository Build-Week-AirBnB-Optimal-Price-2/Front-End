import React from 'react';
import './App.css';
import LoginForm from './components/LoginPage';
import PropertyCardList from './components/PropertyCardList'


function App() {
  return (
    <div className="App">
      <header className="App-header">
       {/* <LoginForm /> */}
        <PropertyCardList />
      </header>
    </div>
  );
}

export default App;

//testing
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux'
import { propertyReducer as reducer } from './reducers/propertyReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

import LoginPage from './components/LoginPage'
import DashboardPage from './components/DashboardPage'
import AddPropertyPage from './components/AddPropertyPage'
import './App.css';
import LoginForm from './components/LoginPage';

const store = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <Router>
      <Provider store={store} >
        <div className="App">
          <Switch>
            <Route exact path='/' component={LoginPage} />
            <Route path='/home' component={DashboardPage} />
            <Route path='/new-property' component={AddPropertyPage} /> 
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;


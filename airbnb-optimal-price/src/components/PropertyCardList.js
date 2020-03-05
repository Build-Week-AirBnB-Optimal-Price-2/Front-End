//This components is a container for PropertyCard components 

//map through an array of of objects and create a PropertyCard for each 


import React, {useState} from 'react';
import PropertyCard from './PropertyCard';
import AddProperty from './AddPropertyPage';
import {Route, Switch} from 'react-router-dom'

function PropertyCardList() {
  const [property, setProperty] = useState([
    {
      id: 1,
      name: 'Water Side Loft',
      propertyType: 'Town House',
      price: '125usd a night'    }
  ]);
  const addNewProperty = propertyCarry => {
      
    const newProperty = {
      id: Date.now(),
      name: propertyCarry.name,
      propertyType: propertyCarry.propertyType,
      price: propertyCarry.price
    };
    setProperty([...property, newProperty])
  }
  return (
    <div>
        <Switch>
            <Route path='/home'>
            <PropertyCard property ={property} />
            </Route>
            <Route path='/AddPropertyPage'>
                 <AddProperty addNewProperty = {addNewProperty} />
            </Route>
        </Switch>
    </div>
  );
}

export default PropertyCardList;

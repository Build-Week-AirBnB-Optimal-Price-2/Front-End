//This components is a container for PropertyCard components

//map through an array of of objects and create a PropertyCard for each

import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
// import { UPDATE_PROPERTIES } from "../actions";
// import EditCard from "./EditCard"
import { Tween, Timeline } from 'react-gsap';

function PropertyCardList() {
  const [property, setProperty] = useState([
    {
      id: 1,
      name: 'Comfy Loft in Mitte',
      accomodates: 5,
      bathrooms: 2.5,
      size: 20,
      distance: 0,
      minimumNights: 3,
      propertyType: 'Apartment',
      roomType: 'Entire House/Apt',
      neighborhood: 'Mitte',
    },
    {
      id: 2,
      name: 'Condo in Mitte',
      accomodates: 2,
      bathrooms: 2.5,
      size: 10,
      distance: 200,
      minimumNights: 1,
      propertyType: 'Condo',
      roomType: 'Private Room',
      neighborhood: 'Mitte',
    },
    {
      id: 3,
      name: 'Condo in Bitte',
      accomodates: 2,
      bathrooms: 2.5,
      size: 10,
      distance: 200,
      minimumNights: 1,
      propertyType: 'Condo',
      roomType: 'Private Room',
      neighborhood: 'Mitte',
    }
  ]);
  // const addNewProperty = newProp => {
      
  //   const newProperty = {
  //     id: Date.now(),
  //     name: newProp.name,
  //     propertyType: newProp.propertyType,
  //     accomodates: newProp.accomodates,
  //     bathrooms: newProp.bathrooms,
  //     size: newProp.size,
  //     distance: newProp.distance,
  //     minimumNights: newProp.minimumNights,
  //     propertyType: newProp.propertyType,
  //     roomType: newProp.roomType,
  //     neighborhood: newProp.neighborhood,
  //   };
  //   setProperty([...property, newProperty])
  // }

  const DashboardCardComponent = () => (
    <Timeline
      target={
        <div>
          {property.map(e => (
              <PropertyCard property ={e} />
              ))}
        </div>
      }
    >
      <Tween from={{ y: '20px', opacity: .5 }} to={{ y: '20px' }} />
      <Tween from={{ y: '20px', opacity: .5 }} to={{ y: '0px', opacity: 1 }} />

    </Timeline>
  );

  return (
    <div>
      <DashboardCardComponent></DashboardCardComponent>
    </div>
  );
}

export default PropertyCardList;

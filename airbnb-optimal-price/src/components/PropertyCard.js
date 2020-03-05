//This is a component that shows the general info about a property input by the user, as well as the price estimate created by data science

//key information that should be on this card:
//property name
//[ Stuff that data science tells us we need ]
//price estimate


import React from "react";
import {Link} from "react-router-dom"



const PropertyCard = props => {
    // console.log(props)


  return (
    <div className='dashCard'>
      <h2>{props.property.name}</h2>

      <p>Accomodates {props.property.accommodates}</p>
      <p>Has {props.property.bathrooms} Bathrooms</p>
      <p>Square Feet: {props.property.size}</p>
      <p>{props.property.distance} from Berlin Center</p>
      <p>Minimum Nights: {props.property.minimum_nights}</p>
      <p>Property Type: {props.property.property_type}</p>
      <p>Room Type: {props.property.room_type}</p>
      <p>Located in: {props.property.neighbourhood}</p>

      <Link to={`/new-property/${props.property.id}`} >
        <button>Edit</button>
      </Link>
        <button> Delete </button>
    </div>
  );
};

export default PropertyCard;

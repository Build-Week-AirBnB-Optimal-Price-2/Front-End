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
        <div >
          <h2>{props.property.name}</h2>

          <p>Accomodates {props.property.accomodates}</p>
          <p>Has {props.property.bathrooms} Bathrooms</p>
          <p>Square Feet: {props.property.size}</p>
          <p>{props.property.distance} from Berlin Center</p>
          <p>Minimum Nights: {props.property.minimumNights}</p>
          <p>Property Type: {props.property.propertyType}</p>
          <p>Room Type: {props.property.roomType}</p>
          <p>Located in: {props.property.neighborhood}</p>

          <Link to={`/editCard/${props.property.id}`} >
            <button>Edit</button>
          </Link>
          {/* <Route path={`/editCard`}> 
              <EditCard property = {props.property} />
          </Route> */}

            
        </div>

  );
};

export default PropertyCard;

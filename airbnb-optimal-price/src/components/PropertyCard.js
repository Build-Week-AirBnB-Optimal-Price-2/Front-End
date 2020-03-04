//This is a component that shows the general info about a property input by the user, as well as the price estimate created by data science

//key information that should be on this card:
//property name
//[ Stuff that data science tells us we need ]
//price estimate


import React from "react";

const PropertyCard = props => {
    // console.log(props)
  return (
    <div>
      {props.property.map(property => (
        <div key={property.id}>
          <h2>{property.name}</h2>
          <p>{property.propertyType}</p>
          <p>{property.price}</p>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;

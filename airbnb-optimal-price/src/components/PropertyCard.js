//This is a component that shows the general info about a property input by the user, as well as the price estimate created by data science

//key information that should be on this card:
//property name
//[ Stuff that data science tells us we need ]
//price estimate

import React from 'react';
import { Link } from 'react-router-dom';
import {
  translatePropertyType,
  translateRoomType,
  translateNeighbourhood
} from '../utils/mapOptionToText';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { refreshPropertyList } from '../actions';

const PropertyCard = props => {
  // console.log(props)

  const deleteProperty = () => {
    axiosWithAuth()
      .delete(`/data/${props.property.id}`)
      .then(res => {
        console.log(res);
        props.setRefresher(!props.refresher);
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='dashCard'>
      <h2>{props.property.name}</h2>

      <p>Accomodates {props.property.accommodates} People</p>
      <p>Has {props.property.bathrooms} Bathrooms</p>
      <p>{props.property.size} Square Feet</p>
      <p>{props.property.distance} miles from Berlin Center</p>
      <p>Minimum Stay: {props.property.minimum_nights} Nights</p>
      <p>
        Property Type: {translatePropertyType(props.property.property_type)}
      </p>
      <p>Room Type: {translateRoomType(props.property.room_type)}</p>
      <p>Located in: {translateNeighbourhood(props.property.neighbourhood)}</p>

      <Link to={`/new-property/${props.property.id}`}>
        <button>Edit</button>
      </Link>
      <button onClick={deleteProperty}> Delete </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    updateProperties: state.updateProperties
  };
};

export default connect(mapStateToProps, { refreshPropertyList })(PropertyCard);

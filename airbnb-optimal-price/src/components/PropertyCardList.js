//This components is a container for PropertyCard components

//map through an array of of objects and create a PropertyCard for each

import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import { UPDATE_PROPERTIES } from '../actions';
import EditCard from './EditCard';
import { connect } from 'react-redux';
import { Tween, Timeline } from 'react-gsap';

const PropertyCardList = props => {

  const DashboardCardComponent = () => (
    <Timeline
      target={
        <div>
          {props.properties.map(e => (
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
    <>
      {!props.error ? (
        !props.isFetchingData ? (
          <div>
            {props.properties.length > 0 ? (
              <DashboardCardComponent></DashboardCardComponent>)
           : (
              <p>No Properties Added Yet</p>
            )}
          </div>
        ) : (
          <div>Fetching Data ... </div>
        )
      ) : (
        <div>Error Fetching Data</div>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    properties: state.properties,
    isFetchingData: state.isFetchingData,
    error: state.error
  };
};

export default connect(mapStateToProps)(PropertyCardList);

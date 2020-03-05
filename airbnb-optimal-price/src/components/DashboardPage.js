//This page should contain the most important information the user will want to see
//Main element of this page is displaying the user's properties and the prices that should be charged for them

//components contained in this page:
//Navbar
//PropertyCardList

import React, { useEffect } from 'react';
import Navbar from './Navbar';
import AddProperty from './AddPropertyPage';
import PropertyCardList from './PropertyCardList';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getData } from '../actions';

const PropCardStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  background-color: #c0c0c0;
  color: #470b97;
  border-radius: 10px;
`;

const CopyRight = styled.div`
  color: #c0c0c0;
`;

const DashboardPage = props => {
  useEffect(() => {
    props.getData(window.localStorage.getItem('userId'));
  }, [props.updateProperties]);
  return (
    <div className='dashboard'>
      <Navbar />

      <div className='cardStyle'>
        <PropCardStyle>
          <PropertyCardList />
        </PropCardStyle>
      </div>

      <CopyRight>
        <p> &#9400; 2020, AirBnB Optimal Price</p>
      </CopyRight>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.userId,
    properties: state.properties,
    error: state.error,
    isFetchingData: state.isFetchingData,
    updateProperties: state.updateProperties
  };
};

export default connect(mapStateToProps, { getData })(DashboardPage);

//This page should contain the most important information the user will want to see
//Main element of this page is displaying the user's properties and the prices that should be charged for them

//components contained in this page:
//Navbar
//PropertyCardList

import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import PropertyCardList from './PropertyCardList';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getData } from '../actions';

const PropCardStyle = styled.div`
  width: 100%;
  background-color: #c0c0c0;
  color: #470b97;
  border-radius: 10px;
  margin: 1%;
`;

const CopyRight = styled.div`
  color: #c0c0c0;
`;

const DashboardPage = props => {
  const [refresher, setRefresher] = useState(false);
  useEffect(() => {
    props.getData(window.localStorage.getItem('userId'));
  }, [refresher]);
  return (
    <div className='dashboard'>
      <Navbar />

      <div className='cardStyle'>
        <PropCardStyle>
          <PropertyCardList refresher={refresher} setRefresher={setRefresher} />
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

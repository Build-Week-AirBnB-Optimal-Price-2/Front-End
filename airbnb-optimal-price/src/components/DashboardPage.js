//This page should contain the most important information the user will want to see
//Main element of this page is displaying the user's properties and the prices that should be charged for them

//components contained in this page:
//Navbar
//PropertyCardList

import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { getData } from "../actions";

import PropertyCardList from "./PropertyCardList";

const DashboardPage = props => {
  useEffect(() => {
    props.getData(props.userId);
  }, [props.updateProperties]);
  return (
    <div>
      <Navbar />
      <PropertyCardList />
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

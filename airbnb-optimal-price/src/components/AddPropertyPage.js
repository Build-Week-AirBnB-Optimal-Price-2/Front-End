//This page contains a form for adding a new property to a user's list of saved properties
//The info from this form will be used to create a new card on the dashboard page
//data from this form will be sent to the data science api for a price estimate

//Form inputs should include:
//[ Waiting to hear from the data science team ]
//submit button
//back button (return to dashboard with no submission)

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';

const PropInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #470b97;
`;

const InnerPropInput = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  background-color: #c0c0c0;
  border-radius: 10px;
  padding: 1% 0;
  margin: 0 0 2% 0;
`;

const AddProperty = props => {
  const [property, setProperty] = useState({
    name: '',
    host_is_superhost: false,
    latitude: '',
    longitude: '',
    property_type: 0,
    accommodates: '',
    bathrooms: '',
    bedrooms: '1',
    room_type: 0,
    bed_type: 0,
    size: '',
    distance: '',
    security_deposit: '',
    cleaning_fee: '',
    guests_included: '',
    extra_people: '',
    minimum_nights: '',
    cancellation_policy: 0,
    tv: false,
    wifi: false,
    washer: false,
    dryer: false,
    kitchen: false,
    heating: false,
    free_parking: false,
    smoking_allowed: false,
    neighbourhood: 0,
    instant_bookable: false,
    is_business_travel_ready: false
  });
  const handleSelectChanges = e => {
    const valueSelected = parseInt(e.target.value);
    setProperty({ ...property, [e.target.name]: valueSelected });
    console.log(e.target.name, valueSelected, property);
  };
  const handleChanges = e => {
    setProperty({ ...property, [e.target.name]: e.target.value });
    console.log(property);
  };
  const handleCheckChanges = e => {
    setProperty({ ...property, [e.target.name]: e.target.checked });
    console.log(property);
  };

  // const validate = () => {
  //     let numError = "";

  //     property.map( e => {
  //         if ( e > 6 || e < 1) {
  //             numError = `${e} needs to be between 1 and 6`
  //         }

  //         if (numError) {
  //           setProperty({...property, numError});
  //           return false;
  //         } else {return true;}
  //     })

  //   };

  const submitForm = e => {
    e.preventDefault();
    console.log(property);
    // const isValid = validate();
    // if(isValid) {
    axiosWithAuth()
      .post(`/data/input/${window.localStorage.getItem('userId')}`, property)
      .then(res => console.log(res))
      .catch(err => console.log(err));
    // }
  };

  return (
    <div className='addProp'>
      <div className='return'>
        <Link to='/home'>return</Link>
      </div>

      <PropInput>
        <InnerPropInput>
          <form onSubmit={submitForm}>
            <label htmlFor='name'> Name: </label>
            <input
              id='name'
              type='text'
              name='name'
              onChange={handleChanges}
              placeholder='Name'
              value={property.name}
              required
            />
            <br />
            <label htmlFor='latitude'> Latitude:</label>
            <input
              id='latitude'
              type='number'
              name='latitude'
              onChange={handleChanges}
              placeholder='Latitude'
              value={property.latitude}
              required
            />
            <br />
            <label htmlFor='longitude'> Longitude: </label>
            <input
              id='longitude'
              type='number'
              name='longitude'
              onChange={handleChanges}
              placeholder='Longitude'
              value={property.longitude}
              required
            />
            <br />
            <label htmlFor='accommodates'> Accommodates:</label>
            <input
              id='accomodates'
              type='number'
              name='accommodates'
              onChange={handleChanges}
              placeholder='Number can Accomodate'
              value={property.accommodates}
              required
            />
            <br />4<label htmlFor='bathrooms'> Bathrooms:</label>
            <input
              id='bathrooms'
              type='number'
              name='bathrooms'
              onChange={handleChanges}
              placeholder='Number of Bathrooms'
              value={property.bathrooms}
              required
            />
            <br />
            <label htmlFor='size'> Size:</label>
            <input
              id='size'
              type='number'
              name='size'
              onChange={handleChanges}
              placeholder='Size of property'
              value={property.size}
              required
            />
            <br />
            <label htmlFor='distance'>Distance: </label>
            <input
              id='distance'
              type='number'
              name='distance'
              onChange={handleChanges}
              placeholder='distance'
              value={property.distance}
              required
            />
            <br />
            <label htmlFor='securityDeposit'>Security Deposit:</label>
            <input
              id='securityDeposity'
              type='number'
              name='security_deposit'
              onChange={handleChanges}
              placeholder='Security Deposit'
              value={property.security_deposit}
              required
            />
            <br />
            <label htmlFor='cleaningFee'>Cleaning Fees:</label>
            <input
              id='cleaningFee'
              type='number'
              name='cleaning_fee'
              onChange={handleChanges}
              placeholder='Cleaning Fees'
              value={property.cleaning_fee}
              required
            />
            <br />
            <label htmlFor='guestsIncluded'>Guests Included:</label>
            <input
              id='guestsIncluded'
              type='number'
              name='guests_included'
              onChange={handleChanges}
              placeholder='Guests Included'
              value={property.guests_included}
              required
            />
            <br />
            <label htmlFor='extraPeople'> Extra People: </label>
            <input
              id='extraPeople'
              type='number'
              name='extra_people'
              onChange={handleChanges}
              placeholder='Extra People'
              value={property.extra_people}
              required
            />
            <br />
            <label htmlFor='minimumNights'>Minimum Nights</label>
            <input
              id='minimumNights'
              type='number'
              name='minimum_nights'
              onChange={handleChanges}
              placeholder='Minimum Nights'
              value={property.minimum_nights}
              required
            />
            <br />
            <label htmlFor='cancellationPolicy'> Cancellation Policy:</label>
            <select
              id='cancellationPolicy'
              name='cancellation_policy'
              onChange={handleSelectChanges}
              value={property.cancellation_policy}
              required
            >
              <option value='0'>Strict 14 with grace period</option>
              <option value='1'>Flexible</option>
              <option value='2'>Moderate</option>
              <option value='3'>Super Strict 30</option>
              <option value='4'>Super Strict 30</option>
            </select>
            <br />
            <label htmlFor='propertyType'> Property Type:</label>
            <select
              id='propertyType'
              name='property_type'
              onChange={handleSelectChanges}
              value={property.property_type}
              required
            >
              <option value='0'>Guest House</option>
              <option value='1'>Apartment</option>
              <option value='2'>Condo</option>
              <option value='3'>House</option>
              <option value='4'>Other</option>
            </select>
            <br />
            <label htmlFor='roomType'> Room Type:</label>
            <select
              id='roomType'
              name='room_type'
              onChange={handleSelectChanges}
              value={property.room_type}
              required
            >
              <option value='0'>Private Room</option>
              <option value='1'>Entire House/Apt</option>
              <option value='2'>Shared Room</option>
            </select>
            <br />
            <label htmlFor='bedType'> Bed Type:</label>
            <select
              id='bedType'
              name='bed_type'
              onChange={handleSelectChanges}
              value={property.bed_type}
              required
            >
              <option value='0'>Real Bed</option>
              <option value='1'>Pullout Sofa</option>
              <option value='2'>Other</option>
            </select>
            <br />
            <label htmlFor='neighbourhood'> Neighbourhood:</label>
            <select
              id='neighbourhood'
              name='neighbourhood'
              onChange={handleSelectChanges}
              value={property.neighbourhood}
              required
            >
              <option value='0'>Friedrichshain Kreuzberg</option>
              <option value='1'>Mitte</option>
              <option value='2'>Pankow</option>
              <option value='3'>Neukölln</option>
              <option value='4'>Charlottenburg-Wilm</option>
              <option value='5'>Tempelhof - Schöneberg</option>
              <option value='6'>Lichtenberg</option>
              <option value='7'>Treptow - Köpenick</option>
              <option value='8'>Steglitz - Zehlendorf</option>
              <option value='9'>Reinickendorf</option>
              <option value='10'>Marzahn - Hellersdorf</option>
              <option value='11'>Spandau</option>
            </select>
            <br />
            <label htmlFor='tv'> TV: </label>
            <input
              id='tv'
              type='checkbox'
              name='tv'
              onChange={handleCheckChanges}
              placeholder='tv'
              value={property.tv}
            />
            <br />
            <label htmlFor='wifi'> Wi-Fi: </label>
            <input
              id='wifi'
              type='checkbox'
              name='wifi'
              onChange={handleCheckChanges}
              placeholder='wifi'
              value={property.wifi}
            />
            <br />
            <label htmlFor='washer'> Washer: </label>
            <input
              id='washer'
              type='checkbox'
              name='washer'
              onChange={handleCheckChanges}
              placeholder='washer'
              value={property.washer}
            />
            <br />
            <label htmlFor='dryer'> Dryer: </label>
            <input
              id='dryer'
              type='checkbox'
              name='dryer'
              onChange={handleCheckChanges}
              placeholder='dryer'
              value={property.dryer}
            />
            <br />
            <label htmlFor='kitchen'> Kitchen: </label>
            <input
              id='kitchen'
              type='checkbox'
              name='kitchen'
              onChange={handleCheckChanges}
              placeholder='kitchen'
              value={property.kitchen}
            />
            <br />
            <label htmlFor='heating'> Heating: </label>
            <input
              id='heating'
              type='checkbox'
              name='heating'
              onChange={handleCheckChanges}
              placeholder='heating'
              value={property.heating}
            />
            <br />
            <label htmlFor='freeParking'> Free Parking: </label>
            <input
              id='freeParking'
              type='checkbox'
              name='free_parking'
              onChange={handleCheckChanges}
              placeholder='Free Parking'
              value={property.free_parking}
            />
            <br />
            <label htmlFor='smokingAllowed'> Smoking Allowed: </label>
            <input
              id='smokingAllowed'
              type='checkbox'
              name='smoking_allowed'
              onChange={handleCheckChanges}
              placeholder='Smoking Allowed'
              value={property.smoking_allowed}
            />
            <br />
            <label htmlFor='instantBookable'> Instantly Bookable: </label>
            <input
              id='instantBookable'
              type='checkbox'
              name='instant_bookable'
              onChange={handleCheckChanges}
              placeholder='Instant Bookable'
              value={property.instant_bookable}
            />
            <br />
            <label htmlFor='businessReady'> Business Ready?: </label>
            <input
              id='businessReady'
              type='checkbox'
              name='business_ready'
              onChange={handleCheckChanges}
              placeholder='Business Ready'
              value={property.business_ready}
            />
            <br />
            <button type='submit'> Compare</button>
          </form>
        </InnerPropInput>
      </PropInput>
      <p> &#9400; 2020, AirBnB Optimal Price</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.userId
  };
};

export default connect(mapStateToProps, {})(AddProperty);

//This page contains a form for adding a new property to a user's list of saved properties
//The info from this form will be used to create a new card on the dashboard page
//data from this form will be sent to the data science api for a price estimate

//Form inputs should include:
//[ Waiting to hear from the data science team ]
//submit button
//back button (return to dashboard with no submission)

import React, { useState } from "react";
import {Link, useParams} from 'react-router-dom'
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { connect } from "react-redux";

const PropInput = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #470B97;
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
    console.log(props)
    const {listingID} = useParams('/editCard/:listingID')
    const listingInfo = '';
    // const listingInfo = props.property.find(info => listingID === `${info.id}`);



    const [property, setProperty] = useState({
        name: listingInfo.name || '',
        id: listingID || Date.now(),
        user_id: props.userId,
        latitude: listingInfo.latitude || '',
        longitude: listingInfo.longitude || '',
        accomodates: listingInfo.accomodates || '',
        bathrooms: listingInfo.bathrooms || '',
        size: listingInfo.size || '',
        distance: listingInfo.distance || '',
        securityDeposit: listingInfo.securityDeposit || '',
        cleaningFee: listingInfo.cleaningFee || '',
        guestsIncluded: listingInfo.guestsIncluded || '',
        extraPeople: listingInfo.extraPeople || '',
        minimumNights: listingInfo.minimumNights || '',
        cancellationPolicy: listingInfo.cancellationPolicy || 0,
        propertyType: listingInfo.propertyType || 0,
        roomType: listingInfo.roomType || 0,
        bedType: listingInfo.bedType || 0,
        neighborhood: listingInfo.neighborhood || 0,
        tv: listingInfo.tv || false,
        wifi: listingInfo.wifi || false,
        washer: listingInfo.washer || false,
        dryer: listingInfo.dryer || false,
        kitchen: listingInfo.kitchen || false,
        heating: listingInfo.heating || false,
        freeParking: listingInfo.freeParking || false,
        smokingAllowed: listingInfo.smokingAllowed || false,
        instantBookable: listingInfo.instantBookable || false,
        businessReady: listingInfo.businessReady || false,
        numError: ''
    });
    const handleSelectChanges = e => {
        const valueSelected = parseInt(e.target.value)
        setProperty({ ...property, [e.target.name]: valueSelected });
        console.log( e.target.name, valueSelected, property)
    };
    const handleChanges = e => {
        setProperty({ ...property, [e.target.name]: e.target.value });
        console.log(property)
    };
    const handleCheckChanges = e => {

        setProperty({ ...property, [e.target.name]: e.target.checked });
        console.log(property)
    };

    




    
    const submitForm = e => {
        e.preventDefault();
        console.log(property)
            axiosWithAuth()
            .post(`/data/input/${property.id}`, property)
            .then(res => console.log(res))
            .catch(err => console.log(err));

    }

    

        


  return (
    <div className='addProp'>
        <div className='return'>
            <Link to='/home'>return</Link>
        </div>
            
        <PropInput>
            <InnerPropInput>  
                
                <form onSubmit={submitForm}>
                <label>{property.id}</label>
                <br/>
                <label htmlFor="name"> Name: </label>
                <input id='name' type='text' name='name' onChange={handleChanges} placeholder='Name' value={property.name} required/>
                <br/>
                <label htmlFor="latitude"> Latitude:</label>
                <input id='latitude' type='number' name='latitude' onChange={handleChanges} placeholder='Latitude' value={property.latitude} required />
                <br/>
                <label htmlFor="longitude"> Longitude: </label>
                <input id='longitude' type='number' name='longitude' onChange={handleChanges} placeholder='Longitude' value={property.longitude} required />
                <br/>
                <label htmlFor="accommodates"> Accommodates:</label>
                <input id='accomodates' type='number' name='accomodates' onChange={handleChanges} placeholder='Number can Accomodate' value={property.accomodates} required/>
                <br/>4
                <label htmlFor="bathrooms"> Bathrooms:</label>
                <input id='bathrooms' type='number' name='bathrooms' onChange={handleChanges} placeholder='Number of Bathrooms' value={property.bathrooms} required/>
                <br/>
                <label htmlFor="size"> Size:</label>
                <input id='size' type='number' name='size' onChange={handleChanges} placeholder='Size of property' value={property.size} required/>
                <br/>
                <label htmlFor='distance'>Distance: </label>
                <input id='distance' type='number' name='distance' onChange={handleChanges} placeholder='distance' value={property.distance} required/>
                <br/>
                <label htmlFor='securityDeposit'>Security Deposit:</label>
                <input id='securityDeposity' type='number' name='securityDeposit' onChange={handleChanges} placeholder='Security Deposit' value={property.securityDeposit} required/>
                <br/>
                <label htmlFor='cleaningFee'>Cleaning Fees:</label>
                <input id='cleaningFee' type='number' name='cleaningFee' onChange={handleChanges} placeholder='Cleaning Fees' value={property.cleaningFee} required/>
                <br/>
                <label htmlFor='guestsIncluded'>Guests Included:</label>
                <input id='guestsIncluded' type='number' name='guestsIncluded' onChange={handleChanges} placeholder='Guests Included' value={property.guestsIncluded} required/>
                <br/>
                <label htmlFor='extraPeople'> Extra People: </label>
                <input id='extraPeople' type='number' name='extraPeople' onChange={handleChanges} placeholder='Extra People' value={property.extraPeople} required/>
                <br/>
                <label htmlFor='minimumNights'>Minimum Nights</label>
                <input id='minimumNights' type='number' name='minimumNights' onChange={handleChanges} placeholder='Minimum Nights' value={property.minimumNights} required/>
                <br/>
                <label htmlFor="cancellationPolicy"> Cancellation Policy:</label>
                <select  id='cancellationPolicy' name='cancellationPolicy' onChange={handleSelectChanges} value={property.cancellationPolicy} required>
                    <option value='0' name='Strict 14 with grace period'>Strict 14 with grace period</option>
                    <option value='1' name='Flexible'>Flexible</option>
                    <option value='2' name='Moderate'>Moderate</option>
                    <option value='3' name='Super Strict 30'>Super Strict 30</option>
                    <option value='4' name='Super Strict 30'>Super Strict 30</option>
                </select>
                <br/>
                <label htmlFor="propertyType"> Property Type:</label>
                <select  id='propertyType' name='propertyType' onChange={handleSelectChanges} value={property.propertyType} required>
                    <option value='0' name='Guest House'>Guest House</option>
                    <option value='1' name='Apartment'>Apartment</option>
                    <option value='2' name='Condo'>Condo</option>
                    <option value='3' name='House'>House</option>
                    <option value='4' name='Other'>Other</option>
                </select>
                <br/>
                <label htmlFor="roomType"> Room Type:</label>
                <select  id='roomType' name='roomType' onChange={handleSelectChanges} value={property.roomType} required>
                    <option value='0' name='Private Room' >Private Room</option>
                    <option value='1' name='Entire House/Apt'>Entire House/Apt</option>
                    <option value='2' name='Shared Room'>Shared Room</option>
                </select>
                <br/>
                <label htmlFor="bedType"> Bed Type:</label>
                <select  id='bedType' name='bedType' onChange={handleSelectChanges} value={property.bedType} required>
                    <option value='0' name='Real Bed'>Real Bed</option>
                    <option value='1' name='Pullout Sofa'>Pullout Sofa</option>
                    <option value='2' name='Other'>Other</option>
                </select>
                <br/>
                <label htmlFor="neighbourhood"> Neighbourhood:</label>
                <select id='neighbourhood' name='neighbourhood' onChange={handleSelectChanges} value={property.neighborhood} required>
                    <option value='0' name='Friedrichshain Kreuzberg'>Friedrichshain Kreuzberg</option>
                    <option value='1' name='Mitte'>Mitte</option>
                    <option value='2' name='Pankow'>Pankow</option>
                    <option value='3' name='Neukölln'>Neukölln</option>
                    <option value='4' name='Charlottenburg-Wilm'>Charlottenburg-Wilm</option>
                    <option value='5' name='Tempelhof - Schöneberg'>Tempelhof - Schöneberg</option>
                    <option value='6' name='Lichtenberg'>Lichtenberg</option>
                    <option value='7' name='Treptow - Köpenick'>Treptow - Köpenick</option>
                    <option value='8' name='Steglitz - Zehlendorf'>Steglitz - Zehlendorf</option>
                    <option value='9' name='Reinickendorf'>Reinickendorf</option>
                    <option value='10' name='Marzahn - Hellersdorf'>Marzahn - Hellersdorf</option>
                    <option value='11' name='Spandau'>Spandau</option>
                </select>
                <br/>
                <label htmlFor='tv'> TV: </label>
                <input id='tv' type='checkbox' name='tv' onChange={handleCheckChanges} placeholder ='tv' value={property.tv} />
                <br/>
                <label htmlFor='wifi'> Wi-Fi: </label>
                <input id='wifi' type='checkbox' name='wifi' onChange={handleCheckChanges} placeholder ='wifi' value={property.wifi} />
                <br/>
                <label htmlFor='washer'> Washer: </label>
                <input id='washer' type='checkbox' name='washer' onChange={handleCheckChanges} placeholder ='washer' value={property.washer} />
                <br/>
                <label htmlFor='dryer'> Dryer: </label>
                <input id='dryer' type='checkbox' name='dryer' onChange={handleCheckChanges} placeholder ='dryer' value={property.dryer} />
                <br/>
                <label htmlFor='kitchen'> Kitchen: </label>
                <input id='kitchen' type='checkbox' name='kitchen' onChange={handleCheckChanges} placeholder ='kitchen' value={property.kitchen} />
                <br/>
                <label htmlFor='heating'> Heating: </label>
                <input id='heating' type='checkbox' name='heating' onChange={handleCheckChanges} placeholder ='heating' value={property.heating} />
                <br/>
                <label htmlFor='freeParking'> Free Parking: </label>
                <input id='freeParking' type='checkbox' name='freeParking' onChange={handleCheckChanges} placeholder ='Free Parking' value={property.freeParking} />
                <br/>
                <label htmlFor='smokingAllowed'> Smoking Allowed: </label>
                <input id='smokingAllowed' type='checkbox' name='smokingAllowed' onChange={handleCheckChanges} placeholder ='Smoking Allowed' value={property.smokingAllowed} />
                <br/>
                <label htmlFor='instantBookable'> Instantly Bookable: </label>
                <input id='instantBookable' type='checkbox' name='instantBookable' onChange={handleCheckChanges} placeholder ='Instant Bookable' value={property.instantBookable} />
                <br/>
                <label htmlFor='businessReady'> Business Ready?: </label>
                <input id='businessReady' type='checkbox' name='businessReady' onChange={handleCheckChanges} placeholder ='Business Ready' value={property.businessReady} />
                <br/>
                <button type="submit"> Compare</button>
                </form>
            </InnerPropInput>
        </PropInput>
        <p>	&#9400; 2020, AirBnB Optimal Price</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userId: state.userId
  };
};

export default connect(mapStateToProps, {})(AddProperty);

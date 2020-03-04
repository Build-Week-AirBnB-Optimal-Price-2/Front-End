//This page contains a form for adding a new property to a user's list of saved properties
//The info from this form will be used to create a new card on the dashboard page
//data from this form will be sent to the data science api for a price estimate

//Form inputs should include:
//[ Waiting to hear from the data science team ]
//submit button
//back button (return to dashboard with no submission)

import React, { useState } from "react";
import {Link} from 'react-router-dom'



const AddProperty = props => {
    const [property, setProperty] = useState({
        name: '',
        latitude: '',
        longitude: '',
        propertyType: '',
        accomodates: '',
        bathrooms: '',
        roomType: '',
        bedType: '',
        size: '',
        distance: '',
        securityDeposit: '',
        cleaningFee: '',
        guestsIncluded: '',
        extraPeople: '',
        minimumNights: '',
        cancellationPolicy: '',
        propertyType: '',
        roomType: '',
        bedType: '',
        neighborhood: '',
        tv: false,
        wifi: false,
        washer: false,
        dryer: false,
        kitchen: false,
        heating: false,
        freeParking: false,
        smokingAllowed: false,
        neighborhood: false,
        instantBookable: false,
        businessReady: false
    });

    const handleChanges = e => {
        setProperty({ ...property, [e.target.name]: e.target.value });
        console.log(property)
    };

    const submitForm = e => {
        e.preventDefault();
        // props.addNewProperty(property);
        console.log(property)
        setProperty({ name: '',
        latitude: '',
        longitude: '',
        propertyType: '',
        accomodates: '',
        bathrooms: '',
        roomType: '',
        bedType: '',
        size: '',
        distance: '',
        securityDeposit: '',
        cleaningFee: '',
        guestsIncluded: '',
        extraPeople: '',
        minimumNights: '',
        cancellationPolicy: '',
        propertyType: '',
        roomType: '',
        bedType: '',
        neighborhood: '',
        tv: false,
        wifi: false,
        washer: false,
        dryer: false,
        kitchen: false,
        heating: false,
        freeParking: false,
        smokingAllowed: false,
        neighborhood: false,
        instantBookable: false,
        businessReady: false})
    }

    return (

        <div>
            <Link to='/home'>return</Link>
   
            <form onSubmit={submitForm}>
             <label htmlFor="name"> Name: </label>
             <input id='name' type='text' name='name' onChange={handleChanges} placeholder='Name' value={property.name} />
             <br/>
             <label htmlFor="latitude"> Latitude:</label>
             <input id='latitude' type='number' name='latitude' onChange={handleChanges} placeholder='Latitude' value={property.latitude} />
             <br/>
             <label htmlFor="longitude"> Longitude: </label>
             <input id='longitude' type='number' name='longitude' onChange={handleChanges} placeholder='Longitude' value={property.longitude} />
             <br/>
             <label htmlFor="accommodates"> Accommodates:</label>
             <input id='accomodates' type='number' name='accomodates' onChange={handleChanges} placeholder='Number can Accomodate' value={property.accomodates} />
             <br/>
             <label htmlFor="bathrooms"> Bathrooms:</label>
             <input id='bathrooms' type='number' name='bathrooms' onChange={handleChanges} placeholder='Number of Bathrooms' value={property.bathrooms} />
             <br/>
             <label htmlFor="size"> Size:</label>
             <input id='size' type='number' name='size' onChange={handleChanges} placeholder='Size of property' value={property.size} />
             <br/>
             <label htmlFor='distance'>Distance: </label>
             <input id='distance' type='number' name='distance' onChange={handleChanges} placeholder='distance' value={property.distance} />
             <br/>
             <label htmlFor='securityDeposit'>Security Deposit:</label>
             <input id='securityDeposity' type='number' name='securityDeposit' onChange={handleChanges} placeholder='Security Deposit' value={property.securityDeposit} />
             <br/>
             <label htmlFor='cleaningFee'>Cleaning Fees:</label>
             <input id='cleaningFee' type='number' name='cleaningFee' onChange={handleChanges} placeholder='Cleaning Fees' value={property.cleaningFee} />
             <br/>
             <label htmlFor='guestsIncluded'>Guests Included:</label>
             <input id='guestsIncluded' type='number' name='guestsIncluded' onChange={handleChanges} placeholder='Guests Included' value={property.guestsIncluded}/>
             <br/>
             <label htmlFor='extraPeople'> Extra People: </label>
             <input id='extraPeople' type='number' name='extraPeople' onChange={handleChanges} placeholder='Extra People' value={property.extraPeople}/>
             <br/>
             <label htmlFor='minimumNights'>Minimum Nights</label>
             <input id='minimumNights' type='number' name='minimumNights' onChange={handleChanges} placeholder='Minimum Nights' value={property.minimumNights}/>
             <br/>
             <label htmlFor="cancellationPolicy"> Cancellation Policy:</label>
             <select>
                 <option>Strict 14 with grace period</option>
                 <option>Flexible</option>
                 <option>Moderate</option>
                 <option>Super Strict 30</option>
                 <option>Super Strict 30</option>
             </select>
             <br/>
             <label htmlFor="propertyType"> Property Type:</label>
             <select>
                 <option>Guest House</option>
                 <option>Apartment</option>
                 <option>Condo</option>
                 <option>House</option>
                 <option>Other</option>
             </select>
             <br/>
             <label htmlFor="roomType"> Room Type:</label>
             <select>
                 <option>Private Room</option>
                 <option>Entire House/Apt</option>
                 <option>Shared Room</option>
             </select>
             <br/>
             <label htmlFor="bedType"> Bed Type:</label>
             <select>
                 <option>Real Bed</option>
                 <option>Pullout Sofa</option>
                 <option>Other</option>
             </select>
             <br/>
             <label htmlFor="neighbourhood"> Neighbourhood:</label>
             <select>
                 <option>Friedrichshain Kreuzberg</option>
                 <option>Mitte</option>
                 <option>Pankow</option>
                 <option>Neukölln</option>
                 <option>Charlottenburg-Wilm</option>
                 <option>Tempelhof - Schöneberg</option>
                 <option>Lichtenberg</option>
                 <option>Treptow - Köpenick</option>
                 <option>Steglitz - Zehlendorf</option>
                 <option>Reinickendorf</option>
                 <option>Marzahn - Hellersdorf</option>
                 <option>Spandau</option>
             </select>
             <br/>
             <label htmlFor='tv'> TV: </label>
             <input id='tv' type='checkbox' name='tv' onchange={handleChanges} placeholder ='tv' value={property.tv} />
             <br/>
             <label htmlFor='wifi'> Wi-Fi: </label>
             <input id='wifi' type='checkbox' name='wifi' onchange={handleChanges} placeholder ='wifi' value={property.wifi} />
             <br/>
             <label htmlFor='washer'> Washer: </label>
             <input id='washer' type='checkbox' name='washer' onchange={handleChanges} placeholder ='washer' value={property.washer} />
             <br/>
             <label htmlFor='dryer'> Dryer: </label>
             <input id='dryer' type='checkbox' name='dryer' onchange={handleChanges} placeholder ='dryer' value={property.dryer} />
             <br/>
             <label htmlFor='kitchen'> Kitchen: </label>
             <input id='kitchen' type='checkbox' name='kitchen' onchange={handleChanges} placeholder ='kitchen' value={property.kitchen} />
             <br/>
             <label htmlFor='heating'> Heating: </label>
             <input id='heating' type='checkbox' name='heating' onchange={handleChanges} placeholder ='heating' value={property.heating} />
             <br/>
             <label htmlFor='freeParking'> Free Parking: </label>
             <input id='freeParking' type='checkbox' name='freeParking' onchange={handleChanges} placeholder ='Free Parking' value={property.freeParking} />
             <br/>
             <label htmlFor='smokingAllowed'> Smoking Allowed: </label>
             <input id='smokingAllowed' type='checkbox' name='smokingAllowed' onchange={handleChanges} placeholder ='Smoking Allowed' value={property.smokingAllowed} />
             <br/>
             <label htmlFor='instantBookable'> Instantly Bookable: </label>
             <input id='instantBookable' type='checkbox' name='instantBookable' onchange={handleChanges} placeholder ='Instant Bookable' value={property.instantBookable} />
             <br/>
             <label htmlFor='businessReady'> Business Ready?: </label>
             <input id='businessReady' type='checkbox' name='businessReady' onchange={handleChanges} placeholder ='Business Ready' value={property.businessReady} />
             <br/>
             <button type="submit"> Compare</button>
            </form>
        </div>
    )
};

export default AddProperty;




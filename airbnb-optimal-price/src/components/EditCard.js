import React, { useState } from "react";
import {Link, useParams} from 'react-router-dom'



const EditCard = props => {
    const {listingID} = useParams('/editCard/:listingID')

    const listingInfo = props.property.find(info => listingID === `${info.id}`);


    console.log(listingInfo)
    const [property, setProperty] = useState({
        name: listingInfo.name,
        accomodates: listingInfo.accomodates,
        bathrooms: listingInfo.bathrooms,
        size: listingInfo.size,
        distance: listingInfo.distance,
        minimumNights: listingInfo.minimumNights,
        propertyType: listingInfo.propertyType,
        roomType: listingInfo.roomType,
        neighborhood: listingInfo.neighborhood
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
    // const handleCheckChanges = e => {

    //     setProperty({ ...property, [e.target.name]: e.target.checked });
    //     console.log(property)
    // };

    const submitForm = e => {
        e.preventDefault();
       
        console.log(property)
        
    }

    return (

        <div>
            <Link to='/home'>return</Link>
   
            <form onSubmit={submitForm}>
             <label htmlFor="name"> Name: </label>
             <input id='name' type='text' name='name' onChange={handleChanges} placeholder='Name' value={listingInfo.name} />
             <br/>
             <label htmlFor="accommodates"> Accommodates:</label>
             <input id='accomodates' type='number' name='accomodates' onChange={handleChanges} placeholder='Number can Accomodate' value={listingInfo.accomodates} />
             <br/>
             <label htmlFor="bathrooms"> Bathrooms:</label>
             <input id='bathrooms' type='number' name='bathrooms' onChange={handleChanges} placeholder='Number of Bathrooms' value={listingInfo.bathrooms} />
             <br/>
             <label htmlFor="size"> Size:</label>
             <input id='size' type='number' name='size' onChange={handleChanges} placeholder='Size of property' value={listingInfo.size} />
             <br/>
             <label htmlFor='distance'>Distance: </label>
             <input id='distance' type='number' name='distance' onChange={handleChanges} placeholder='distance' value={listingInfo.distance} />
             <label htmlFor='minimumNights'>Minimum Nights</label>
             <input id='minimumNights' type='number' name='minimumNights' onChange={handleChanges} placeholder='Minimum Nights' value={listingInfo.minimumNights}/>
             <br/>
             <label htmlFor="propertyType"> Property Type:</label>
             <select  id='propertyType' name='propertyType' onChange={handleSelectChanges} value={listingInfo.propertyType}>
                 <option value='0'>Guest House</option>
                 <option value='1'>Apartment</option>
                 <option value='2'>Condo</option>
                 <option value='3'>House</option>
                 <option value='4'>Other</option>
             </select>
             <br/>
             <label htmlFor="roomType"> Room Type:</label>
             <select  id='roomType' name='roomType' onChange={handleSelectChanges} value={listingInfo.roomType}>
                 <option value='0' >Private Room</option>
                 <option value='1'>Entire House/Apt</option>
                 <option value='2'>Shared Room</option>
             </select>
             <br/>
             <label htmlFor="neighbourhood"> Neighbourhood:</label>
             <select id='neighbourhood' name='neighbourhood' onChange={handleSelectChanges} value={listingInfo.neighborhood}>
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
             <button type="submit"> Compare</button>
            </form>
        </div>
    )
};

export default EditCard;




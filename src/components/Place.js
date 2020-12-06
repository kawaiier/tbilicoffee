import React from 'react';
import './Place.css'
// import Sort from './Sort';

const Place = (props) => {
    
    const sortDir = 'asc'

    const myData = [].concat(props.places)
    
    if (sortDir === 'asc'){
        myData.sort((a, b) => a.place.name > b.place.name ? 1 : -1)
    } else {
        myData.sort((a, b) => a.place.name < b.place.name ? 1 : -1)
    }

    
    return (
    <div>
        <section className='display-item'>
                    <div className="wrapper">
                    {
                        myData.map((item, i) => 
                        <div key={i} className='singleItem'>
                        <em>{item.place.type}</em>
                        <h3>
                        {item.place.name}
                        </h3> 
                        <p><a href={item.place.mapsLink}>{item.place.city}, {item.place.address}</a></p>
                        {item.place.petFriendly ? <p>Pet Friendly 🐶</p> : <p>No Pets Allowed 🚫</p>}
                        {item.place.outdoorSeats ? <p>You can sit outside ☀️</p> : <p>No seats outside ☁️</p>}
                        {/* <p>Rating: {item.place.rating}</p>  */}
                        </div>)
                    }
                    
                    </div>
        </section>
    </div>
    )
}

export default Place;
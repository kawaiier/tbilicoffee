import React from 'react';
import './Place.css';
import facebookLogo from '../assets/facebook.svg'
import instagramLogo from '../assets/instagram.svg'
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
                        <h3>
                        {item.place.name}
                        </h3> 
                        <em>{item.place.type}</em>
                        <br/>
                        <p>📍<a href={item.place.mapsLink}>{item.place.city}, {item.place.address}</a></p>
                        <hr/>
                        <p>🌱 Beans: {item.place.beans}</p>
                        {item.place.espressoPrice ? <>
                        <p>☕️ Espresso — <strong>{item.place.espressoPrice}</strong>ლ</p>
                        <p>☕️ Americano — <strong>{item.place.americanoPrice}</strong>ლ</p>
                        <p>☕️ Latte — <strong>{item.place.lattePrice}</strong>ლ</p></> : <div></div>}
                        <hr/>
                        {item.place.petFriendly ? <p>🐶 Pet Friendly</p> : <p>🚫 No Pets Allowed</p>}
                        {item.place.outdoorSeats ? <p>☀️ You can sit outside</p> : <p>☁️ No seats outside</p>}
                        <hr/>
                        <div className='social'>
                            {item.place.facebookLink ? <a href={item.place.facebookLink}><img src={facebookLogo} alt='facebook logo'/></a> : <></>}
                            {item.place.instagramLink ? <a href={item.place.instagramLink}><img src={instagramLogo} alt='instagram logo'/></a> : <></>}
                        </div>
                        {/* <p>Rating: {item.place.rating}</p>  */}
                        </div>)
                    }
                    
                    </div>
        </section>
    </div>
    )
}

export default Place;
import React from 'react';

const Place = (props) => {
    return (
    <div>
        <section className='display-item'>
                    <div className="wrapper">
                        <ul>
                        {props.places.map((place) => {
                            return (
                            <li key={place.id}>
                                <h3>{place.name}</h3>
                                <p>rating: {place.rating}</p>
                            </li>
                            )
                        })}
                        </ul>
                    </div>
        </section>
    </div>
    )
}

export default Place;
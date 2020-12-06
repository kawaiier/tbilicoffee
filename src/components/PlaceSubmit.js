import React from 'react';
import './PlaceList.css'

const PlaceSubmit = (props) => {
    // console.log(props)
    // console.log(props.place)
    return (
        <div>
            <section >
                <form onSubmit={props.handleSubmit} className="add-item">
                    <input type="text" name="name" placeholder="What's the name of the place?" onChange={props.handleChange} value={props.place.name || ''} />
                    <label>
                    City <br/>
                        <select value={props.place.city} onChange={props.handleChange} name='city'>
                            <option value="Tbilisi">Tbilisi</option>
                            <option value="Batumi">Batumi</option>
                            <option value="Telavi">Telavi</option>
                            <option value="Rustavi">Rustavi</option>
                        </select>
                    </label>
                    <input type="text" name="address" placeholder="What's the address of the place?" onChange={props.handleChange} value={props.place.address || ''} />
                    <input type="text" name="mapsLink" placeholder="What's the link of the place?" onChange={props.handleChange} value={props.place.mapsLink || ''} />
                    <label>
                    Place Type <br/>
                        <select value={props.place.type} onChange={props.handleChange} name='type'>
                            <option value="cafe">Cafe</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="bar">Bar</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <label htmlFor="pet"> Pet Friendly</label>
                    <input type="checkbox" id="pet" name="petFriendly" checked={props.place.petFriendly} onChange={props.handleChange} />
                    <label htmlFor="outdoor"> Outdoor Seats</label>
                    <input type="checkbox" id="outdoor" name="outdoorSeats" checked={props.place.outdoorSeats} onChange={props.handleChange} />
                    {/* <input type="number" name="rating" placeholder="What is your rating?" onChange={props.handleChange} value={props.place.rating || ''} min='1' max='5'/> */}
                    <button>Add Item</button>
                </form>
            </section>
        </div>
    )
}

export default PlaceSubmit;
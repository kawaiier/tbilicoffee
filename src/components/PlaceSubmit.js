import React from 'react';
import './PlaceList.css'

const PlaceSubmit = (props) => {
    // console.log(props)
    // console.log(props.place)
    return (
        <div>
            <section >
                <form onSubmit={props.handleSubmit} className="add-item">
                    <input type="text" name="name" placeholder="Name" onChange={props.handleChange} value={props.place.name || ''} />
                        <select value={props.place.city} onChange={props.handleChange} name='city'>
                            <option value="Tbilisi">Tbilisi</option>
                            <option value="Batumi">Batumi</option>
                            <option value="Telavi">Telavi</option>
                            <option value="Rustavi">Rustavi</option>
                        </select>
                    <input type="text" name="address" placeholder="Address" onChange={props.handleChange} value={props.place.address || ''} />
                    <input type="text" name="mapsLink" placeholder="Google Maps link" onChange={props.handleChange} value={props.place.mapsLink || ''} />
                    <input type="text" name="facebookLink" placeholder="Facebook link" onChange={props.handleChange} value={props.place.facebookLink || ''} />
                    <input type="text" name="instagramLink" placeholder="Instagram link" onChange={props.handleChange} value={props.place.instagramLink || ''} />
                        <select value={props.place.type} onChange={props.handleChange} name='type'>
                            <option value="cafe">Cafe</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="bar">Bar</option>
                            <option value="other">Other</option>
                        </select>
                    <div className='checkboxItem'>
                        <label htmlFor="pet"> Pet Friendly</label>
                        <input type="checkbox" id="pet" name="petFriendly" checked={props.place.petFriendly} onChange={props.handleChange} />
                    </div>
                    <div className='checkboxItem'>
                        <label htmlFor="outdoor"> Outdoor Seats</label>
                        <input type="checkbox" id="outdoor" name="outdoorSeats" checked={props.place.outdoorSeats} onChange={props.handleChange} />
                    </div>
                    <input type="text" name="beans" placeholder="Beans used" onChange={props.handleChange} value={props.place.beans || ''} />
                    <input type="number" name="espressoPrice" placeholder="Espresso" onChange={props.handleChange} value={props.place.espressoPrice || ''} min='1' />
                    <input type="number" name="americanoPrice" placeholder="Americano" onChange={props.handleChange} value={props.place.americanoPrice || ''} min='1' />
                    <input type="number" name="lattePrice" placeholder="Latte" onChange={props.handleChange} value={props.place.lattePrice || ''} min='1' />
                    {/* <input type="number" name="rating" placeholder="What is your rating?" onChange={props.handleChange} value={props.place.rating || ''} min='1' max='5'/> */}
                    <button>Add Item</button>
                </form>
            </section>
        </div>
    )
}

export default PlaceSubmit;
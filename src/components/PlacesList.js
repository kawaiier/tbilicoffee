import React from 'react';
import firebase, { auth, provider } from '../firebase'
import Login from './Login';
import Place from './Place';
import './PlaceList.css'
import PlaceSubmit from './PlaceSubmit';

class PlacesList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            place: {
                name: '',
                city: '',
                address: '',
                mapsLink: '',
                facebookLink: '',
                instagramLink: '',
                type:'',
                petFriendly: false,
                outdoorSeats: false,
                rating: '',
                beans: '',
                espressoPrice: '',
                americanoPrice: '',
                lattePrice: ''
            },
            places: [],
            user: null,
            isLoggedIn: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        
        this.setState(
            {
            place : {
                ...this.state.place,
                [name]: value,
            }
            })
        // console.log(name)
        // console.log(value)
        if (this.state.place.type === ''){
            this.setState({
                place : {
                    ...this.state.place,
                    type: 'cafe'
                }
            })
        }
        if (this.state.place.city === ''){
            this.setState({
                place : {
                    ...this.state.place,
                    city: 'Tbilisi'
                }
            })
        }
    }

    handleSubmit(event){
        event.preventDefault();
        const placesRef = firebase.database().ref('places');
        const place = {
            name: this.state.place.name,
            city: this.state.place.city,
            address: this.state.place.address,
            mapsLink: this.state.place.mapsLink,
            facebookLink: this.state.place.facebookLink,
            instagramLink: this.state.place.instagramLink,
            type: this.state.place.type,
            petFriendly: this.state.place.petFriendly,
            outdoorSeats: this.state.place.outdoorSeats,
            rating: this.state.place.rating,
            beans: this.state.place.beans,
            espressoPrice: this.state.place.espressoPrice,
            americanoPrice: this.state.place.americanoPrice,
            lattePrice: this.state.place.lattePrice
        }
        if (place.name && place.address){
            placesRef.push(place);
            this.setState( 
                {
                place: {
                    name: '',
                    city: '',
                    address: '',
                    mapsLink: '',
                    facebookLink: '',
                    instagramLink: '',
                    type:'',
                    petFriendly: false,
                    outdoorSeats: false, 
                    rating: '',
                    beans: '',
                    espressoPrice: '',
                    americanoPrice: '',
                    lattePrice: ''
                }
            }
            )
        }
    }

    logout() {
        auth.signOut()
        .then(() => {
            this.setState({
                user: null
            });
        });
    }

    login(){
        auth.signInWithPopup(provider)
        .then((result)=> {
            const user = result.user;
            this.setState({
                user
            })
        })
    }

    componentDidMount(){
        auth.onAuthStateChanged((user)=>{
            if (user) {
                this.setState({
                    user
                })
            }
        })
        const placesRef = firebase.database().ref('places');
        placesRef.on('value', (snapshot) => {
            let places = snapshot.val();
            let newState = [];
            for (let place in places){
                newState.push({
                    place : {
                        id: place,
                        name: places[place].name,
                        city: places[place].city,
                        address: places[place].address,
                        mapsLink: places[place].mapsLink,
                        facebookLink: places[place].facebookLink,
                        instagramLink: places[place].instagramLink,
                        type: places[place].type,
                        petFriendly: places[place].petFriendly,
                        outdoorSeats: places[place].outdoorSeats,
                        rating: places[place].rating,
                        beans: places[place].beans,
                        espressoPrice: places[place].espressoPrice,
                        americanoPrice: places[place].americanoPrice,
                        lattePrice: places[place].lattePrice,
                    }
                })
            }
            this.setState({
                places: newState
            })
        })
    }

    render() { 
        return (
                <div className="wrapper content">
                    
                    {
                        (this.state.user && this.state.user.uid === process.env.REACT_APP_USER_ID) ? 
                                    <PlaceSubmit place={this.state.place} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/> :
                                    <div className='contactMe'><a href='https://www.facebook.com/Kawaiier/'>Contact me to add more places</a></div>
                                    }
                    
                    <Place places={this.state.places}/>
                    <Login user={this.state.user} login={this.login} logout={this.logout}/>
                </div>
        )
    }
}

export default PlacesList;
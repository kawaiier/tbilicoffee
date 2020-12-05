import React from 'react';
import firebase, { auth, provider } from '../firebase'
import Place from './Place';

class PlacesList extends React.Component {
    constructor(){
        super();
        this.state = {
            name: '',
            rating: '',
            places: [],
            user: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault();
        const  placesRef = firebase.database().ref('places');
        const place = {
            name: this.state.name,
            rating: this.state.rating
        }
        placesRef.push(place);
        this.setState({
            name: '',
            rating: ''
        })
    }

    logout() {

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
                    id: place,
                    name: places[place].name,
                    rating: places[place].rating
                })
            }
            this.setState({
                places: newState
            })
        })
    }

    render() { 
        return (
            <div>
                <h2>Test</h2>
                <div className="wrapper">
                    {this.state.user ?
                        <div>
                            <button onClick={this.logout}>Log Out</button>
                            {(this.state.user.uid === 'SijEoyfdhUOZs4J1K45NwHvloL92') ? 
                                <section className="add-item">
                                <form onSubmit={this.handleSubmit}>
                                    <input type="text" name="name" placeholder="What's the name of the place?" onChange={this.handleChange} value={this.state.name} />
                                    <input type="number" name="rating" placeholder="What is your rating?" onChange={this.handleChange} value={this.state.rating} min='1' max='5'/>
                                    <button>Add Item</button>
                                </form>
                            </section> : <div></div>}
                            
                        </div>                
                        :
                        <button onClick={this.login}>Log In</button>              
                    }
                </div>
                <Place places={this.state.places}/>
            </div>
        )
    }
}

export default PlacesList;
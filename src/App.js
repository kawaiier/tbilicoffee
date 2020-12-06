import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import PlacesList from './components/PlacesList';

function App() {
  return (
    <div className="App">
      <Header/>
      <PlacesList/>
      <Footer/>
    </div>
  );
}

export default App;

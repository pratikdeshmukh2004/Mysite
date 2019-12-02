import React from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavbarPage from './Components/Navbar';
import ControlledCarousel from './Components/Slider';
import Card from './Components/Cards';
function App() {
  return (
    <div className="App">
      <NavbarPage />
      <ControlledCarousel />
      <Card />
    </div>
  );
}

export default App;

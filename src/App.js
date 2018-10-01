import React, { Component } from 'react';
// import logo from './logo.svg';

import Header from './Header.js'
import Footer from './Footer.js'
// import CityCondition from './CityCondition'
import WeatherChannel from './WeatherChannel'
import './style/main.css'
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        
        <WeatherChannel />

        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Navigation';
import Hero from './components/Hero';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <div className="App"> 
      <Nav/>
      <Hero />
      <Footer />
      </div>
    );
  }
}

export default App;

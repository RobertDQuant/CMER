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


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
        
//       <Nav/>
//       <Footer />
//       </div>
//     );
//   }
// }

// export default App;


import Player from './components/Player';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
    }
  }
  componentDidMount(){
    this.fetchAllPlaylist()
  }

  fetchAllPlaylist() {
    fetch('https://warm-reef-44020.herokuapp.com/api/myplaylist')
      .then((res) => {
        return res.json()
      })
      .then((json) => {
        console.log(json);
        this.setState((prevState) => {
          return {
            playlist: json.songsData,
          }
        })
      })
  }

  render() {
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <Player playlist={this.state.playlist}/>
        <Nav/>
        <Footer />

      <div className="App"> 
      <Nav/>
      <Hero />
      <Footer />

      </div>
    );
  }
}

export default App;
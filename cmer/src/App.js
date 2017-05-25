import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Navigation';
import Hero from './components/Hero';
import SongList from './components/SongList';
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
      inputArtistValue: '',
      inputSrcValue: '',
      inputSongValue: '',
    }
    this.handleInputArtistChange = this.handleInputArtistChange.bind(this);
    this.handleInputSrcChange = this.handleInputSrcChange.bind(this);
    this.handleInputSongChange = this.handleInputSongChange.bind(this);
    this.handleSongEdit = this.handleSongEdit.bind(this);
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
    handleInputArtistChange(event) {
      this.setState({inputArtistValue: event.target.value});
    }

    handleInputSrcChange(event) {
        this.setState({inputSrcValue: event.target.value});
    }

    handleInputSongChange(event) {
        this.setState({inputSongValue: event.target.value});
    }
    
    handleSongEdit(event) {
      event.preventDefault();

      fetch(`https://warm-reef-44020.herokuapp.com/api/myplaylist/${event.target.id.value}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          artist: event.target.artist.value,
          src: event.target.src.value,
          song: event.target.song.value
        }),
      })
      .then((response) => {
        if (response.status === 200) {
          this.fetchAllPlaylist();
        }
      })
    }

  render() {
    return (

      <div className="App">
        <Nav/>
        <Player playlist={this.state.playlist}/>
        <SongList
          handleSongEdit={this.handleSongEdit}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
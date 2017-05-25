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
import Player from './components/Player';
import SongList from './components/SongList';
import Song from './components/Song'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: [],
    }
    this.handleSongDelete=this.handleSongDelete.bind(this);
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

  handleSongDelete(id) {
    fetch(`https://warm-reef-44020.herokuapp.com/api/myplaylist/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json;
      })
      .then((responseJson) => {
        if (responseJson.status === 200){
          this.fetchAllPlaylist();
        }
      })
  }

  render() {
    return (

      <div className="App">
        <Nav/>
        <Player playlist={this.state.playlist} handleSongDelete={this.handleSongDelete}/>
        <Footer />
      </div>
    );
  }
}

export default App;
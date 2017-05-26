import React, {Component} from 'react';
import Nav from './Navigation';
import Player from './Player';
import Footer from './Footer';
import '../App.css';

class Play extends Component {
    render() {
        return(
        <div>
          <Nav/>
          <Player playlist={this.state.playlist} handleSongDelete={this.handleSongDelete}/>
          <Footer />
        </div>
        )
    }
}

export default Play;
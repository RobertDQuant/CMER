
import React, {Component} from 'react';
import '../App.css';

class Song extends Component {
    render() {
        return(
            <li className='songLi'>
                <h2>{this.props.playlist.song}</h2>
                <p>{this.props.playlist.artist}</p>
            </li>
        )
    }
}

export default Song;
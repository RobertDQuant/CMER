
import React, {Component} from 'react';
import '../App.css';

class Song extends Component {
    render() {
        return(
            <li className='songLi'>
                <button onClick={this.props.onSongClick}>{this.props.playlist.song}</button>
                <p>{this.props.playlist.artist}</p>
            </li>
        )
    }
}

export default Song;
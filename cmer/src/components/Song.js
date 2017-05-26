
import React, {Component} from 'react';
import '../App.css';
import SongList from './SongList';

class Song extends Component {
    render() {
        return(
            <li className='songLi'>
                <button onClick={this.props.onSongClick}>{this.props.playlist.song}</button>
                <p>{this.props.playlist.artist}</p>
                <button>Edit</button>
                <button onClick={() => {this.props.handleSongDelete(this.props.playlist.id) }}>Delete</button>
            </li>
        )
    }
}

export default Song;
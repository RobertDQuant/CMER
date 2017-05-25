
import React, {Component} from 'react';
import '../App.css';

class Song extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBeingEdited: false,
            inputArtistValue: this.props.song.artist,
            inputSrcValue: this.props.song.src,
            inputSongValue: this.props.song.song,
        }
        this.handleInputArtistChange = this.handleInputArtistChange.bind(this);
        this.handleInputSrcChange = this.handleInputSrcChange.bind(this);
        this.handleInputSongChange = this.handleInputSongChange.bind(this);
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

    renderEditForm() {
        return (
        <li>
            <form
                className="songLi"
                onSubmit={(event) => {
                    this.props.handleSongEdit(event);
                    this.setState({isBeingEdited: false});
                }}
            >
                <input
                    type="text"
                    value={this.inputArtistValue}
                    name="artist"
                    onChange={this.handleInputArtistChange}
                /><br />
                <input
                    type="text"
                    value={this.state.inputSrcValue}
                    name="src"
                    onChange={this.handleInputSrcChange}
                /><br />
                <input
                    type="text"
                    value={this.state.inputSongValue}
                    name="song"
                    onChange={this.handleInputSongChange}
                />
                <input type="submit" value="Edit Playlist" />
            </form> 
        </li>
    );
}
    renderSong() {
        return (
            <li className="song">
                <h2>{this.props.song.artist}</h2>
                <p>Src: {this.props.song.src}</p>
                <p>Song: {this.props.song.song}</p>
                <button onClick={() => {
                    this.setState({isBeingEdited: true})
                }}>
                    Edit Playlist
                </button>
            </li>
        );
    }

    render() {
        if (this.state.isBeingEdited === false) {
            return this.renderSong();
        } else {
            return this.renderEditForm();
        }
    
    }
}

//     render() {
//         return(
//             <li className='songLi'>
//                 <button onClick={this.props.onSongClick}>{this.props.playlist.song}</button>
//                 <p>{this.props.playlist.artist}</p>
//             </li>
//         )
//     }
// }

export default Song;
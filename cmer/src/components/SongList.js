import React, {Component} from 'react'
import Song from './Song';

class SongList extends Component {
    render() {
        return(
            <ul>
                {this.props.playlist.map((playlist) => {
                    return (
                        <Song key={playlist.id} playlist={playlist} onSongClick={this.props.onSongClick} handleSongDelete={this.props.handleSongDelete} />
                    )
                })}
            </ul>
        )
    }
}

export default SongList;
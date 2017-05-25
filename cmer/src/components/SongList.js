import React, {Component} from 'react'
import Song from './Song';

class Songlist extends Component {
    render() {
        return(
            <ul>
                {this.props.playlist.map((playlist) => {
                    return (
                        <Song key={playlist.id} playlist={playlist} onSongClick={this.props.onSongClick}/>
                    )
                })}
            </ul>
        )
    }
}

export default Songlist;
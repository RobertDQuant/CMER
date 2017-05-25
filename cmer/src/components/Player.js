import React, {Component} from 'react';
import '../App.css';
import Songlist from './SongList'

class Player extends Component {
    constructor(props){
        super(props);
        this.state = {
            src: '',
        }
        this.onSongClick = this.onSongClick.bind(this);
    }
    
    onSongClick(){
        fetch('https://warm-reef-44020.herokuapp.com/api/myplaylist')
            .then((res) => {
                return res.json()
            })
            .then((json) => {
                console.log(json)
                this.setState((prevState) => {
                    return {
                        src: json.songsData[0].src,
                    }
                })
            })
    }
    render() {
        return(
            <main className='App-player'>
               <iframe className='player' src={this.state.src}>
               </iframe>
               <div className='songlist'>
                    <Songlist playlist={this.props.playlist} onSongClick={this.onSongClick}/>
               </div>
            </main>
        )
    }
}

export default Player;
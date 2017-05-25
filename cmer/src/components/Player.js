import React, {Component} from 'react';
import '../App.css';
import Songlist from './Songlist'

class Player extends Component {
    render() {
        return(
            <main className='App-player'>
               <div className='player'>
               </div>
               <div className='songlist'>
                    <Songlist playlist={this.props.playlist}/>
               </div>
            </main>
        )
    }
}

export default Player;
import React from 'react'
import Play from './play/play'
import Volume from './volume/volume'
import Timer from './timer/timer'
import './player.css'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.audio = new Audio("http://tiktak.tn:8000/feirouz.mp3")
  }
  render () {
    return (<div className="player">
      <Play audio={this.audio} />
      <Timer audio={this.audio} />
      <Volume audio={this.audio} />
    </div>)
  }
}


export default Player

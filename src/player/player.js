import React from 'react'
import './player.css'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.audio = new Audio("http://tiktak.tn:8000/feirouz.mp3")
    this.audio.onvolumechange = () => {
      console.log('volume changed')
    }
  }

  handleClick(e) {
    this.audio.paused? this.audio.play() : this.audio.pause()
    document.querySelector(".play").classList.toggle("is-play")
  }
  render () {
    return (<div>
      <div className="play is-play" onClick={this.handleClick}>
        <div className="playIcon"></div>
      </div>
      <button className="Button-up" onClick={() => this.audio.volume = (this.audio.volume <= 0.9) ? this.audio.volume+=0.1 : this.audio.volume}>+</button>
      <button className="Button-down" onClick={() => this.audio.volume = (this.audio.volume >= 0.1) ? this.audio.volume-=0.1 : this.audio.volume}>-</button>

    </div>)
  }
}


export default Player

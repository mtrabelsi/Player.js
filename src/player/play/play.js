import React from 'react'
import './play.css'

class Play extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.audio.paused? this.props.audio.play() : this.props.audio.pause()
    document.querySelector(".play").classList.toggle("is-play")
  }

  render () {
    return (<div>
        <div className="play is-play" onClick={this.handleClick}>
          <div className="playIcon"></div>
        </div>
      </div>)
  }
}


export default Play

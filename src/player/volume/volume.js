import React from 'react'
import './volume.css'

class Volume extends React.Component {
  constructor(props) {
    super(props)
    this.handleVolume = this.handleVolume.bind(this)
    this.props.audio.onvolumechange = () => {
      console.log('volume changed')
    }
  }
  handleVolume(e) {
    let volume = this.props.audio.volume
    if(e.target.innerText === '+') {
      this.props.audio.volume  = (volume <= 0.9) ? volume+=0.1 : volume
    } else {
      this.props.audio.volume = (volume >= 0.1) ? volume-=0.1 : volume
    }
  }

  render () {
    return (<div>
      <button className="Button-up" onClick={this.handleVolume}>+</button>
      <button className="Button-down" onClick={this.handleVolume}>-</button>
    </div>)
  }
}

export default Volume

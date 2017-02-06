import React from 'react'
import Play from './play/play'
import Volume from './volume/volume'

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.audio = new Audio("http://tiktak.tn:8000/feirouz.mp3")
  }
  render () {
    return (<div>
      <Play audio={this.audio} />
      <Volume audio={this.audio} />
    </div>)
  }
}


export default Player

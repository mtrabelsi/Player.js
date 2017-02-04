import React from 'react';
import ReactDOM from 'react-dom';

class Player extends React.Component {
  constructor(props) {
    super(props)
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.audio = new Audio("http://www.stephaniequinn.com/Music/Canon.mp3")
  }
  play() {
    this.audio.play()
  }
  pause() {
    this.audio.pause()
  }
  render () {
    return (<div>
      <button onClick={this.play}>play it</button>
      <button onClick={this.pause}>pause</button>
    </div>)
  }
}




ReactDOM.render(
  <Player />,
  document.getElementById('root')
);

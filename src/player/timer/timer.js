import React from 'react'
import './timer.css'
class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentTime : new Date()}
  }
  componentDidMount(){
    this.start()
  }
  componentWillUnmount(){
    this.stop()
  }
  start(){
    this.timer = setInterval(this.tick.bind(this), 1000);
  }
  stop() {
    clearInterval(this.timer)
  }
  tick(){
    this.setState({currentTime : new Date()})
  }
  render () {
    return (<div className="timer">
          <span>{this.state.currentTime.toLocaleTimeString()}</span>
      </div>)
  }
}

export default Timer

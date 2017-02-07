import React from 'react'
import './timer.css'
class Timer extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (<div className="timer">
          <span>00:00</span>
      </div>)
  }
}

export default Timer

import { Component } from 'react'
import './index.css'

const initialState = {
    timeInSec: 0
}

class StopWatch extends Component {
    state = initialState

    clearTimeInterval = () => {
        this.timerId = clearInterval(this.timerId)
    } 

    tick = () => {
        this.setState(prevState => ({
            timeInSec: prevState.timeInSec + 1
        }))
    }

    onStartStopwatch = () => {
        if(this.timerId) {
            return
        }
        this.timerId = setInterval(this.tick, 1000)
    }

    onStopStopwatch = () => {
      this.clearTimeInterval()
    }

    onReset = () => {
        this.clearTimeInterval()
        this.setState(initialState)
    }

    getFormatedTime = () => {
        const {timeInSec} = this.state
        let minutes = Math.floor(timeInSec / 60)
        let seconds = Math.floor(timeInSec % 60)
        minutes = minutes <= 9 ? '0' + minutes : minutes
        seconds = seconds <= 9 ? '0' + seconds : seconds
        return `${minutes}:${seconds}`
    }

    render() {
        return (
            <div className="app-container">
                <h1 className='main-heading'>Stopwatch</h1>
                <div className='stop-watch-card'>
                    <div className='icon-text-container'>
                        <img alt='stopwatch' src='https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png' className='timer-icon'/>
                        <p>Timer</p>
                    </div>
                    <p className='timer'>{this.getFormatedTime()}</p>
                    <div className='btn-group'>
                        <button className='btn start-btn' onClick={this.onStartStopwatch}>Start</button>
                        <button className='btn stop-btn' onClick={this.onStopStopwatch}>Stop</button>
                        <button className='btn reset-btn' onClick={this.onReset}>Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default StopWatch
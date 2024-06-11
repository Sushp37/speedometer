// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    } else {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    } else {
      this.setState(prevState => ({speed: prevState.speed}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
        />
        <h1 className="speed-description">
          Speed is<span>{speed}</span>mph
        </h1>
        <p className="description">Min limit is 0mph, Max limit is 200mph</p>
        <div className="btn-container">
          <button
            type="submit"
            className="accelerate-btn"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button type="submit" className="brake-btn" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

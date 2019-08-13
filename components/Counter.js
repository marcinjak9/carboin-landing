import React, { Component } from 'react'


const OFFSETS = {
  year: 23000000000,
  day: 63013000,
  hour: 2625000,
  minute: 43000,
  second: 700,
}

class Counter extends Component {
  constructor(props) {
    super(props);
    const d = new Date()
    this.state = {
      n: d.getHours() * OFFSETS.hour,
      intervalId: null
    }
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer, 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
 }

  timer = () => {
    this.setState({ n: this.state.n + OFFSETS.second });
  }
  

  render() {
    return (
      <div className="counter">
        <h3>{Math.floor(this.state.n).toLocaleString()} kg </h3>
        <span className="counter-data">of CO2 produced <span className="underline">today</span></span>
      </div>
    )
  }
}

export default Counter
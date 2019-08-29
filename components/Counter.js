import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
  margin: 20px;
  padding: 3rem 0;

  .counter-data {
    line-height: 40px;
  }

  .underline {
    text-decoration: underline;
    font-weight: bold;
    color: #11474A;
  }

  h3 {
    margin: 0;
    font-size: 42px;
    font-weight: 700;
    color: #333; 
  }
  img {
    max-width: 300px;
    margin: 0 auto;
  }
`

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
      <Wrapper className="counter">
        <img src="/static/assets/Farm.svg" alt=""/>
        <h3>{Math.floor(this.state.n).toLocaleString()} kg </h3>
        <span className="counter-data">of CO2 produced <span className="underline">today</span></span>
      </Wrapper>
    )
  }
}

export default Counter
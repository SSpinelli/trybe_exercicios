import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numberOfClicks1: 0,
      numberOfClicks2: 0,
      numberOfClicks3: 0,
    }
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numberOfClicks1: estadoAnterior.numberOfClicks1 + 1
    }))
  }

  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numberOfClicks2: estadoAnterior.numberOfClicks1 + 1
    }))
  }

  handleClick3() {
    this.setState((estadoAnterior, _props) => ({
      numberOfClicks3: estadoAnterior.numberOfClicks1 + 1
    }))
    console.log()
  }

  colorButton(num) {
    if(num % 2 === 0) {
      return '#00ff00';
    }
    return '#ff0000'
  }



  render() {
    const { numberOfClicks1, numberOfClicks2, numberOfClicks3 } = this.state;
    return (
      <>
        <button style={{backgroundColor: this.colorButton(numberOfClicks1)}} onClick={this.handleClick1}>{numberOfClicks1}</button>
        <button style={{backgroundColor: this.colorButton(numberOfClicks2)}} onClick={this.handleClick2}>{numberOfClicks2}</button>
        <button style={{backgroundColor: this.colorButton(numberOfClicks3)}} onClick={this.handleClick3}>{numberOfClicks3}</button>
      </>
    );
  }
}

export default App;

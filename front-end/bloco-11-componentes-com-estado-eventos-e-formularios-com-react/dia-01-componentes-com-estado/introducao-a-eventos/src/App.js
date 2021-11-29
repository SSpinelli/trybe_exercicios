import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick () {
    console.log('Oi');
  }
  handleClick2 () {
    console.log('Olá')
  }
  handleClick3 () {
    console.log('Hello')
  }
  render() {
  return (
    <>
      <h1>Hello, World</h1>
      <button onClick={this.handleClick}>Clique aqui</button>
      <button onClick={this.handleClick2}>Clique aqui</button>
      <button onClick={this.handleClick3}>Clique aqui</button>
    </>
  );
  }
}


export default App;

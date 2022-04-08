import React from 'react';
import './App.css';
import FirstComponent from './components/FirstComponent.jsx'
import SecondComponent from './components/SecondComponent.jsx'

class App extends React.Component {
  render() {
  return (
    <div>
      <FirstComponent />
      <SecondComponent />
    </div>
    );
  }
}

export default App;

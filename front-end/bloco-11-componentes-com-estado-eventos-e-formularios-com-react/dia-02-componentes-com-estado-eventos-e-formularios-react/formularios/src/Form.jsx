import React from "react";
import BestPlays from "./components/BestPlay";
import Grafite from "./components/Grafite";
import MapsPlayed from "./components/MapsPlayed";
import MvpPlayer from "./components/MvpPlayer";
import WinningTeam from "./components/WinningTeam";


class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      mvpPlayer: "",
      mapsPlayed: 1,
      bestPlays: "",
      winningTeam: "",
      grafite: false,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ 
      [name]: value
    })
  }
  render() {
    return (
      <>
        <h1>Formulário Major CS:GO</h1>
        <form>
          <WinningTeam value={this.state.winningTeam} handleChange={this.handleChange} />
          <MvpPlayer value={this.state.mvpPlayer} handleChange={this.handleChange} />
          <MapsPlayed value={this.state.mapsPlayed} handleChange={this.handleChange} />
          <BestPlays value={this.state.bestPlays} handleChange={this.handleChange} />
          <Grafite value={this.state.grafite} handleChange={this.handleChange} />
        </form>
      </>
    )
  }
}

export default Form;

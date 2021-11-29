import React from "react";

class WinningTeam extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <label>
        Qual o time que vai ganhar o Major?
        <select name="winningTeam" value={value} onChange={handleChange}>
          <option value="NaVi">Natus Vincere</option>
          <option value="Astralis">Astralis</option>
          <option value="Liquid">Liquid</option>
          <option value="SK">SK</option>
          <option value="Fnatic">Fnatic</option>
        </select>
      </label>
    )
  }
}

export default WinningTeam;
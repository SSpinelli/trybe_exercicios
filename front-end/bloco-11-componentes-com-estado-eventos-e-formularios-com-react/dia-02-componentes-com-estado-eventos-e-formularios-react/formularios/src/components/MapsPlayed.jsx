import React from "react";

class MapsPlayed extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return(
      <label>
        Teremos quantos mapas na final?
        <input type="number" min="1" max="3" value={ value } name="mapsPlayed" onChange={ handleChange }/>
      </label>
    )
  }
}

export default MapsPlayed;

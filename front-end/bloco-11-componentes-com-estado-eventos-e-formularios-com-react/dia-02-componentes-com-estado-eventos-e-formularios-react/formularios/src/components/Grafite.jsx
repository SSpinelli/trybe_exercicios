import React from "react";

class Grafite extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <label>
        Teve grafite nesse major?
        <input type="checkbox" name="grafite" onChange={ handleChange } value={ value }/>
      </label>
    )
  }
}

export default Grafite;
import React from "react";

class MvpPlayer extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return(
      <label>
        Quem vai ser o MVP?
        <input type="text" name="mvpPlayer" value={ value } onChange={ handleChange }/>
      </label>
    )
  }
}

export default MvpPlayer;

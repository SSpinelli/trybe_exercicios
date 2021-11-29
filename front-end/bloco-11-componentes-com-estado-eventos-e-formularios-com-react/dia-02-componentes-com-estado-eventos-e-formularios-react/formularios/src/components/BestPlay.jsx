import { render } from "@testing-library/react";
import React from "react";

class BestPlays extends React.Component {
  render() {
    const { value, handleChange } = this.props
    return (
      <label>
        Escreva sobre a melhor partida do MAjor
        <textarea name="description" id="description-match" cols="30" rows="10" value={ value } onChange={ handleChange }></textarea>
      </label>
    )
  }
}

export default BestPlays;

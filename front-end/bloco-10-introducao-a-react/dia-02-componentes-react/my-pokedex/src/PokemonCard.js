import React from "react";

class PokemonCard extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props
    return (
      <div>
        <h2>{ name }</h2>
        <h4>{ type }</h4>
        <h4> { `${averageWeight.value} ${averageWeight.measurementUnit}` } </h4>
        <img src={ image } alt={ name } />
      </div>
    )
  }
}

export default PokemonCard;
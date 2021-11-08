import React from "react";

class PokemonCard extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props
    return (
      <div className="pokemon" id={ name }>
        <div>
          <h2>{ name }</h2>
          <h4>{ type }</h4>
          <h4> { `${averageWeight.value} ${averageWeight.measurementUnit}` } </h4>
        </div>
        <div>
          <img src={ image } alt={ name } />
        </div>
      </div>
    )
  }
}

export default PokemonCard;
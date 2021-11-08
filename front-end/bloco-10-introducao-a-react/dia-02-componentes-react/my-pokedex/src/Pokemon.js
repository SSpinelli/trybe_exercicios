import React from "react";
import pokemons from "./data";
import PokemonCard from "./PokemonCard";

console.log(pokemons);

class Pokemon extends React.Component {
  render() {
    return (
      <div className="pokemon-container">
        {pokemons.map((pokemon) => (
          <PokemonCard 
            className={ pokemon.name }
            key={ pokemon.name }
            name={ pokemon.name }
            type={ pokemon.type }
            image= { pokemon.image }
            averageWeight={ pokemon.averageWeight }
          />))}
      </div>
    )
  }
}

export default Pokemon;
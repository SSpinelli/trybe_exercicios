import React from "react";
import pokemons from "./data";
import PokemonCard from "./PokemonCard";

console.log(pokemons);

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        {pokemons.map((pokemon) => (
          <PokemonCard 
            key={ pokemon.name }
            name={ pokemon.name }
            type={ pokemon.type }
            image= { pokemon.image }
            averageWeight={ pokemon.averageWeight }
          />
        ))}
      </div>
    )
  }
}

export default Pokemon;
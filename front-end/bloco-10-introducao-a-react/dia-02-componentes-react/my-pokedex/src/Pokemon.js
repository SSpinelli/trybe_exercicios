import React from "react";
import pokemons from "./data";

console.log(pokemons);

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        <h1>hola, que tal</h1>
        <div>
          {pokemons.map((pokemon) => (
            <Pokemon
              key={ pokemon.name }
              name={ pokemon.name }
              type={ pokemon.type }
          />))}
        </div>
      </div>
    )
  }
}

export default Pokemon;
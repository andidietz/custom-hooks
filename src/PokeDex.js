import React from "react";
import useAxios from "./hooks/useAxios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";

function PokeDex() {
  const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`
  const {pokemon, handleClick} = useAxios(BASE_URL)
  
  const cardComponents = pokemon ? 
    <PokemonCard
      key={pokemon.id}
      front={pokemon.sprites.front_default}
      back={pokemon.sprites.back_default}
      name={pokemon.name}
      stats={pokemon.stats.map(stat => ({
        value: stat.base_stat,
        name: stat.stat.name
      }))}
    />
      : null



  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={handleClick} />
      </div>
      <div className="PokeDex-card-area">
        {cardComponents}
      </div>
    </div>
  )
}

export default PokeDex;
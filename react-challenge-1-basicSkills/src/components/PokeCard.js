import React from "react";

export default function PokeCard({ pokemon }) {
  return (
    <>
      <h1>Pokemon: {pokemon.name} </h1>
      <img src={pokemon.sprites.front_default} alt="charizard default" />
      <img src={pokemon.sprites.front_shiny} alt="charizard shiny" />
      <br />
      <a href={pokemon.video} target="_blank" rel="noreferrer noopener">
        Video
      </a>
    </>
  );
}

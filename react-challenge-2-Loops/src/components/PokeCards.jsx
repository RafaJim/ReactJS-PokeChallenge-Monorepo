import React from "react";

export default function PokeCard({ pokemon }) {
  return (
    <>
      <h1>Pokemon: {pokemon.name} </h1>
      <a href={pokemon.videoLink} target="_blank" rel="noreferrer noopener">
        <img
          src={pokemon.sprites.front_default || pokemon.sprites.back_default}
          onMouseEnter={(e) =>
            (e.currentTarget.src =
              pokemon.sprites.front_shiny || pokemon.sprites.back_shiny)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.src =
              pokemon.sprites.front_default || pokemon.sprites.back_default)
          }
          alt={pokemon.name}
        />
      </a>
    </>
  );
}

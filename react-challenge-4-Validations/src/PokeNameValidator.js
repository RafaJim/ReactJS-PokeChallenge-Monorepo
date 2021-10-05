import React, { useState, useEffect } from "react";
import pokemons from "./pokemons";

export default function PokeNameValidator() {
  const [name, setName] = useState("");
  let [pokeName] = useState(
    pokemons[Math.floor(Math.random() * pokemons.length)]
  );

  useEffect(() => {
    if (name === pokeName) {
      if (!alert("Correct! Play again?")) {
        window.location.reload();
      }
    }
    console.log(name);
  }, [name, pokeName]);

  return (
    <div className="app">
      <h2>Mini Challenge 4: Poke Name Validator</h2>
      <p>
        Pokémon name:&nbsp;
        <strong>{pokeName}</strong>
      </p>
      <p className="secondary">Type the Pokémon name correctly:</p>
      <input
        className="test"
        type="text"
        placeholder="Enter the Pokémon name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
    </div>
  );
}

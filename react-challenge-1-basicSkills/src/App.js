import React from "react";
import "./styles.css";
import PokeCard from "./components/PokeCard";
import { mockPokemonData } from "./mock/pokeData.js";

export default function App() {
  return (
    <div className="App">
      <h1>Welcome to your first mini challenge!</h1>
      <PokeCard pokemon={mockPokemonData} />
    </div>
  );
}

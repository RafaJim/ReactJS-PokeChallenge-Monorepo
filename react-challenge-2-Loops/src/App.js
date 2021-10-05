import React from "react";
import "./styles.css";
import PokeCards from "./components/PokeCards";
import { mockPokemonsData } from "./mock/pokeData.js";

export default function App() {
  return (
    <div className="App">
      <h1>2o. Challenge: Loops</h1>
      {mockPokemonsData.map((mockPokemonsData, key) => {
        return (
          <div key={key}>
            <PokeCards pokemon={mockPokemonsData} />
          </div>
        );
      })}
    </div>
  );
}

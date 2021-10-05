import React from "react";
import CardItem from "./components/CardItem";
import { pokemons } from "./mock/mockedData";
import { useState } from "react";

import "./styles.css";

export default function App() {
  const [searchName, setName] = useState("");

  return (
    <div className="app">
      <h2>Mini Challenge 3: Poke filter</h2>
      <input
        tpye="text"
        placeholder="insert pokemon name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div className="cards">
        {pokemons
          .filter((val) => {
            if (searchName === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchName.toLowerCase())
            ) {
              return val;
            }
          })
          .map((poke, key) => (
            <div key={key}>
              <CardItem {...poke} />
            </div>
          ))}
      </div>
    </div>
  );
}

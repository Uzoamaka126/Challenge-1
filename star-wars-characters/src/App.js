import React, { useState, useEffect } from "react";

import "./App.css";
import CardList from "./components/card-list/CardList";

const App = () => {
  const [characters, setCharacters] = useState([]);
  // const filteredCharacters = characters.filter(character => character.name);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.co/api/people");
      const data = await response.json();
      const profile = data.results;
      setCharacters(profile);
    }
    fetchData();
  }, []);

  return (
    <div>
      <CardList characters={characters}/>
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";

import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const filteredCharacters = characters.filter(character => character.name);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://swapi.co/api/people/1");
      const data = await response.json();
      const profile = data.results;
      setCharacters(profile);
    }
    fetchData();
  }, []);

  return (
    <div>
      <p>{filteredCharacters}</p>
    </div>
  );
};

export default App;

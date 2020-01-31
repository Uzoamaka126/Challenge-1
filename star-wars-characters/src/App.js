import React, { useState, useEffect } from "react";

import "./App.css";

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
      {characters.map(character => (
        <div>
          <h2 key={8 + Math.random()}>{character.name}</h2>
          <p>{character.gender}</p>
          <p>{character.height}</p>
        </div>
      ))}
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";

import "./App.css";
import CardList from "./components/card-list/CardList";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.co/api/people");
      const data = await response.json();
      const profile = data.results;
      setCharacters(profile);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Star Wars Characters</h1>
      {loading ? ...loading : <CardList characters={characters} />}
    </div>
  );
};

export default App;

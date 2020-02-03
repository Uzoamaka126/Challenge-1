import React from "react";
import Card from "../card/Card";

const CardList = props => {
  const { characters } = props;

  return (
    <div>
      {characters.map(character => (
        <Card key={8 + Math.random()} character={character} />
      ))}
    </div>
  );
};

export default CardList;

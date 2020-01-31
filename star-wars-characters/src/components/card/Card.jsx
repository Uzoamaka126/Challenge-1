import React from 'react';

const Card = (props) => {
  const { character } = props;
  return (
    <div>
      <h2 key={8 + Math.random()}>{character.name}</h2>
      <p>{character.birth_year}</p>
      <p>{character.height}</p>
    </div>
  );
}

export default Card;
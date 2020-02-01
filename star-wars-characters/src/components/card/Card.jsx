import React from 'react';
import { CardBox } from './CardStyles';

const Card = (props) => {
  const { character } = props;
  return (
    <CardBox>
      <h2 key={8 + Math.random()}>{character.name}</h2>
      <p>{character.birth_year}</p>
      <p>{character.height}</p>
    </CardBox>
  );
}

export default Card;
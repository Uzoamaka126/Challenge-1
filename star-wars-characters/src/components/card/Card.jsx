import React from 'react';
import { CardBox } from './CardStyles';

const Card = (props) => {
  const { character } = props;
  return (
    <CardBox>
      <h2 key={8 + Math.random()}>Name: {character.name}</h2>
      <p>Birth Year: {character.birth_year}</p>
      <p>Height: {character.height}</p>
    </CardBox>
  );
}

export default Card;
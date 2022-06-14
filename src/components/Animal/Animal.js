import React from 'react';
import './Animal.css';

export default function Animal({ name, says, top, left, type }) {
  return (
    <div className='animal' style={{ top, left }}>
      <img src={`/Animals/${type}.svg`} />
      <span className='name'>{name}</span>
      <span>{says}</span>
    </div>
  );
}
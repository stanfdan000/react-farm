import React from 'react';
import Animal from '../Animal/Animal.js';
import backgroundImg from '../../background.png';

export default function AnimalList({ animals }) {
  return (
    <div className='back' style={{ backgroundImage: `url(${backgroundImg})` }}>
      {
        animals.map((animal, i) => <Animal {...animal} key={animal + i}/>
        )
      }

    </div>
  ); 
}
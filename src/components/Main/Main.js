import React from 'react';
import './Main.css';
import backgroundImg from '../../background.png';
import { animals } from '../../data.js';
import Animal from '../Animal/Animal.js';

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {animals.map((item, i) => (
        <Animal key={item.name + i } {...item} />
      ))}
      <header>this is my farm</header>
    </main>
  );
}
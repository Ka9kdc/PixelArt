import React, { useState, useEffect } from 'react';

// import {
//   getSomething
// } from '../api';
import Grid from './Grid';
import Pallette from './Pallette';

const App = () => {
  const [message, setMessage] = useState('');
  const [gridSize, setGridSize] = useState(8)
  const [mouseActive, setMouseActive] = useState(false)
  const [choosenColor, setChoosenColor] = useState("red")


  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <h2>{ message }</h2>
      <Pallette choosenColor={choosenColor} setChoosenColor={setChoosenColor} />
      <Grid choosenColor={choosenColor} mouseActive={mouseActive} gridSize={gridSize} />
    </div>
  );
}

export default App;
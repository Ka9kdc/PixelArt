import React, { useState, useEffect } from 'react';

// import {
//   getSomething
// } from '../api';
import Grid from './Grid';

const App = () => {
  const [message, setMessage] = useState('');
  const [gridSize, setGridSize] = useState(8)
  const [mouseActive, setMouseActive] = useState(false)
  const [choosenColor, setChoosenColor] = useState("Red")


  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <h2>{ message }</h2>
      <Grid choosenColor={choosenColor} mouseActive={mouseActive} gridSize={gridSize} />
    </div>
  );
}

export default App;
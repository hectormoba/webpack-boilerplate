import React from 'react';
import { render } from 'react-dom';

function App(){
  return(
    <h2>To the moon!</h2>
  )
}

const node = document.getElementById("root");
render(<App />, node);
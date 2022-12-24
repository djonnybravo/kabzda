import React from 'react';
import Accordion from "./components/Accordion/Accordion";

import './App.css';

function App() {
  return (
    <div>
      This is APP component
      <Rating />
      <Accordion />
        <Rating />
    </div>
  );
}

function Rating() {
    return (
        <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
        </div>
    );
}

function Star() {
    return (
        <div>star</div>
    );
}




export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <div className="App">
        <Accordion/>
        <br/><br/><hr/>
        <Rating/>
    </div>
  );
}

export default App;

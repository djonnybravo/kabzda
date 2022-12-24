import React from 'react';
import Accordion from "./components/Accordion/Accordion";
import './App.css';
import {Rating} from "./components/Rating/Rating";

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




export default App;

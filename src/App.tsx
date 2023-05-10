import React from 'react';

import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <div className="App">
        <Accordion title = {"Meню"} collapsed={true}/>
        <br/><br/><hr/>
        <Rating value={3}/>
        <Rating value={4}/>
    </div>
  );
}

export default App;

import React, {Component, useState} from "react";

import "./App.css";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";

function App() {
  return (
    <div className="App">
        <Accordion title = {"Meню"} collapsed={true}/>
        <br/><br/><hr/>
        <OnOff on={true}/>
        <OnOff on={false}/>
        <br/><br/><hr/>
        <Rating value={3}/>

    </div>
  );
}

export default App;

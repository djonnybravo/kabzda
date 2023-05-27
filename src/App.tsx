import React from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
        <Accordion title = {"Meню"} collapsed={true}/>
        <hr/>
        <UncontrolledAccordion title={"Uncontrolled"} />
        <br/><br/><hr/>
        <OnOff />
        <br/><br/><hr/>
        <Rating value={3}/>
        <br/><br/><hr/>
        <UncontrolledRating/>
        <br/><br/><hr/>
        <Input/>
    </div>
  );
}

export default App;
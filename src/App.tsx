import React from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UnconntroledAccordion from "./components/Accordion/UnconntroledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";

function App() {
  return (
    <div className="App">
        <Accordion title = {"Meню"} collapsed={true}/>
        <hr/>
        <UnconntroledAccordion title={"Uncontrolled"} />
        <br/><br/><hr/>
        <OnOff />
        <br/><br/><hr/>
        <Rating value={3}/>
        <br/><br/><hr/>
        <UncontrolledRating/>

    </div>
  );
}

export default App;
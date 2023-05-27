import React from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import Input from "./components/Input/Input";
import Checkbox from "./components/Input/Checkbox";
import Select from "./components/Select/Select";
import MySelect from "./components/Select/MySelect.";

function App() {
    const items = [
        {id: 1, title: "First"},
        {id: 2, title: "Second"},
        {id: 3, title: "Third"},
        {id: 4, title: "Fourth"},

    ]
    return (
        <div className="App">
            <MySelect/>
            <hr/>
            <Accordion title={"Meню"} items={items}/>
            <hr/>
            <br/><br/>
            <hr/>
            <OnOff/>
            <br/><br/>
            <hr/>
            <UncontrolledRating/>
            <br/><br/>
            <hr/>
            <Input/>
            <br/><br/>
            <hr/>
            <Checkbox/>
            <br/><br/>
            <hr/>
            <Select/>
        </div>
    );
}

export default App;
import React, {useState} from "react";
import "./App.css";
import Accordion, {ItemsType} from "./components/Accordion/Accordion";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import Input from "./components/Input/Input";
import Checkbox from "./components/Input/Checkbox";
import Select from "./components/Select/Select";
import MySelect from "./components/Select/MySelect.";
import UseMemoDifficultOperation from "./components/UseMemoDifficultOperation";
import UseState from "./components/UseState";
import UseEffect from "./useEffect";
import AnalogClock from "./components/AnalogClock/AnalogClock";
import ReactMemo from "./components/ReactMemo";
import ReactMemoWithUseMemo from "./components/ReactMemoWithUseMemo";

function App() {
    const items = [
        {id: 1, title: "First"},
        {id: 2, title: "Second"},
        {id: 3, title: "Third"},
        {id: 4, title: "Fourth"},

    ]

    const [collapsed, setCollapsed] = useState(true)

    const itemsForSelect = [
        {value: "1", title: "First Item"},
        {value: "2", title: "Second Item"},
        {value: "3", title: "Third Item"},
    ]

    const [value, setValue] = useState('2')
    const changeValue = (newValue: any) => setValue(newValue)


    return (
        <div className="App">
            {/*<ReactMemo/>*/}
            <br/>
            <hr/>
            <br/>
            <ReactMemoWithUseMemo/>
        </div>
    );
}

export default App;
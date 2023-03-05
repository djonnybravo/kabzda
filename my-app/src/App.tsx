import React, {useState} from 'react';
import Accordion from "./components/Accordion/Accordion";
import './App.css';
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import AccordionUnconrolled from "./components/Accordion/AccordionUnconrolled";
import {RatingUncontrolled} from "./components/Rating/RatingUncontrolled";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import ConroledInput from "./components/ControledInput/ConroledInput";
import ControledInput from "./components/ControledInput/ConroledInput";
import ConroledSelect from "./components/ControledSelect/ControledSelect";
import ControledCheckBox from "./components/ControledCheckBox/ControledCheckBox";

function App() {

    const [ratingValue, setRatingValue] = useState(0)
    let [collapsed, setCollapse] = useState(false)
    const [on, setON] = useState(false)

    const items = [
        {
            title: "Yo",
            value: 1
        },
        {
            title: "Privet",
            value: 2
        },
        {
            title: "Hello",
            value: 3
        },
        {
            title: "Bye",
            value: 4
        }
    ]

    return (
        <div>

            <Accordion titleValue={'Users'} collapsed={collapsed} onChange={() => {
                setCollapse(!collapsed)}} items={items} onClick={()=> {
                console.log('someItem was clicked')}}/>
            <br/>
            <br/>
            <br/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <OnOff on={on} click={() => setON(!on)}/>
            <OnOff on={on} click={() => setON(!on)}/>


            <br/>
            <br/>
            <br/>
            <br/>
            <ControledInput/>
            <ConroledSelect/>
            <ControledCheckBox/>
        </div>
    );
}


type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}


export default App;

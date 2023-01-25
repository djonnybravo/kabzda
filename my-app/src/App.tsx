import React, {useState} from 'react';
import Accordion from "./components/Accordion/Accordion";
import './App.css';
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import AccordionUnconrolled from "./components/Accordion/AccordionUnconrolled";
import {RatingUncontrolled} from "./components/Rating/RatingUncontrolled";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";

function App() {

    const [ratingValue, setRatingValue] = useState(0)
    let [collapsed, setCollapse] = useState(false)
    const [on, setON] = useState(false)
    return (
        <div>

            <Accordion titleValue={'Users'} collapsed={collapsed} onChange={() => {
                setCollapse(!collapsed)
            }}/>
            <hr/>
            <AccordionUnconrolled titleValue={"TRY THIS"}/>
            <hr/>
            <RatingUncontrolled/>
            <hr/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledOnOff on={false}/>


            <OnOff on={on} click={() => setON(!on)}/>
            <OnOff on={on} click={() => setON(!on)}/>
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

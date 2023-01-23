import React from 'react';
import Accordion from "./components/Accordion/Accordion";
import './App.css';
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import AccordionUnconrolled from "./components/Accordion/AccordionUnconrolled";
import {RatingUncontrolled} from "./components/Rating/RatingUncontrolled";
function App() {
    return (
        <div>
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}

            <AccordionUnconrolled titleValue={"TRY THIS"} />
            <br/>
            <br/>
            <br/>
            <RatingUncontrolled/>
            <br/>
            <br/>
            <br/>
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}

            <OnOff on={true}/>
            <OnOff on={false}/>
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

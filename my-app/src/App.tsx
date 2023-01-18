import React from 'react';
import Accordion from "./components/Accordion/Accordion";
import './App.css';
import {Rating} from "./components/Rating/Rating";
import onOff from "./components/OnOff/OnOff";
import OnOff from "./components/OnOff/OnOff";
function App() {
    return (
        <div>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>

            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />

            <OnOff status={false}/>
            <OnOff status={true}/>
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

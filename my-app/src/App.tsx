import React from 'react';
import Accordion from "./components/Accordion/Accordion";
import './App.css';
import {Rating} from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <PageTitle title={'My friends'}/>
            Article 1
            <Rating value={1}/>
            <Accordion titleValue={'First title'} collapsed={true}/>
            <Accordion titleValue={'Second title'} collapsed={false}/>
            Article 2
            <Rating value={5}/>
            <Rating value={4}/>
            <Rating value={3}/>
            <Rating value={2}/>
            <Rating value={1}/>
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

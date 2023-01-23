import React, {MouseEventHandler, useState} from "react";

type AccordionPropsType = {
    titleValue: string

}

function Accordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)

const showHideClick:MouseEventHandler<HTMLButtonElement> = () => collapsed ? setCollapsed(false) : setCollapsed(true)


    return (
        <div>

            <AccordionTitle title={props.titleValue}/>
            { !collapsed  && < AccordionBody/>}
            <button onClick ={showHideClick}>CLICK</button>
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>--- {props.title} ---</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}


export default Accordion
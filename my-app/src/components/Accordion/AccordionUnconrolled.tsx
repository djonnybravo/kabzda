import React, {MouseEventHandler, useState} from "react";

type AccordionPropsType = {
    titleValue: string

}

function Accordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(true)

const showHideClick:MouseEventHandler<HTMLButtonElement> = () => collapsed ? setCollapsed(false) : setCollapsed(true)


    return (
        <div>

            <AccordionTitle title={props.titleValue} onClick ={() => {setCollapsed(!collapsed)}}/>
            { !collapsed  && < AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {props.onClick()}}>--- {props.title} ---</h3>
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
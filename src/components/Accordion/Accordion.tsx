import React from 'react';
import AccordionBody from "./AccordionBody/AccordionBody";
import AccordionTitle from "./AccordionTitle/AccordionTitle";

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/> }
        </div>
    );
};

export default Accordion;
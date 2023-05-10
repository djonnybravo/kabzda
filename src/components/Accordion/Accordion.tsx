import React from 'react';
import AccordionBody from "./AccordionBody/AccordionBody";
import AccordionTitle from "./AccordionTitle/AccordionTitle";

type AccordionPropsType = {
    title: string
}

const Accordion = (props: AccordionPropsType) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    );
};

export default Accordion;
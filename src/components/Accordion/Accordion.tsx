import React, {useState} from 'react';
import AccordionBody from "./AccordionBody/AccordionBody";
import AccordionTitle from "./AccordionTitle/AccordionTitle";

export type AccordionPropsType = {
    title: string

}

const Accordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div onClick={ () => {setCollapsed(!collapsed)}}>
            <AccordionTitle title={props.title}/>

            {!collapsed && <AccordionBody/> }

        </div>
    );
};

export default Accordion;


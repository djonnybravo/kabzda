import React, {useState} from 'react';
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";

type UnconntroledAccordionPropsType = {
    title: string
}



const UncontrolledAccordion = (props: UnconntroledAccordionPropsType) => {

    const [collapsed, setCollapsed] = useState(false)
    return (
        <div onClick={ () => {setCollapsed(!collapsed)}}>
            <AccordionTitle title={props.title}/>

                {!collapsed && <AccordionBody/> }

        </div>
    );
};

export default UncontrolledAccordion;
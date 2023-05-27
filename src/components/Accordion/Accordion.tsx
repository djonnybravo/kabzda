import React, {useState} from 'react';
import AccordionBody from "./AccordionBody/AccordionBody";
import AccordionTitle from "./AccordionTitle/AccordionTitle";


export type AccordionPropsType = {
    title: string
    items: ItemsType[]
}

 export type ItemsType = {
    id: number
    title: string
}
const Accordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div onClick={ () => {setCollapsed(!collapsed)}}>
            <AccordionTitle title={props.title}/>

            {!collapsed && <AccordionBody items={props.items}/> }

        </div>
    );
};

export default Accordion;


import React from 'react';
import {ItemsType} from "../Accordion";

type AccordionBodyType = {
    items: ItemsType[]
}

const AccordionBody = (props: AccordionBodyType) => {
    return (
        <ul>
            {props.items.map(i => <li>{i.title}</li>)}
        </ul>
    );
};

export default AccordionBody;
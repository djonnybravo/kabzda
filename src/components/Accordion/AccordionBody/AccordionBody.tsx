import React from 'react';
import {ItemsType} from "../Accordion";

type AccordionBodyType = {
    items: ItemsType[]
}

const AccordionBody = (props: AccordionBodyType) => {
    return (
        <ul>
            {props.items.map(i => <li key={i.id}>{i.title}</li>)}
        </ul>
    );
};

export default AccordionBody;
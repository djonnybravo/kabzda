import React from "react";



type ItemType = {
    title: string
    value : any
}
type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    onClick: (value: any) => void
    items: Array<ItemType>
}



function Accordion(props: AccordionPropsType) {




    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            { !props.collapsed  && < AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}> {props.title}</h3>
    );
}
type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}
function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((item, index) => {
                return <li onClick={() => {props.onClick(item.value)}} key={index}>{item.title}</li>
            })}
        </ul>
    );
}


export default Accordion
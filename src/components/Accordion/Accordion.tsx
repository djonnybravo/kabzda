import React, {useReducer, useState} from 'react';
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
    // const [collapsed, setCollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer, false)

    return (
        <div onClick={ () => { debugger; dispatch( {type: "CHANGE-COLLAPSED"})}}>
            <AccordionTitle title={props.title}/>

            {!collapsed && <AccordionBody items={props.items}/> }

        </div>
    );
};

type ActionType = {
    type: "CHANGE-COLLAPSED"
}

const reducer = (state: boolean, action: ActionType) => {

    switch (action.type) {
        case "CHANGE-COLLAPSED":
            return !state
        default:
            return state
    }


}


export default Accordion;


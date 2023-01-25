import React from "react";

type RatingPropsType = {
    value: number
    onClick: (value: number) => void
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value > 0} value={1} onClick = {props.onClick} />
            <Star selected={props.value > 1} value={2} onClick = {props.onClick}/>
            <Star selected={props.value > 2} value={3} onClick = {props.onClick}/>
            <Star selected={props.value > 3} value={4} onClick = {props.onClick}/>
            <Star selected={props.value > 4} value={5} onClick = {props.onClick}/>
        </div>
    )


}

type StarPropsType = {
    selected: boolean
    value: number
    onClick: (value: number) => void
}

function Star(props: StarPropsType) {

    return <span onClick={() => props.onClick(props.value)}>
                {props.selected ? <b>star </b> : "star "}
           </span>

}
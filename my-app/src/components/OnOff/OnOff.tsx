import React, {useState} from "react";

type PropsType = {
    on: boolean
    click: () => void
}



function OnOff(props: PropsType) {

    const onStyle ={

        display: "inline-block",
        border: "1px solid black",
        backgroundColor: props.on ? "green" : "white",
        padding: "15px",
        margin: "10px",

    }
    const oFFStyle ={
        display: "inline-block",
        margin: "10px",
        border: "1px solid black",
        backgroundColor: props.on? "white" : "red" ,
        padding: "15px"

    }
    const indicatorstyle ={
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        margin: "auto",
        backgroundColor: props.on ? "green" : "red"
    }



    return (

        <div>
            <div style={onStyle} onClick={props.click}>ON</div>
            <div style={oFFStyle} onClick={ props.click}>OFF</div>
            <div style={indicatorstyle}></div>
        </div>
    )
}

export default OnOff
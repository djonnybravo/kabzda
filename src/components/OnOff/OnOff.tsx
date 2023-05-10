import React from 'react';

type OnOffPropsType = {
    on : boolean
}



const OnOff = (props:OnOffPropsType) => {

    const green = {
        backgroundColor: props.on ? "green" : "white",
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px"
    }
    const red = {
        backgroundColor: props.on ? "white" : "red",
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px",
        marginLeft: "5px"

    }
    const indicator = {
        width: "10px",
        height:"10px",
        borderRadius: "50px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"

    }

    return (
        <div>
           <div style={green}>ON</div>
           <div style={red}>OFF</div>
           <div style={indicator}></div>
        </div>
    );
};

export default OnOff;
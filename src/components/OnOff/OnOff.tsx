import React, {useState, useTransition} from "react";

type OnOffPropsType = {
    on : boolean
}



const OnOff = (props:OnOffPropsType) => {

   const [onOff, setOnOff] = useState(false)

    const onClickHandler = () => {
        setOnOff(true)
    }

    const offClickHandler = () => {
        setOnOff(false)
    }

    const green = {
        backgroundColor: onOff ? "green" : "white",
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px"
    };
    const red = {
        backgroundColor: onOff ? "white" : "red",
        width: "30px",
        height:"20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "10px",
        marginLeft: "5px"

    };
    const indicator = {
        width: "10px",
        height:"10px",
        borderRadius: "50px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: onOff ? "green" : "red"

    };

    return (
        <div>
           <div style={green} onClick={onClickHandler}>ON</div>
           <div style={red} onClick={offClickHandler}>OFF</div>
           <div style={indicator}></div>
        </div>
    );
};

export default OnOff;
import React, {useState} from "react";

type PropsType = {
    on: boolean
}



function OnOff(props: PropsType) {




    const [on, setON] = useState(false)



    const onStyle ={

        display: "inline-block",
        border: "1px solid black",
        backgroundColor: on ? "green" : "white",
        padding: "15px",
        margin: "10px",

    }
    const oFFStyle ={
        display: "inline-block",
        margin: "10px",
        border: "1px solid black",
        backgroundColor: on? "white" : "red" ,
        padding: "15px"

    }
    const indicatorstyle ={
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        margin: "auto",
        backgroundColor: on ? "green" : "red"
    }


const offClick = () => {
        setON(false)
}
const onClick = () => {
        setON(true)
}

    return (

        <div>
            <div style={onStyle} onClick={ onClick}>ON</div>
            <div style={oFFStyle} onClick={ offClick}>OFF</div>
            <div style={indicatorstyle}></div>
        </div>
    )
}

export default OnOff
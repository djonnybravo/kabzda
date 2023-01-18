import React from "react";

type onOffType = {
    status: boolean
}



function OnOff (props:onOffType) {
    return (
        <div>
            {props.status && <OnButtons/>}
            {!props.status && <OffButtons/>}
        </div>
    )
}


function OnButtons() {

    return (<div>
        <button style={{backgroundColor: "green"}}>ON</button>
        <button>OFF</button>
        <button style={{backgroundColor: "green", borderRadius: "50px"}}> O </button>
    </div>
    )
}
function OffButtons() {
    return (<div>
            <button>ON</button>
            <button style={{backgroundColor: "red"}}>OFF</button>
            <button style={{backgroundColor: "red", borderRadius: "50px"}}> O </button>
    </div>
    )
}


export default OnOff
import React, {useState} from 'react';


function generateData () {
    return 231231231231
}


const UseState = () => {

    const [counter, setCounter] = useState(0)
    const changer = (state:number) => {
        return state + 1
    }
    return (
        <div>
            <span>{counter}</span>
            <button onClick={() => setCounter(changer)}> PLUS</button>
        </div>
    );
};

export default UseState;
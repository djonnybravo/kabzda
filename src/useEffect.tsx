import React, {useEffect, useState} from 'react';

const UseEffect = () => {

    const [currentTime, setTime] = useState(new Date().toLocaleTimeString())

    useEffect( () => {

        let timeID = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return clearInterval(timeID)
    }, [currentTime])



    return (
        <div>
            <h3>{currentTime}</h3>
        </div>
    );

};

export default UseEffect;
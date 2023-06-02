import React, {useEffect, useState} from 'react';

const UseEffect = () => {
    const [counter, setCounter] = useState(0)
    const [fake, setFake] = useState(0)


    //сначала отрисовка потом юзэфек

    useEffect(() => {
        console.log('useEffect')
        //api.getUser().then('")
        //setInterval
        //indexDB
        //document.getElementId
        document.title = counter.toString()
    }, [counter])


    console.log('ОТРИСОВКА')
    return (
        <div>
            <span>{counter}{fake}</span>
            <button onClick={() => setFake(fake + 1)}> PLUS</button>
        </div>
    );

};

export default UseEffect;
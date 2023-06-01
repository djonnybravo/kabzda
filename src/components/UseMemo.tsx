import React, {useMemo, useState} from 'react';

const UseMemo = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)


    let resultA = 1
    let resultB = 1

    useMemo( () => {
        for (let i = 1; i <= a ; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake ++
                const fakeValue = Math.random()
            }
            resultA *= i
        }
    }, [a])


    for (let i = 1; i <= b ; i++) {
        resultB *= i
    }


    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value) }/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value)) }/>
            <hr/>
                <div>Result for A: {resultA}</div>
                <div>Result for B: {resultB}</div>
        </div>
    );
};

export default UseMemo;
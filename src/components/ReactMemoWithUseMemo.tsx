import React, {memo, useMemo, useState} from 'react';


const  Counter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const  Users = (props: {users: string[]}) => {
    console.log("rerender Users")
    return <div>
        {props.users.map( (u, i) => <div key={i}>{u}</div>)}
    </div>
}



const UsersMemo = React.memo(Users)

const ReactMemoWithUseMemo = () => {
    console.log('Component rerender')

    const [count, setCounter] = useState(0)

    const [users, setUsers] = useState(['Petr', 'Sasha', 'Dima'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().includes('a'))
    }, [users])

    const addUser = () =>setUsers([...users, 'sveta' + new Date()])



    return (
        <>
            <h1>React Memo</h1>
            <button onClick={ () => setCounter(count + 1)}> + </button>
            {count}
            <button onClick={ addUser}> addUser </button>
            <UsersMemo users={newArray}/>
            <hr/>

        </>
    );
};












export default ReactMemoWithUseMemo;
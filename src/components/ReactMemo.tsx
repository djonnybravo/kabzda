import React, {memo, useState} from 'react';


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

const ReactMemo = () => {
    console.log('Component rerender')

    const [count, setCounter] = useState(0)
    const [users, setUsers] = useState(['Petya', 'Sasha', 'Dima'])
    const addUser = () => {

        setUsers([...users, 'sveta' + new Date()])
    }
    return (
        <>
            <h1>React Memo</h1>
            <button onClick={ () => setCounter(count + 1)}> + </button>
            <button onClick={ addUser}> addUser </button>
            <Counter count={count}/>
            <UsersMemo users={users}/>
            {/*<Users users={users}/>*/}
        </>
    );
};












export default ReactMemo;
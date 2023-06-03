import React, {memo, useCallback, useMemo, useState} from 'react';


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



const  Books = (props: {books: string[], callback?: () => void}) => {
    console.log("rerender Books")
    return <div>
        {props.books.map( (book, i) => <div key={i}>{book}</div>)}
        <button onClick={props.callback}> addBook </button>

    </div>
}

const BooksMemo = memo(Books)


const UseCallback = () => {
    console.log('UseCallback rerender')

    const [count, setCounter] = useState(0)
    const [users, setUsers] = useState(['Petr', 'Sasha', 'Dima'])
    const [books, setBooks] = useState(['C#', 'JS', 'React'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().includes('a'))
    }, [users])

    const newArray2 = useMemo(() => {
        return books.filter(u => u.toLowerCase().includes('a'))
    }, [books])

    const addUser = () =>setUsers([...users, 'sveta' + new Date()])
    const addBook = () =>setBooks([...books, 'CSS' + new Date()])

    const memoAddBooks = useMemo(() => {
        return () => () => setBooks([...books, 'CSS' + new Date()])
    }, [books])

    const memoAddBooks2 = useCallback(() => setBooks([...books, 'CSS' + new Date()]), [books])

    return (
        <>
            <h1>useCallback</h1>
            <button onClick={ () => setCounter(count + 1)}> + </button>
            {count}
            {/*<button onClick={ addUser}> addUser </button>*/}
            {/*<UsersMemo users={newArray}/>*/}
            <hr/>
            <BooksMemo books={newArray2} callback={memoAddBooks2} />

        </>
    );
};












export default UseCallback;
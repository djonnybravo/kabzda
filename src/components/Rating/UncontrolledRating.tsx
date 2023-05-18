import React, {useState} from 'react';


const UncontrolledRating = () => {
    const [value, setValue] = useState(0)
    return (
        <div>
            <Star value={1} setValue={setValue} selected={value > 0}/>
            <Star value={2} setValue={setValue} selected={value > 1}/>
            <Star value={3} setValue={setValue} selected={value > 2}/>
            <Star value={4} setValue={setValue} selected={value > 3}/>
            <Star value={5} setValue={setValue} selected={value > 4}/>
        </div>
    );
};

type StarPropsType = {
    selected: boolean
    value: 1 | 2 | 3 | 4 | 5
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void
}

const Star = (props:StarPropsType) => {
    return (
        <span onClick={ () => {props.setValue(props.value)}}>
            {props.selected ? <b>star</b> : <>star</>}
        </span>
    );
};


export default UncontrolledRating;
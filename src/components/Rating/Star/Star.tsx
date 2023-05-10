import React from 'react';

type StarPropsType = {
    selected: boolean
}

const Star = (props:StarPropsType) => {
    return (
        <span>{props.selected ? <b>star</b> : <>star</>}</span>
    );
};

export default Star;
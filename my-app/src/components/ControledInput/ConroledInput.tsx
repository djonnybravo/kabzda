import React, {useState} from 'react';

const ControledInput = () => {
    const [parentValue, setParentValue] = useState('')
    return (
        <div>
            <input value={parentValue} onChange={(e) => {setParentValue(e.currentTarget.value)} }/>
        </div>
    );
};

export default ControledInput;
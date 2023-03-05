import React, {useState} from 'react';

const ControledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)
    return (
        <div>
            <input type={"checkbox"} checked={parentValue} onChange={(e) =>{setParentValue(e.currentTarget.checked)} }/>
        </div>
    );
};

export default ControledCheckBox;
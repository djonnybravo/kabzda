import React, {useState} from 'react';

const ConroledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    return (
        <div>
            <select value={parentValue} onChange={(e) => {setParentValue(e.currentTarget.value)}}>
                <option> none</option>
                <option value="1">yo</option>
                <option value='2'>start</option>
                <option value="3">finish</option>
            </select>
        </div>
    );
};

export default ConroledSelect;
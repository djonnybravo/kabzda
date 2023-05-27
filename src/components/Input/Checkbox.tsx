import React, {ChangeEvent, useState} from 'react';

const Checkbox = () => {

    const [checked, setChecked] = useState(false)
    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)
    return (
        <div>
            <input
                type={"checkbox"}
                checked={checked}
                onChange={onCheckboxChange}/>
            <span>{checked ? "Now, its checked" : "Now, its unchecked"}</span>
        </div>
    );
};

export default Checkbox;

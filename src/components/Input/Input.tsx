import React, {ChangeEvent, useState} from 'react';

type InputPropsType = {

}


const Input = (props: InputPropsType) => {

    const [value, setValue] = useState("")
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)


    return (
        <div>
            <input  value={value} onChange={onInputChange}/>
            {value}
        </div>
    )
};

export default Input;
import React, {ChangeEvent, useState} from 'react';

const Select = () => {
    const [value, setValue] = useState<string | undefined>('3')

    const onSelectChange = (e:ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)

    return (
        <div>
            <select value={value} onChange={onSelectChange}>
                <option>none</option>
                <option value={'1'}>London</option>
                <option value={'2'}>NewYork</option>
                <option value={'3'}>Moscow</option>
            </select>
            <span>{value}</span>
        </div>
    );
};

export default Select;
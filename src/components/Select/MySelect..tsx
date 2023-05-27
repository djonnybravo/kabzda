import React, {useState} from 'react';

const MySelect = () => {
    const [collapsed, setCollapsed] = useState(true)
    const [value, setValue] = useState("")

    const onMySelectClick = () => setCollapsed(!collapsed)

    return (
        <div>
            <div
            style={{padding: 30, borderRadius: '2px solid green'}}
            onClick={onMySelectClick}
            >{value} Click ME</div>
            {!collapsed &&
                <div>
                    <span onClick={() => {setValue('Text 1'); setCollapsed(true)}}>Text 1</span>
                    <span onClick={() => {setValue('Text 2'); setCollapsed(true)}}>Text 2</span>
                    <span onClick={() => {setValue('Text 3 '); setCollapsed(true)}}>Text 3</span>

                </div>}
        </div>
    );
};

export default MySelect;
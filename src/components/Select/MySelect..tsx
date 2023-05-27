import React from 'react';
import styles from './MySelect.module.css'

type mySelectPropsType = {
    items: selectItems[]
    value: any
    collapsed: boolean
    setCollapsed: (isCollapsed: boolean) => void
    changeValue: (newValue: any) => void
}
export type selectItems = {
    value: any
    title: string
}

const MySelect = (props: mySelectPropsType) => {

    const selectedItem = props.items.find(i => i.value === props.value)
    const onSelectClick = () => props.setCollapsed(!props.collapsed)

    const changeValue = (value: any) => {
        props.changeValue(value)
        props.setCollapsed(true)
    }

    return (
        <div>
            <h3 onClick={onSelectClick} className={styles.select}>{selectedItem && selectedItem.title}</h3>

            {
                props.collapsed &&
                <span>Выбрано велью: {props.value}, у него тайтл: {selectedItem?.title}</span>
            }
            {
                !props.collapsed &&
                <div className={styles.items}>
                    {props.items.map(i => {



                        return <div key={i.value} onClick={() => changeValue(i.value)}>{i.title}</div>
                    })}
                </div>
            }

        </div>
    );
};

export default MySelect;
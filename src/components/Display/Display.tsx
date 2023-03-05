import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    value: number
    maxValue: number
}

const Display = (props: DisplayPropsType) => {
    console.log(props)
    const classes = `${props.value === props.maxValue? s.display + ' ' + s.disabled: s.display}`

    return (
        <div className={classes}>
            <span>{props.value}</span>
        </div>
    );
};

export default Display;
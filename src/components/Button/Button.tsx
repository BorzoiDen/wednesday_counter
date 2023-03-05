import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    disableParam: number,
    name: string,
    onclick: () => void,
    maxValue: number
}

const Button = (props: ButtonPropsType) => {
    // @ts-ignore
    const isDisabled = props.disableParam >= props.maxValue && props.name === 'INC'

    return (
        <button disabled={isDisabled} className={s.button} onClick={props.onclick}>{props.name}</button>
    );
};

export default Button;
import React from 'react';
import Display from "../Display/Display";
import Buttons from "../Buttons/Buttons";
import s from './Interface.module.css'


type InterfacePropsType = {
    currentValue: number,
    maxValue: number,
    increase: (currentValue: number) => void,
    onResetButtonClick: () => void,
}

const Interface = (props: InterfacePropsType) => {

    const onclickIncludeHandler = () =>
        props.increase(props.currentValue + 1)

    const onResetButtonClick = () => props.onResetButtonClick()
    console.log(
        props.currentValue
    )
    return (
        <div className={s.interface}>
            <Display value={props.currentValue} maxValue={props.maxValue}/>
            <Buttons currentValue={props.currentValue} maxValue={props.maxValue} setCount={onResetButtonClick} include={onclickIncludeHandler} clear={onResetButtonClick} />
        </div>
    );
};

export default Interface;
import React from 'react';
import s from "./Buttons.module.css";
import Button from "../Button/Button";
import {NavLink} from "react-router-dom";

type ButtonsPropsType = {
    currentValue: number,
    setCount : (num: number) => void,
    include: () => void,
    clear: () => void,
    maxValue: number
}

const Buttons = (props: ButtonsPropsType) => {
    console.log(props)
    return (
        <div className={s.buttons}>
            <Button disableParam={props.currentValue} maxValue={props.maxValue} onclick={props.include} name={'INC'}/>
            <Button  disableParam={props.currentValue} maxValue={props.maxValue} onclick={props.clear} name={'CLR'}/>
            <NavLink to={'/settings'}>
                <Button  disableParam={props.currentValue} maxValue={props.maxValue} onclick={()=>{}} name={'SET'}/>
            </NavLink>

        </div>
    );
};

export default Buttons;
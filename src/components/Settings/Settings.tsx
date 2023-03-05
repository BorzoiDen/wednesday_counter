import React, {ChangeEvent} from 'react';
import s from './Settings.module.css'
import Button from "../Button/Button";
import {NavLink} from "react-router-dom";

type SettingsPropsType = {
    maxValue: number
    startValue: number,
    setStartValue: (val: number) => void
    setMaxValue: (val: number) => void
}

const Settings = (props: SettingsPropsType) => {

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(Number(e.currentTarget.value))
    }
    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(Number(e.currentTarget.value))
    }

    const onSetButtonClick = () => {
        props.setStartValue(props.startValue)
    }

    return (
        <div className={s.settings}>
            <div className={s.settings__display}>
                <div className={s.block_value}>
                    <span>max value:</span>
                    <input value={props.maxValue} type={'number'} min={props.startValue + 1} onChange={onChangeMaxHandler} onKeyDown={(e) => e.preventDefault()}/>
                </div>
                <div className={s.block_value}>
                    <span>start value:</span>
                    <input value={props.startValue} type={'number'} min={0} max={props.maxValue - 1} onChange={onChangeMinHandler} onKeyDown={(e) => e.preventDefault()}/>
                </div>
            </div>
            <div>
                <NavLink to={'/'}>
                    <Button maxValue={props.maxValue} disableParam={props.maxValue} name={'SET'} onclick={onSetButtonClick}/>
                </NavLink>

            </div>
        </div>
    );
};

export default Settings;
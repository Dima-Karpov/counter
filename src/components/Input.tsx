import React, { ChangeEvent } from 'react';
import s from '../App.module.css';


type PropsType = {
    value: number
    maxValue: number
    minValue: number
    error: boolean
    onChange: (value: number) => void
    name: string
};

export const Input = React.memo((props: PropsType) => {
    const {
        value,
        maxValue,
        minValue,
        error,
        onChange,
        name,
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(JSON.parse(e.currentTarget.value))
    };

    const className = (
        value < 0 || (error && maxValue === 0)
    ) ? s.InputError : ((value <= minValue && error) ? s.InputError : '');

    return (
        <div className={s.InputBlock}>
            <span>
                {name}
            </span>
            <input
                className={`${className} ${s.Input}`}
                value={value}
                onChange={onChangeHandler}
                type='number'
            >
            </input>
        </div>
    )
});
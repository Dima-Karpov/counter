import React from 'react';
import { MouseEventHandler } from 'react';
import s from '../../App.module.css';
import { Button } from '../Button';
import { Input } from '../Input';


type PropsType = {
    maxValue: number
    minValue: number
    onMaxInputValueChangeHandler: (max: number) => void
    onMinInputValueChangeHandler: (min: number) => void
    editMode : boolean
    error : boolean
    onSetClickHandler: MouseEventHandler<HTMLButtonElement>
}


export const Settings = React.memo((props: PropsType) => {
    const {
        maxValue,
        minValue,
        onMaxInputValueChangeHandler,
        onMinInputValueChangeHandler,
        editMode,
        error,
        onSetClickHandler,
    } = props;

   const disableButton = !editMode || error || minValue < 0 || maxValue < 0;

    return (
        <div className={s.Settings}>
            <div className={s.DataBlock}>
                <Input
                    value={maxValue}
                    maxValue={maxValue}
                    minValue={minValue}
                    error={error}
                    onChange={onMaxInputValueChangeHandler}
                    name={'max value'}

                 />
                <Input
                    value={minValue}
                    maxValue={maxValue}
                    minValue={minValue}
                    error={error}
                    onChange={onMinInputValueChangeHandler}
                    name={'min value'}

                 />
            </div>
            <div className={s.ButtonsBlock}>
                <Button
                    disable={disableButton} 
                    onClick={onSetClickHandler}
                    name={'set'}
                />
            </div>
        </div>
    )
});
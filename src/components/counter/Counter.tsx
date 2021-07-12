import React, { MouseEventHandler } from 'react'
import s from '../../App.module.css';
import { Button } from '../Button';

type PropsType = {
    maxValue: number
    minValue: number
    value: number
    error: boolean
    start: boolean
    editMode: boolean
    onIncClickHandler: MouseEventHandler<HTMLButtonElement>
    onResetClickHandler: MouseEventHandler<HTMLButtonElement>
}

export const Counter = React.memo((props: PropsType) => {
    const {
        maxValue,
        minValue,
        value,
        error,
        start,
        editMode,
        onIncClickHandler,
        onResetClickHandler,
    } = props;
// debugger
    const valueV =
        start ? 'HELLO! Enter start value and press \'SET\''
            : (editMode ? (error ? 'Enter correct value and press \'SET\'': 'Press \'SET\'') : value);

            
    const className = (start ? s.StartMessageStyle :
        (editMode ?
            error ? s.ErrorStyle : s.EditModeStyle :
            value === maxValue ? s.MaxValueStyle : ''
        ));

    return (
        <div className={s.Counter}>
            <div  className={`${className} ${s.DataBlock}`}>
                {valueV}
            </div>
            <div className={s.ButtonsBlock}>
            <Button
                disable={error || editMode || value >= maxValue}
                onClick={onIncClickHandler}
                name={'inc'}
            />
            <Button
                disable={editMode || value === minValue}
                onClick={onResetClickHandler}
                name={'reset'}
            />
            </div>
        </div>
    )
});
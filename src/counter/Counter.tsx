import React, { useEffect, useState } from 'react';
import { counterVale } from '../myConst';
import { SettingsMenu } from '../SettingsMenu';
import { Button } from './Button'

type PropsType = {
    changeCount: (value: number) => void
    counter: number
    min: number
    max: number
};



export function Counter(props: PropsType) {

    // const [value, setValue] = useState(0);

    // useEffect(() => {
    //     let valueAcString = localStorage.getItem(counterVale);
    //     if(valueAcString){
    //         let storedValue = JSON.parse(valueAcString)
    //         setValue(storedValue)
    //     }
    // }, [])

    // const changeCount = (value: number) => {
    //   setValue(value)
    // };

   

    const increase = () => props.changeCount(props.counter +1);
    const reset = () =>   props.changeCount(props.min);

    const save = () => {
        localStorage.setItem( counterVale,
            JSON.stringify(props.counter))
    }
    const conditionCount = props.min < 0 
        || props.max > 5
        || props.max <= 0
        || props.min > props.max;

    const changeColor = () => props.counter === props.max ? 'submission' : 'value';
    const countToShow = conditionCount ? 'acceptable numbers: 0 to 5' : props.counter;

    const conditionDisable = props.counter === props.max
        || props.max < props.min
        || props.max > 5
        || props.min < 0
        || props.max === 0
        || props.min > 5;


    return (
        <div>
            <div className='cout'>
                <div className='bloc'>
                    <div className={changeColor()}>
                        {props.counter ? countToShow : 'choose your  reange'}
                    </div>
                </div>


                
        <div className='buttons'>  
            <Button
                name={'increase'}
                onClick={increase}
                disable={conditionDisable}
               
            />
            <Button
                name={'reset'}
                onClick={reset}
                disable={props.counter === 0}
            />
             <Button
                name={'set'}
                onClick={save}
                disable={props.counter === 0}
            />
 
        </div>
            </div>

        </div>
    );
};
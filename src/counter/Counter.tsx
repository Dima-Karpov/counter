import React, { useState } from 'react';
import { DispleyCounter } from './DispleyCounter';
import { Button } from './Button'

type PropsType = {
    counter: number
    changeCount: (counter: number) => void
};


export function Counter(props: PropsType) {

    const increase = () => props.changeCount(props.counter +1);
    const reset = () =>   props.changeCount(0);



    return (
        <div>
            <div className='cout'>
                <div className={props.counter === 5 ? 'submission' : 'value'}>
               {props.counter }
                </div>
            
                
        <div className='buttons'>  
            <Button
                name={'increase'}
                counter={props.counter}
                changeCount={increase}
                disable={props.counter === 5}
               
            />
            <Button
                name={'reset'}
                counter={props.counter}
                changeCount={reset}
                disable={props.counter === 0}
            />
        </div>
            </div>

        </div>
    );
};
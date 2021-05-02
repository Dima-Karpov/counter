import React, { useState } from 'react';
import './App.css';



type DispleyTypeProps = {
    counter: number
};


export function DispleyCounter(props: DispleyTypeProps) {
    return (
        <div className={props.counter === 3 ? 'con' : 'value'}></div>
    );
};
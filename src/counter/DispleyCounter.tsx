import React, { useState } from 'react';
import './App.css';



type DispleyTypeProps = {
    value: number
};


export function DispleyCounter(props: DispleyTypeProps) {
    return (
        <div className={props.value === 3 ? 'con' : 'value'}></div>
    );
};
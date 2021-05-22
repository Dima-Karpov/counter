import React, { ChangeEvent, useEffect, useState } from 'react';
import './App.css';
import { Button } from './counter/Button';
import { Counter } from './counter/Counter';
import { counterVale, NumberMaxOfSettings, NumberMinOfSettings } from './myConst';
import { SettingsMenu } from './SettingsMenu';




export function App() {

  const [counter, setCounter] = useState(0);

  const [max, setMax] = useState(5);
  const [min, setMin] = useState(0);


  const changeCount = (value: number) => {
    setCounter(value)
  };

  const changeSettingsMax = (number: number) => {
    setMax(number)
  }
 const changeSettingsMin = (number: number) => {
    setMin(number)
  }

  useEffect(() => {
    let valueAcString = localStorage.getItem(counterVale);
    if (valueAcString) {
      let storedValue = JSON.parse(valueAcString)
      setCounter(storedValue)
    }
  }, [])


  useEffect(() => {
    let NumberAcString = localStorage.getItem(NumberMaxOfSettings);
    if (NumberAcString) {
      let storedValue = JSON.parse(NumberAcString)
      setMax(storedValue)
    }
  }, [])

  useEffect(() => {
    let NumberAcString = localStorage.getItem(NumberMinOfSettings);
    if (NumberAcString) {
      let storedValue = JSON.parse(NumberAcString)
      setMin(storedValue)
    }
  }, [])

  const save = () => {
    localStorage.setItem(NumberMaxOfSettings, JSON.stringify(max))
    localStorage.setItem(NumberMinOfSettings, JSON.stringify(min))
  }

  return (
    <div className='App'>
      <Counter
        counter={counter}
        changeCount={changeCount}
        min={min}
        max={max}
        
      />
      <SettingsMenu
        save={save}
        max={max}
        min={min}
        changeSettingsMax={changeSettingsMax}
        changeSettingsMin={changeSettingsMin}
      />
    </div>
  );
};



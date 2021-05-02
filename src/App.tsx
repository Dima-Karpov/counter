import React, { useState } from 'react';
import './App.css';
import { Counter } from './counter/Counter';


function App() {

  const [counter, setCounter] = useState<number>(0);

  const changeCount = (counter: number) => {
    setCounter(counter)
  };

  return (
    <div className='App'>
      <Counter
        counter={counter}
        changeCount={changeCount}
      />
    </div>
  );
};

export default App;



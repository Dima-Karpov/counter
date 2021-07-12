import React from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.css';
import { Counter } from './components/counter/Counter';
import { AppStateType, store } from './redux/store';
import { increaseCountAC, onSetHandlerAC, handleOnChangeMaxAC, handleOnChangeMinAC, resetCountAC } from './redux/actionCreators';
import { saveState } from './utils/localstorage-utils';
import { Settings } from './components/settings/Settings';

export const App = () => {

  const {
    maxValue,
    minValue,
    value,
    editMode,
    error,
    start,
  } = useSelector((state: AppStateType) => state.counter);
  const dispatch = useDispatch();

  const onSetClickHandler = useCallback(() => {
    dispatch(onSetHandlerAC())
    saveState({
      counter: store.getState().counter
    })
  }, [dispatch]);

  const onIncClickHandler = useCallback(() => {
    dispatch(increaseCountAC())
  }, [dispatch]);

  const onResetClickHandler = useCallback(() => {
    dispatch(resetCountAC())
  }, [dispatch]);

  const onMaxInputValueChangeHandler = useCallback((max: number) => {
    dispatch (handleOnChangeMaxAC(max))
  }, [dispatch]); 

  const onMinInputValueChangeHandler = useCallback((min: number) => {
    dispatch (handleOnChangeMinAC(min))
  }, [dispatch]);

  return (
    <div className={s.App}>
      <Counter
        value={value}
        error={error}
        editMode={editMode}
        maxValue={maxValue}
        minValue={minValue}
        onIncClickHandler={onIncClickHandler}
        onResetClickHandler={onResetClickHandler}
        start={start}
      />
      <Settings
      maxValue={maxValue}
      minValue={minValue}
      onMaxInputValueChangeHandler={onMaxInputValueChangeHandler}
      onMinInputValueChangeHandler={onMinInputValueChangeHandler}
      editMode={editMode}
      error={error}
      onSetClickHandler={onSetClickHandler}
      />
    </div>
  );
};



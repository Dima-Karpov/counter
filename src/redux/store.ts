import { combineReducers, createStore } from 'redux';
import { loadState, saveState } from '../utils/localstorage-utils';
import { counterReducer } from './counter.reducer';

const rootRedusers = combineReducers({
    counter: counterReducer,
});

export const store = createStore(rootRedusers, loadState())

export type AppStateType = ReturnType<typeof rootRedusers>
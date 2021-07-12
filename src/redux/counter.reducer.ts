import { CounterActionTypes } from "../myConst";
import { increaseCountAC,
            resetCountAC,
            handleOnChangeMaxAC,
            handleOnChangeMinAC,
            errorCheckerAC,
            onSetHandlerAC} from "./actionCreators";

const initialState = {
    maxValue: 0, 
    minValue: 0,
    value: 0,
    editMode: false,
    error: false,
    ultimateValue: 0,
    start: true,
};

type InitialStateType = typeof initialState;

export type IncreaseCountAT = ReturnType<typeof increaseCountAC>
    | ReturnType<typeof resetCountAC>
    | ReturnType<typeof handleOnChangeMaxAC>
    | ReturnType<typeof handleOnChangeMinAC>
    | ReturnType<typeof errorCheckerAC>
    | ReturnType<typeof onSetHandlerAC>



export const counterReducer = (state: InitialStateType = initialState, action: IncreaseCountAT): InitialStateType => {
    switch (action.type) {
        case CounterActionTypes.error_check:{
            if (state.maxValue <= state.minValue
                || state.maxValue <= 0
                || state.minValue < 0){
                return { ...state, error: true }
            }else {
                return { ...state, error: false }
            }}
        case CounterActionTypes.inc_counter:{
            return {
                ...state,
                value: state.value + 1,
            }}
        case CounterActionTypes.on_set_handler:{
            return {
                ...state, value: state.minValue, ultimateValue: state.maxValue, editMode: false
            }}
        case CounterActionTypes.reset_counter:{
            return {
                ...state,
                value: state.minValue
            }}
        case CounterActionTypes.handle_on_change_max:{
            return {
                ...state,
                editMode: true, maxValue: action.value, start: false
            }}
        case CounterActionTypes.handle_on_change_min:{
            return {
                ...state,
                editMode: true, minValue: action.value, start: false
            }}
        default:
            return state

    };
};



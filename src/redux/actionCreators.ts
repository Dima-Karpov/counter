import { CounterActionTypes } from "../myConst";

export const increaseCountAC = () => {
    return {
        type: CounterActionTypes.inc_counter,
    } as const
};
export const resetCountAC = () => {
    return {
        type: CounterActionTypes.reset_counter,
    } as const
};

export const handleOnChangeMaxAC = (value: number) => {
    return {
        type: CounterActionTypes.handle_on_change_max,
        value,
    } as const
};
export const handleOnChangeMinAC = (value: number) => {
    return {
        type: CounterActionTypes.handle_on_change_min,
        value,
    } as const
};

export const errorCheckerAC = () => {
    return {
        type: CounterActionTypes.error_check
    } as const
};
export const onSetHandlerAC = () => {
    return {
        type: CounterActionTypes.on_set_handler
    } as const
};

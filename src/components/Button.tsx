import React from "react";
import { MouseEventHandler } from "react";

type ButtonPropsType = {
    name: string
    onClick: MouseEventHandler<HTMLButtonElement>
    disable: boolean
}

export const Button = React.memo((props: ButtonPropsType) => {

    const {
        name,
        onClick,
        disable,
    } = props

    return (
        <button
            disabled={disable}
            onClick={onClick}
        >{name}</button>
    );
});


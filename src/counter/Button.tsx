
type ButtonPropsType = {
    name: string
    onClick: () => void
    disable: boolean
}

export function Button(props: ButtonPropsType) {

    return (
        <button
            className='button'
            disabled={props.disable}
            onClick={props.onClick}
        >{props.name}</button>
    );
}


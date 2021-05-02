
type ButtonPropsType = {
    counter: number
    name: string
    changeCount: () => void
    disable: boolean
}

export function Button(props: ButtonPropsType) {

    return (
        <button className='button'  disabled={props.disable} onClick={props.changeCount} >{props.name}</button>
    );
}


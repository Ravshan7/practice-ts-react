import React, {useRef} from 'react'

interface FormTodoProps {
    addTodo(title: string): void,
}

export const FormTodo: React.FC<FormTodoProps> = props => {
    const ref = useRef<HTMLInputElement>(null);

    // const [value, setValue] = useState<string>('')
    // const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(e.target.value)
    // }

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.addTodo(ref.current!.value)
            ref.current!.value = ''
        }
    }


    return (
        <div className="input-field mt2">
            <input
                type="text"
                id="title"
                ref={ref}
                // value={value}
                // onChange={handlerChange}
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">Введите название дело</label>
        </div>
    )
}
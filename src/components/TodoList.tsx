import React, {MouseEvent} from 'react'
import {TodoInterface} from "../interface/todoInterface";

type TodoListProps = {
    todos: TodoInterface[]
    onChange(id: number): void
    onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onChange, onRemove}) => {

    const removeTodo = (e: MouseEvent, id: number) => {
        e.preventDefault()
        onRemove(id)
    }

    return (
        <ul>
            {todos.length === 0
                ? <p style={{textAlign: 'center'}}>Список пока что пуст!!!</p>
                : todos.map(el => {
                    const classes = ['todo']

                    if (el.checked) {
                        classes.push('activeTodo')
                    }

                    return (
                        <li key={el.id} className={classes.join(' ')}>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={el.checked}
                                    onChange={() => onChange(el.id)}
                                />
                                <span>{el.title}</span>
                                <i className="material-icons red-text" onClick={(e) => removeTodo(e, el.id)}>delete</i>
                            </label>
                        </li>
                    )
                })
            }
        </ul>
    )
}
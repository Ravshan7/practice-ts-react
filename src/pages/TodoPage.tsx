import React, {useEffect, useState} from 'react'
import {TodoInterface} from "../interface/todoInterface";
import {FormTodo} from "../components/FormTodo";
import {TodoList} from "../components/TodoList";

declare var confirm: (text: string) => boolean

export const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState<TodoInterface[]>([])



    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]') as TodoInterface[]
        if (todos) {
            setTodos(todos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const addTodoHandler = (title: string): void => {
        if (title.trim()) {
            const newTodos: TodoInterface = {
                title,
                id: Date.now(),
                checked: false
            }
            setTodos(prev => [newTodos, ...prev])
        } else {
            alert('Поля не должно быть пустым!')
        }

    }

    const changeHandlerTodos = (id: number): void => {
        setTodos(prev => prev.map(el => {
            if (el.id === id) {
                return {
                    ...el,
                    checked: !el.checked
                }
            }
            return el
        }))
    }

    const removeHandlerTodos = (id: number): void => {
        const isActiveRemove = confirm('Вы действительно хотите удалить')
        if (isActiveRemove) {
            setTodos(prev => prev.filter(el => el.id !== id))
        }
    }

    return (
        <>
            <FormTodo addTodo={addTodoHandler}/>
            <TodoList todos={todos} onChange={changeHandlerTodos} onRemove={removeHandlerTodos}/>
        </>
    )
}
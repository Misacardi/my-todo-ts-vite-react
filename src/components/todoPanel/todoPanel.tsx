import React, { useState } from 'react'

import styles from './todoPanel.module.css'
import { Button } from '../button/button'

const DEFAULT_TODO = {
    name: '', 
    description: ''

}

interface IAddTodoPanel {
  mode: 'add'
  addTodo: ({name, description}: Omit<Todo, 'checked' | 'id' >) => void
}
interface IEditTodoPanel {
  mode: 'edit'
  editTodo: Omit<Todo, 'id' | 'checked'>
  changeTodo: ({name, description}: Omit<Todo, 'checked' | 'id' >) => void
}

type TodoPanelProps = IAddTodoPanel | IEditTodoPanel
 

export const TodoPanel: React.FC<TodoPanelProps> = (props) => {
  const isEdit = props.mode === 'edit'
    const [todo, setTodo] = useState(isEdit ? props.editTodo : DEFAULT_TODO)


    const onChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        const {name, value} = e.target
        setTodo({...todo, [name]: value} )
    }


    const onClick = () => {
      const todoItem = {name: todo.name, description: todo.description}
      if(isEdit) {
        return props.changeTodo(todoItem)     }
      props.addTodo(todoItem)
      setTodo(DEFAULT_TODO)
    }


  return (
    <div className={styles.todo_panel_container}>
    <div className={styles.fields_container}>
      <div className={styles.field_container}>
        <label htmlFor='name'>
          <div>Name</div>
          <input autoComplete='off' id='name' value={todo.name} onChange={onChange} name='name' />
        </label>
      </div>
      <div className={styles.field_container}>
        <label htmlFor='description'>
          <div>Description</div>
          <input
            autoComplete='off'
            id='description'
            value={todo.description}
            onChange={onChange}
            name='description'
          />
        </label>
      </div>
    </div>
    <div className={styles.button_container}>
      {!isEdit && (
        <Button color='blue' onClick={onClick}>
          ADD
        </Button>
      )}
      {isEdit && (
        <Button color='orange' onClick={onClick}>
          EDIT
        </Button>
      )}
    </div>
  </div>
  )
}

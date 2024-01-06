import React from 'react'

import styles from './TodoItem.module.css'
import { Button } from '../../button/button'

interface ITodoItemProps {
    todo: Todo,
    checkTask: (id: Todo['id']) => void,
    deleteTask: (id: Todo['id']) => void,
    selectTaskForId: (id: Todo['id']) => void
}

export const TodoItem: React.FC<ITodoItemProps> = ({todo, checkTask, deleteTask, selectTaskForId}) => (
    <div className={styles.todo_item_container}>
    <div>
      <div
        aria-hidden
        style={{opacity: todo.checked ? 0.5 : 1,
        textDecoration: todo.checked ? 'line-through' : 'none'}}
        className={styles.todo_item_title}
        onClick={() => checkTask(todo.id)}
      >
        {todo.name}
      </div>
      <div aria-hidden  className={styles.todo_item_description}>
        {todo.description}
      </div>
    </div>
    <div className={styles.todo_item_button_container}>
      <Button onClick={() => selectTaskForId(todo.id)} color='orange' >
        EDIT
      </Button>
      <Button onClick={() => deleteTask(todo.id)} color='red'>
        DELETE
      </Button>
    </div>
  </div>
  )


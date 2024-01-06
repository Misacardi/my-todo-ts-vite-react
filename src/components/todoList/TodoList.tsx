import React from 'react'
import { TodoItem } from './TodoItem/TodoItem'
import { TodoPanel } from '../todoPanel/todoPanel'


interface ITodoListProps {
    todos: Todo[],
    checkTask: (id: Todo['id']) => void,
    deleteTask: (id: Todo['id']) => void,
    selectTaskForId: (id: Todo['id']) => void,
    listIdForEdit: Todo['id'] | null,
    editTask: ({name, description}: Omit<Todo, 'checked' | 'id' >) => void
}
export const TodoList: React.FC<ITodoListProps> = ({todos, checkTask, deleteTask, selectTaskForId, listIdForEdit, editTask}) => {
   return (
    <div>
        {todos.map(todo =>  {
     
          if (todo.id === listIdForEdit) return <TodoPanel 
          mode='edit'
          changeTodo={editTask}
          editTodo={{name: todo.name, description: todo.description}}/>
          return (
            <TodoItem 
            selectTaskForId={selectTaskForId} 
            deleteTask={deleteTask} 
            checkTask={checkTask} 
            todo={todo}/>
         )
        })}
    </div>
  )
}

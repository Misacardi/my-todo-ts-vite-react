import { useState } from "react";
import styles from "./App.module.css";
import { Header } from "../header/header";
import { TodoPanel } from "../todoPanel/todoPanel";
import { TodoList } from "../todoList/TodoList";

const DEFAULT_TODO_LIST = [
  { id: 1, name: "task 1", description: "description 1", checked: false },
  { id: 2, name: "task 2", description: "description 2", checked: false },
  { id: 3, name: "task 3", description: "description 3 ", checked: true },
];

const App = () => {
  const [list, setList] = useState(DEFAULT_TODO_LIST);
  const [listIdForEdit, setListIdForEdit] = useState<Todo['id'] | null>(null)
  const addTask = ({ name, description }: Omit<Todo, "checked" | "id">) => {
    setList([
      ...list,
      { id: list[list.length - 1].id + 1, description, name, checked: false },
    ]);
  };


  const selectTaskForId = (id: Todo['id']) => {
    setListIdForEdit(id)
  }

  const deleteTask = (id: Todo["id"]) => {
    setList(list.filter((e) => e.id !== id));
  };

  const checkTask = (id: Todo["id"]) => {
    setList(
      list.map((e) => {
        if (e.id === id) {
          return {...e, checked: !e.checked };
        }

        return e;
      })
    );
  };
  const editTask = ({ name, description }: Omit<Todo, "checked" | "id">) => {
    setList(
      list.map((e) => {
        if (e.id === listIdForEdit) {
          return {...e, name, description };
        }

        return e;
      })
    );
    setListIdForEdit(null)
  };



  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header todoCount={list.length} />
        <TodoPanel mode="add" addTodo={addTask} />
        <TodoList listIdForEdit={listIdForEdit} selectTaskForId={selectTaskForId} deleteTask={deleteTask} checkTask={checkTask} todos={list} editTask={editTask} />
      </div>
    </div>
  );
};

export default App;

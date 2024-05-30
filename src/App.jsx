import React from "react";
import Form from "./components/form/Form";
import ToDoList from "./components/todolist/ToDoList";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {
  getAllTodos,
  createTodoItem,
  deleteTodoItem,
  updateTodoItem,
} from "./components/asynkActions/todos";
import {useEffect} from "react";

function App() {
  const dispatch = useDispatch();
  const todoListState = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  function getTodoTasks() {
    return todoListState.filter((task) => !task.isDone);
  }

  function getDoneTasks() {
    return todoListState.filter((task) => task.isDone);
  }

  return (
    <div className="app">
      <div className="content">
        <div className="todo">
          <h3>To-Do List. All tasks</h3>
          <ToDoList
            tdList={todoListState}
            updateIsDone={(el) => dispatch(updateTodoItem(el))}
            deleteTask={(id) => dispatch(deleteTodoItem(id))}
          />
        </div>

        <div className="todo-tasks">
          <h3>To-Do tasks</h3>
          <ToDoList
            tdList={getTodoTasks()}
            updateIsDone={(el) => dispatch(updateTodoItem(el))}
            deleteTask={(id) => dispatch(deleteTodoItem(id))}
          />
        </div>

        <div className="done-tasks">
          <h3>Done tasks</h3>
          <ToDoList
            tdList={getDoneTasks()}
            updateIsDone={(el) => dispatch(updateTodoItem(el))}
            deleteTask={(id) => dispatch(deleteTodoItem(id))}
          />
        </div>
      </div>

      <div className="aside">
        <h3>Add new task</h3>
        <Form onSubmit={(el) => dispatch(createTodoItem(el))} />
        <br />
        <h3>Add ToDos</h3>
      </div>
    </div>
  );
}

export default App;

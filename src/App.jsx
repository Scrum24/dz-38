import React from "react";
import Form from "./components/form/Form";
import ToDoList from "./components/todolist/ToDoList";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "./components/asynkActions/todos";
import {addItem, deleteTask, updateIsDone} from "./components/store/index";

function App() {
  const dispatch = useDispatch();
  const todoListState = useSelector((state) => state);

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
            updateIsDone={(id) => dispatch(updateIsDone(id))}
            deleteTask={(id) => dispatch(deleteTask(id))}
          />
        </div>

        <div className="todo-tasks">
          <h3>To-Do tasks</h3>
          <ToDoList
            tdList={getTodoTasks()}
            updateIsDone={(id) => dispatch(updateIsDone(id))}
            deleteTask={(id) => dispatch(deleteTask(id))}
          />
        </div>

        <div className="done-tasks">
          <h3>Done tasks</h3>
          <ToDoList
            tdList={getDoneTasks()}
            updateIsDone={(id) => dispatch(updateIsDone(id))}
            deleteTask={(id) => dispatch(deleteTask(id))}
          />
        </div>
      </div>

      <div className="aside">
        <h3>Add new task</h3>
        <Form onSubmit={(el) => dispatch(addItem(el))} />
        <br />
        <h3>Add ToDos</h3>
        <button
          onClick={() => dispatch(getTodos())}
          className="btn add-all-todos"
        >
          ADD_ALL_TODOS
        </button>
      </div>
    </div>
  );
}

export default App;

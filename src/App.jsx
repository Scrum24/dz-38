import React from "react";
import Form from "./components/form/Form";
import ToDoList from "./components/todolist/ToDoList";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch();
  const todoListState = useSelector((state) => state);

  function getTodoTasks() {
    return todoListState.filter((task) => task.isDone === false);
  }

  function getDoneTasks() {
    return todoListState.filter((task) => task.isDone === true);
  }

  return (
    <div className="app">
      <div className="content">
        <div className="todo">
          <h3>To-Do List. All tasks</h3>
          <ToDoList
            tdList={todoListState}
            updateIsDone={(id) =>
              dispatch({type: "UPDATE_IS_DONE", payload: {id}})
            }
            deleteTask={(id) => dispatch({type: "DELETE_ITEM", payload: {id}})}
          />
        </div>

        <div className="todo-tasks">
          <h3>To-Do tasks</h3>
          <ToDoList
            tdList={getTodoTasks()}
            updateIsDone={(id) =>
              dispatch({type: "UPDATE_IS_DONE", payload: {id}})
            }
            deleteTask={(id) => dispatch({type: "DELETE_ITEM", payload: {id}})}
          />
        </div>

        <div className="done-tasks">
          <h3>Done tasks</h3>
          <ToDoList
            tdList={getDoneTasks()}
            updateIsDone={(id) =>
              dispatch({type: "UPDATE_IS_DONE", payload: {id}})
            }
            deleteTask={(id) => dispatch({type: "DELETE_ITEM", payload: {id}})}
          />
        </div>
      </div>

      <div className="aside">
        <h3>Add new task</h3>
        <Form onSubmit={(el) => dispatch({type: "ADD_ITEM", payload: el})} />
      </div>
    </div>
  );
}

export default App;

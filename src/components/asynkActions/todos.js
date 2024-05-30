import {getTodos, deleteTask, addItem, updateIsDone} from "../store/index";

export const getAllTodos = () => {
  return (dispatch) => {
    fetch("https://665876835c36170526488f21.mockapi.io/todo-items", {
      method: "GET",
      headers: {"content-type": "application/json"},
    })
      .then((response) => response.json())
      .then((json) => dispatch(getTodos(json)))
      .catch((error) => {
        console.log("GetAllTodos error:", error);
      });
  };
};

export const createTodoItem = (item) => {
  return (dispatch) => {
    fetch("https://665876835c36170526488f21.mockapi.io/todo-items", {
      method: "POST",
      headers: {"content-type": "application/json"},

      body: JSON.stringify({
        title: item.title,
        description: item.description,
        isDone: false,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((item) => {
        dispatch(addItem(item));
      })
      .catch((error) => {
        console.log("CreateTodoItem error:", error);
      });
  };
};

export const updateTodoItem = (el) => {
  return (dispatch) => {
    fetch(`https://665876835c36170526488f21.mockapi.io/todo-items/${el.id}`, {
      method: "PUT",
      headers: {"content-type": "application/json"},
      body: JSON.stringify({isDone: !el.isDone}),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((item) => {
        dispatch(updateIsDone(item));
      })
      .catch((error) => {
        console.log("UpdateTodoItem error:", error);
      });
  };
};

export const deleteTodoItem = (id) => {
  return (dispatch) => {
    fetch(`https://665876835c36170526488f21.mockapi.io/todo-items/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((item) => {
        dispatch(deleteTask(item.id));
      })
      .catch((error) => {
        console.log("DeleteTodoItem error:", error);
      });
  };
};

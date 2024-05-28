import {addAllTodos} from "../store/index";

export const getTodos = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then((response) => response.json())
      .then((json) => dispatch(addAllTodos(json)));
  };
};

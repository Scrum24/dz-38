import {legacy_createStore as createStore, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";

const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const UPDATE_IS_DONE = "UPDATE_IS_DONE";
const GET_ALL_TODOS = "GET_ALL_TODOS";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];

    case DELETE_ITEM:
      return state.filter((el) => el.id !== action.payload.id);

    case UPDATE_IS_DONE:
      const i = state.findIndex((el) => el.id === action.payload.id);
      state[i].isDone = action.payload.isDone;
      return [...state];

    case GET_ALL_TODOS:
      return [...action.payload];

    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));

export const getTodos = (todos) => ({type: GET_ALL_TODOS, payload: todos});
export const addItem = (el) => ({type: ADD_ITEM, payload: el});
export const deleteTask = (id) => ({type: DELETE_ITEM, payload: {id}});
export const updateIsDone = (el) => ({type: UPDATE_IS_DONE, payload: el});

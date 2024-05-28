import {legacy_createStore as createStore, applyMiddleware} from "redux";
import {tdList} from "./data";
import {thunk} from "redux-thunk";

const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const UPDATE_IS_DONE = "UPDATE_IS_DONE";
const ADD_ALL_TODOS = "ADD_ALL_TODOS";

const reducer = (state = tdList, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.payload.title,
          description: action.payload.description,
          isDone: false,
        },
      ];

    case DELETE_ITEM:
      return state.filter((el) => el.id !== action.payload.id);

    case UPDATE_IS_DONE:
      const i = state.findIndex((el) => el.id === action.payload.id);
      state[i].isDone = !state[i].isDone;
      return [...state];

    case ADD_ALL_TODOS:
      const presentToDoIds = state.map((el) => el.id);

      const convertedToDos = action.payload
        .map((el) => ({
          id: `EXT_${el.id}`,
          title: el.title,
          description: "-",
          isDone: el.completed,
        }))
        .filter((el) => !presentToDoIds.includes(el.id));

      return [...state, ...convertedToDos];

    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));

export const addAllTodos = (todos) => ({type: ADD_ALL_TODOS, payload: todos});
export const addItem = (el) => ({type: ADD_ITEM, payload: el});
export const deleteTask = (id) => ({type: DELETE_ITEM, payload: {id}});
export const updateIsDone = (id) => ({type: UPDATE_IS_DONE, payload: {id}});

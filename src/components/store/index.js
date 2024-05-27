import {legacy_createStore as createStore} from "redux";
import {tdList} from "./data";

const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";
const UPDATE_IS_DONE = "UPDATE_IS_DONE";

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

    default:
      return state;
  }
};

export const store = createStore(reducer);

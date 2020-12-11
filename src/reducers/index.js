import { combineReducers } from "redux";

const reducerExample = (defaultState = null, action) => {
  if (action.type === "posts") {
    return action.payload;
  }
  return defaultState;
};

export default combineReducers({
  posts: reducerExample,
});

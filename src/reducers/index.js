import { combineReducers } from "redux";

import getPostReducer from "./getPost";
export default combineReducers({
  posts: getPostReducer,
});

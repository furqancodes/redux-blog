import { combineReducers } from "redux";

import getPostReducer from "./getPost";
import getUserReducer from "./getUser";
export default combineReducers({
  posts: getPostReducer,
  user: getUserReducer,
});

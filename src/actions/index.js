import axios from "axios";
import _ from "lodash";
export const GetPostRequest = () => async (dispatch) => {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({ type: "posts", payload: resp.data });
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
export const GetUserRequest = (id) => async (dispatch) => {
  try {
    const users = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    dispatch({ type: "USERS", payload: users.data });
  } catch (error) {
    console.log(error);
  }
};
export const GetPostThenUser = () => async (dispatch, getState) => {
  try {
    await dispatch(GetPostRequest());
    const userId = _.uniq(_.map(getState().posts, "userId"));
    userId.forEach((id) => dispatch(GetUserRequest(id)));
  } catch (error) {
    console.log(error);
  }
};

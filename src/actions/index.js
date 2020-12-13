import axios from "axios";
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

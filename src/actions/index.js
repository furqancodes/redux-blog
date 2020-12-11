import axios from "axios";
const sendGetRequest = () => async (dispatch) => {
  try {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({ type: "posts", payload: resp.data });
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export default sendGetRequest;
// try {
//   const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
//   return { type: "posts", payload: resp.data };
// } catch (err) {
//   // Handle Error Here
//   console.error(err);
// }

const getPostReducer = (state = null, action) => {
  if (action.type === "posts") {
    return action.payload;
  }
  return state;
};
export default getPostReducer;

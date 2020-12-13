const getUserReducer = (state = [], action) => {
  if (action.type === "USERS") {
    return [...state, action.payload];
  }
  return state;
};
export default getUserReducer;

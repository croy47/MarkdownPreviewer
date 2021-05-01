const reducer = (state, action) => {
  if (action.type === "BEING_EDITED") {
    return { ...state, value: action.payload };
  }

  if (action.type === "CLEAR") {
    return { ...state, value: "" };
  }

  return state;
};

export default reducer;

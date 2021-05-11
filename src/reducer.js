const reducer = (state, action) => {
  if (action.type === "BEING_EDITED") {
    return { ...state, value: action.payload };
  }

  if (action.type === "CLEAR") {
    return { ...state, value: "" };
  }

  if (action.type === "TOGGLE_EDITOR_SIZE") {
    return { ...state, editorMaximized: !state.editorMaximized };
  }

  if (action.type === "TOGGLE_PREVIEWER_SIZE") {
    return { ...state, previewerMaximized: !state.previewerMaximized };
  }

  return state;
};

export default reducer;

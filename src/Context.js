import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { placeholder } from "./placeholder";

const AppContext = React.createContext();
//Provider, Consumer

let defaultVal = placeholder;

const initialState = {
  value: defaultVal,
  editorMaxmized: false,
  previewerMaximized: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (editedValue) => {
    dispatch({ type: "BEING_EDITED", payload: editedValue });
  };

  const clearEditor = () => {
    dispatch({ type: "CLEAR" });
  };

  const toggleEditorSize = () => {
    dispatch({ type: "TOGGLE_EDITOR_SIZE" });
  };

  const togglePreviewerSize = () => {
    dispatch({ type: "TOGGLE_PREVIEWER_SIZE" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        clearEditor,
        toggleEditorSize,
        togglePreviewerSize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { placeholder } from "./placeholder";

const AppContext = React.createContext();
//Provider, Consumer

let defaultVal = placeholder;

const initialState = {
  value: defaultVal,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (editedValue) => {
    dispatch({ type: "BEING_EDITED", payload: editedValue });
  };

  const clearEditor = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <AppContext.Provider value={{ ...state, handleChange, clearEditor }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

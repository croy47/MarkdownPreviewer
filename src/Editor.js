import React from "react";
import { useGlobalContext } from "./Context";

export const Editor = () => {
  let { value, handleChange, clearEditor } = useGlobalContext();

  return (
    <div id="editorWrapper">
      <header>
        <p>Editor</p>
        <button onClick={clearEditor}>Clear</button>
      </header>
      <textarea
        className="text"
        id="editor"
        onChange={(e) => handleChange(e.target.value)}
        value={value}
        placeholder="Enter your Markdown Here...."
      ></textarea>
    </div>
  );
};

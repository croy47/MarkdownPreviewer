import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";
import { CgMaximizeAlt } from "react-icons/cg";
import { FiMaximize2 } from "react-icons/fi";

export const Editor = () => {
  let {
    editorMaximized,
    value,
    handleChange,
    clearEditor,
    toggleEditorSize,
  } = useGlobalContext();

  useEffect(() => {
    // console.log(editorMaximized);
    let editorWrapper = document.getElementById("editorWrapper");
    let editor = document.getElementById("editor");
    let previewer = document.getElementById("previewWrapper");
    if (editorMaximized) {
      previewer.classList.add("hide");
      editorWrapper.classList.add("show");
      editor.style.width = "96vw";
    } else {
      previewer.classList.remove("hide");
      editorWrapper.classList.remove("show");
      editor.style.width = "45vw";
    }
  }, [editorMaximized]);

  return (
    <div id="editorWrapper">
      <header>
        <p>Editor</p>
        <button onClick={clearEditor}>Clear</button>
        <button onClick={toggleEditorSize}>
          {" "}
          {editorMaximized ? <FiMaximize2 /> : <CgMaximizeAlt />}
        </button>
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

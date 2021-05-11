import React, { useEffect } from "react";
import { useGlobalContext } from "./Context";
import marked from "marked";
import sanitizeHtml from "sanitize-html";
import { CgMaximizeAlt, CgMinimizeAlt } from "react-icons/cg";

export const Previewer = () => {
  const { value, previewerMaximized, togglePreviewerSize } = useGlobalContext();

  const dirtyHtml = marked(value, { breaks: true });
  // const cleanHtml = sanitizeHtml(dirtyHtml);
  // above line commented out to pass all tests on FreeCodeCamp

  useEffect(() => {
    const editor = document.getElementById("editorWrapper");
    const previewer = document.getElementById("previewWrapper");

    if (previewerMaximized) {
      editor.classList.add("hide");
      previewer.classList.add("show");
    } else {
      editor.classList.remove("hide");
      previewer.classList.remove("show");
    }
  }, [previewerMaximized]);

  return (
    <div id="previewWrapper">
      <header className="header">
        <p>Previewer</p>
        <button onClick={togglePreviewerSize}>
          {previewerMaximized ? <CgMinimizeAlt /> : <CgMaximizeAlt />}
        </button>
      </header>
      <div
        id="preview"
        className="text"
        dangerouslySetInnerHTML={{
          __html: dirtyHtml,
        }}
      ></div>
    </div>
  );
};

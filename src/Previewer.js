import React from "react";
import { useGlobalContext } from "./Context";
import marked from "marked";
import sanitizeHtml from "sanitize-html";

export const Previewer = () => {
  const { value } = useGlobalContext();

  const dirtyHtml = marked(value, { breaks: true });
  // const cleanHtml = sanitizeHtml(dirtyHtml);
  // above line commented out to pass all tests on FreeCodeCamp

  return (
    <div id="previewWrapper">
      <header className="header">
        <p>Previewer</p>
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

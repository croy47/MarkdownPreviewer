import React from "react";
// import { useGlobalContext } from "./Context";
import { Editor } from "./Editor";
import { Previewer } from "./Previewer";

function App() {
  return (
    <div>
      <div class="details">
        <p>
          <b>
            Designed by
            <a href="mailto:croy4744@gmail.com"> Chandan Roy </a>
            on 01.05. 2021
          </b>
        </p>
        <p>
          <a href="https://github.com/croy47/MarkdownPreviewer" target="_blank">
            {" "}
            Source Code
          </a>
        </p>
      </div>
      <main>
        <Editor />
        <Previewer />
      </main>
    </div>
  );
}

export default App;

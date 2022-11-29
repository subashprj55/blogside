import React, { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const TextEditor = ({ body, setBody }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false,
      buttons: ["bold", "italic", "underline"],
    }),
    []
  );

  return (
    <>
      <JoditEditor
        ref={editor}
        value={body}
        tabIndex={2} // tabIndex of textarea
        onChange={(newContent) => {
          setBody(newContent);
        }}
        config={config}
      />
    </>
  );
};

// const TextEditor = ({ body, setBody }) => {
//   const [editorState, setEditorState] = React.useState(() =>
//     EditorState.createEmpty()
//   );

//   return (
//     <>
//       <h1>hello</h1>
//       <Editor editorState={editorState} onChange={setEditorState} />
//     </>
//   );
// };

export default TextEditor;

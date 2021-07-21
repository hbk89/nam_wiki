import React, { useState, useRef } from "react";
import axios from "axios";

import { Editor } from "@toast-ui/react-editor";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import "@toast-ui/editor/dist/toastui-editor.css";

const New = ({ match, history }) => {
  const [brief, setBrief] = useState("");
  const editorRef = useRef(null);

  const handleEditorChange = (value, event) => {
    console.log("editor change");
  };

  const saveWiki = () => {
    axios
      .post(`http://localhost:8080/api/wiki`, {
        name: match.params.name,
        brief: brief,
        def: editorRef.current.getInstance().getMarkdown(),
      })
      .then((res) => {
        console.log(res);
        history.push(`/wiki/${res.data._id}`)
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>새 등록: {match.params.name}</h1>
      <span>
        한줄 요약 :
        <input
          type="text"
          value={brief}
          onChange={(e) => {
            setBrief(e.target.value);
          }}
        />
      </span>
      <Editor
        initialValue=""
        previewStyle="vertical"
        height="800px"
        placeholder="남의 위키를 적어주세요."
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
        plugins={[tableMergedCell]}
        onChange={handleEditorChange}
      />
      <button onClick={saveWiki}>등록</button>
    </div>
  );
};

export default New;

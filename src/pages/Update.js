import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

import { Editor } from "@toast-ui/react-editor";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import "@toast-ui/editor/dist/toastui-editor.css";

const Update = ({ match, history }) => {
  const [name, setName] = useState("");
  const [brief, setBrief] = useState("");
  const [editorRef] = useState(useRef(null));

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/wiki/${match.params.id}`)
      .then((res) => {
        setName(res.data.name);
        setBrief(res.data.brief);
        editorRef.current.getInstance().setMarkdown(res.data.def);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEditorChange = (value, event) => {
    console.log("editor change");
  };

  const updateWiki = () => {
    axios
      .put(`http://localhost:8080/api/wiki/${match.params.id}`, {
        brief: brief,
        def: editorRef.current.getInstance().getMarkdown(),
      })
      .then((res) => {
        console.log(res);
        history.push(`/wiki/${match.params.id}`)
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <div>
      <h1>편집: {name}</h1>
      <span>한줄 요약 : 
      <input
        type="text"
        value={brief}
        onChange={(e)=>{setBrief(e.target.value)}}
      />
      </span>
      <Editor
        initialValue=""
        previewStyle="vertical"
        height="800px"
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
        plugins={[tableMergedCell]}
        onChange={handleEditorChange}
      />
      <button onClick={updateWiki}>수정</button>
    </div>
  );
};

export default Update;

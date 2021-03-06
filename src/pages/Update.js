import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

import { Editor } from "@toast-ui/react-editor";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import "@toast-ui/editor/dist/toastui-editor.css";

import UpdateModal from "../components/modals/UpdateModal";
import DeleteModal from "../components/modals/DeleteModal";


const Update = (props) => {
  const [name, setName] = useState("");
  const [brief, setBrief] = useState("");
  const [editorRef] = useState(useRef(null));

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/wiki/${props.match.params.id}`)
      .then((res) => {
        setName(res.data.name);
        setBrief(res.data.brief);
        editorRef.current.getInstance().setMarkdown(res.data.def);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEditorChange = (value, event) => {
    // 중간중간 저장 로직 필요
    console.log("editor change");
  };

  return (
    <div>
      <h1>편집: {name}</h1>
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
        initialEditType="markdown"
        useCommandShortcut={true}
        ref={editorRef}
        plugins={[tableMergedCell]}
        onChange={handleEditorChange}
      />
      <UpdateModal info={props.info} id={props.match.params.id} brief={brief} editorRef={editorRef}/>
      <DeleteModal id={props.match.params.id}/>
    </div>
  );
};

export default Update;

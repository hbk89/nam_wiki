import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { Viewer } from "@toast-ui/react-editor";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";
import "@toast-ui/editor/dist/toastui-editor.css";

const Wiki = ({ match }) => {
  const [wiki, setWiki] = useState({
    name: "",
    brief: "",
    def: "",
  });
  const [viewerRef] = useState(useRef(null));

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/wiki/${match.params.id}`)
      .then((res) => {
        setWiki(res.data);
        viewerRef.current.getInstance().setMarkdown(res.data.def);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>{wiki.name}</h1>
      <h2>한줄 요약: {wiki.brief}</h2>
      <Viewer 
        initialValue=""
        previewStyle="vertical"
        ref={viewerRef}
        plugins={[tableMergedCell]} 
      />
      <button><Link to={`/update/${wiki._id}`} style={{ color: "#000000" }}>편집</Link></button>
    </div>
  );
};

export default Wiki;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import { Viewer } from "@toast-ui/react-editor";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";

const Wiki = ({ match }) => {
  const [wiki, setWiki] = useState({
    name: "",
    brief: "",
    def: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/wiki/${match.params.id}`)
      .then((res) => {
        setWiki(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>{wiki.name}</h1>
      <button>
        <Link to={`/update/${wiki._id}`} style={{color:"#000000"}}>편집</Link>
      </button>
      <h2>한줄 요약: {wiki.brief}</h2>
          <Viewer initialValue={wiki.def} plugins={[tableMergedCell]} />
    </div>
  );
};

export default Wiki;

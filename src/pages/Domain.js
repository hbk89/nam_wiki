import React, { useEffect, useState } from "react";

import axios from "axios";
import { Viewer } from "@toast-ui/react-editor";
import tableMergedCell from "@toast-ui/editor-plugin-table-merged-cell";

const Domain = ({ match }) => {
  const [domain, setDomain] = useState({
    name: "",
    list: [{id: "", def: ""}]
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/domain/${match.params.name}`)
      .then((res) => {
        setDomain(res.data);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <div>
      <h1>{match.params.name}</h1>
        {domain.list.map((item) => (
          <div key={item.id}>
          <span>{item.id}</span>
          <button>편집</button>
          <Viewer initialValue={item.def} plugins={[tableMergedCell]}/>
          </div>
        ))}
    </div>
  );
};

export default Domain;

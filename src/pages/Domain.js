import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const Domain = ({ match, history }) => {
  const [domain, setDomain] = useState({
    list: []
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/domain/${match.params.name}`)
      .then((res) => {
        if(res.data)  setDomain(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>{match.params.name}</h1>
      <button onClick={()=>history.push(`/new/${match.params.name}`)}>새로 만들기</button>
        {domain.list.map((item) => (
          <div key={item.id}>
          <button><Link to= {`/wiki/${item.id}`} style={{color:'black'}}>{item.brief}</Link></button>
          {/* <button onClick={()=>history.push(`/update/${item.id}`)}>편집</button> */}
          </div>
        ))}
    </div>
  );
};

export default Domain;

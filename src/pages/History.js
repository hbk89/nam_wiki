import React, { useEffect, useState } from "react";
import axios from "axios";

const History = (props) => {
  const [name, setName] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/wiki/${props.match.params.id}`)
      .then((res) => {
        setName(res.data.name);
        setHistory(res.data.editLogs);
      })
      .catch((err) => console.log(err));
  }, []);

  const goToPast = (date) => {
    console.log(date);
  }

  return (
    <div>
      <h1>{name} (역사)</h1>
      {history.map((item) => (
        <div key={item._id} onClick ={() => goToPast(item.date)}>
        <span>{item.date} {item.editType} {item.user.name} </span>
        </div>
      ))}
    </div>
  );
};

export default History;

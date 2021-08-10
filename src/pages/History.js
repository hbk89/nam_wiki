import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  const goToPast = (wiki) => {
    console.log(wiki);
  };

  return (
    <div>
      <h1>{name} (역사)</h1>
      {history.map((item) => (
        <div key={item._id} onClick={() => goToPast(item)}>
          <span>
            {item.date}(
            <Link
              to={{
                pathname: `/wiki/${props.match.params.id}/past`,
                state: {
                  name: name,
                  brief: item.brief,
                  def: item.def,
                },
              }}
              style={{ color: "#0275d8" }}
            >
              보기
            </Link>
            | <button>되돌리기</button> ){item.editType} {item.user.name}{" "}
          </span>
        </div>
      ))}
    </div>
  );
};

export default History;

import React, { useEffect, useState } from "react";
import Section from "../components/Section/Section";

import axios from "axios";

const About = ({ match }) => {
  const [domainList, setDomainList] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/domainList/${match.params.name}`)
      .then((res) => {
        setDomainList(res.data);
      })
      .catch((err) => console.log(err));
  },[]);

  return (
    <div className="App">
      <Section name = {match.params.name} domainList={domainList} />
      {/* <div>{domainList.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      </div> */}
    </div>
  );
};

export default About;

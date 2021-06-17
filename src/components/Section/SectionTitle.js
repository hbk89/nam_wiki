import React from "react";
import {Link} from "react-router-dom"

const SectionTitle = (props) => {
  return (
    <div>
      <h1><a style={{color:"black"}}>{props.name}</a></h1>
      <div className="section-subtitle">
          <div className = "section-subtitle-item">
            <Link to={`/edit/${props.name}`} style={{color:"#000000"}}>새 등록</Link>
            </div>
      </div>
    </div>
  );
};
export default SectionTitle;

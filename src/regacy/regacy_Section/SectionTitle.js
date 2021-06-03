import React from "react";

const SectionTitle = (props) => {
  return (
    <div>
      <h1><a style={{color:"black"}}>{props.name}</a></h1>
      <div className="section-subtitle">
          <a className = "section-subtitle-item">편집</a>
      </div>
    </div>
  );
};
export default SectionTitle;

import React from "react";
import SectionIndexItem from "./SectionIndexItem";

const SectionIndexList = (props) => {
  return (
    <div className="section-index-list">
      <div className="section-index-indent">
        {props.index.map((item) => (
          <SectionIndexItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default SectionIndexList;

import React from "react";

const SectionIndexItem = (props) => {
  return (
    <div>
      <span
        onClick={() => {
          document
            .getElementById(`${props.head}`)
            .scrollIntoView({ behavior: "smooth" });
        }}
        style={{ cursor: "pointer", color: "#0275d8"}}
      >
        {props.id}. {""}
      </span>
      <span>{props.head}</span>
    </div>
  );
};
export default SectionIndexItem;

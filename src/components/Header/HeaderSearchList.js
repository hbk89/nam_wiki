import React from "react";
import { Observer } from "mobx-react-lite";

const HeaderSearchList = (props) => {
  return (
        <div>
            {props.searchList.map(item=> <div key={item._id}>{item.profile.name}</div>)}
        </div>

   );
};

export default HeaderSearchList;

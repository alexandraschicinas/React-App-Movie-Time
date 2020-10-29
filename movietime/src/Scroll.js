import React from "react";
const Scroll = (props) => {
  return (
    <div
      style={{ overflowY: "auto", border: "1px solid grey", height: "600px" }}
    >
      {props.children}
    </div>
  );
};
export default Scroll;
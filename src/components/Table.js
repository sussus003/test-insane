import React from "react";
import Nav from "./Nav";
function Table() {
  return (
    <>
      <Nav />
      <div className="left-side">
        <h1 style={{ color: "white" }}>Hi User1</h1>
      </div>
      <div className="right-side">
        <h1>Table</h1>
      </div>
    </>
  );
}
export default Table;

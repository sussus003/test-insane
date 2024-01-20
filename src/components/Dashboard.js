import React from "react";
import Nav from "./Nav";
import "../App.css";
function Dashboard() {
  return (
    <>
      <Nav />
      
        <div className="left-side">
          <h1 style={{color:"white"}}>Hi User1</h1>
        </div>
        <div className="right-side">
          <h1>Dashboard</h1>
        </div>
      
    </>
  );
}

export default Dashboard;

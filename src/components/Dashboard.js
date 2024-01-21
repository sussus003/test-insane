import React from "react";
import Nav from "./Nav";
import "../App.css";
function Dashboard() {
  return (
    <>
      <Nav />
      
        <div className="left-side ">
    
          <div className="card-container">ชลบุรี</div>
          <div className="card-container">ฉะเทริงเทรา</div>
          <div className="card-container">ระยอง</div>
          
        </div>
        <div className="right-side">
          <h1>Dashboard</h1>
        </div>
      
    </>
  );
}

export default Dashboard;

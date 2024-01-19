import React from "react";
import { Link } from "react-router-dom";
import Banner from '../img/Banner.png';
function Nav() {
  return (
    <>
     
      {/* <img  src={Banner} alt="bg-banner"/> */}
      <div className="bg-banner" ></div>
      
      <nav>
        <ul>
          <Link to="/dashboard" className="zero-Nav">EEC<span className="text-nav-blur">Dashboard</span> </Link>
          <Link to="/dashboard" className="first-Nav">DASHBOARD</Link>
          <Link to="/map">MAP</Link>
          <Link to="/table">OD TABLE</Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;

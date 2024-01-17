import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <ul>
          <Link to="./dashboard">DASHBOARD</Link>
          <Link to="./map">MAP</Link>
          <Link to="./table">OD TABLE</Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;

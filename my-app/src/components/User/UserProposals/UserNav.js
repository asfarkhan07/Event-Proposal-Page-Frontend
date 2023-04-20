import React from "react";
import "./Userprop.css";
import { Link } from "react-router-dom";

function UserNav() {
  return (
    <div className="nav">
      <div className="venlogo">
        <b>LOGO</b>
      </div>
      <div className="name">
        <b>User Name</b>
      </div>
      <div class="dropdown">
        <div className="imgven"></div>
        <div class="dropdown-content">
          <Link to="/User">Log Out</Link>
        </div>
      </div>
    </div>
  );
}

export default UserNav;
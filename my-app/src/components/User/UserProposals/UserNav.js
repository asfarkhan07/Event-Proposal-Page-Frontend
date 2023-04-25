import React from "react";
import "./Userprop.css";
import { Link } from "react-router-dom";

function UserNav({logout}) {
  return (
    <div className="nav">
      <div className="venlogo">
        <b>LOGO</b>
      </div>
      <div className="name">
        <b>{document.cookie.split("=")[1]}</b>
      </div>
      <div class="dropdown">
        <div className="imgven"></div>
        <div class="dropdown-content">
          <Link onClick={logout} to="/User">Log Out</Link>
        </div>
      </div>
    </div>
  );
}

export default UserNav;
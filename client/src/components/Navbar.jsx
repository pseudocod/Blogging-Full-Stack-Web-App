import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Logo from "../images/Logo.png";
import { AuthContext } from "../context/authContext.jsx";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} className="logo" alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className="link" to="/?cat=romania">
            <h6>ROMANIA</h6>
          </Link>
          <Link className="link" to="/?cat=anglia">
            <h6>ANGLIA</h6>
          </Link>
          <Link className="link" to="/?cat=spania">
            <h6>SPANIA</h6>
          </Link>
          <Link className="link" to="/?cat=italia">
            <h6>ITALIA</h6>
          </Link>
          <Link className="link" to="/?cat=germania">
            <h6>GERMANIA</h6>
          </Link>
          <Link className="link" to="/?cat=franta">
            <h6>FRANTA</h6>
          </Link>
          <span>{currentUser?.username}</span>
          {currentUser ? (
            <span onClick={logout}>Logout</span>
          ) : (
            <Link className="link" to="/login">
              Login
            </Link>
          )}
          <span className="write">
            <Link className="link" to="/write">
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

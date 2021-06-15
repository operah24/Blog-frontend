import React, { useState, useContext } from "react";
import "../styles/Nav.css";
import { faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";
import { NavLink } from "react-router-dom";
import AuthContext from "../utils/userContext";

const Nav = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [toggleMenu, setToggleMenu] = useState(true);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (toggleMenu) {
      setToggleMenu(false);
      setShow(true);
    } else {
      setToggleMenu(true);
      setShow(false);
    }
  };
  return (
    <div className="nav">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/ddh4kd4ab/image/upload/v1616667613/Free_Sample_By_Wix_z2hsec.jpg"
          alt="logo"
        />
        <div>
          <input type="text" placeholder="search for favourite post" />
        </div>
      </div>

      <ul className="links" id={show ? "show-menu" : "hide-menu"}>
        <li>
          <NavLink exact to="/home">
            <Button name="Home" className="login-btn" />
          </NavLink>
        </li>
        {state.isAuth ? (
          <>
            <li>
              <NavLink to="/add-post">
                <Button name="Add Post" className="login-btn" />
              </NavLink>
            </li>
            <Button
              name="Log Out"
              className="login-btn"
              onClick={() => dispatch({ type: "logout" })}
            />
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">
                <Button name="Login" className="login-btn" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/register">
                <Button name="Create account" className="register-btn" />
              </NavLink>
            </li>
          </>
        )}
      </ul>
      <FontAwesomeIcon
        icon={toggleMenu ? faBars : faTimes}
        onClick={handleClick}
        className="nav-icon"
      />
    </div>
  );
};

export default Nav;

import React, { useState } from 'react';
import '../styles/Nav.css';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [show, setShow] = useState(false);

  const handleClick = () => {
    if (toggleMenu) {
      setToggleMenu(false);
      setShow(true)
    } else {
      setToggleMenu(true);
      setShow(false)
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
          <NavLink to="/login">
            <Button name="Login" className="login-btn" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/register">
            <Button name="Create account" className="register-btn" />
          </NavLink>
        </li>
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

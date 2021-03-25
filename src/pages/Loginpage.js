import React from 'react';
import Login from '../components/Login';
import { NavLink } from 'react-router-dom';
function Loginpage() {
  return (
    <div>
      <div className="form-cont">
        <h5>Welcome to Banta Blog !</h5>
        <Login />
        <h6>
          Not registered, <NavLink to="/register">register here</NavLink>
        </h6>
      </div>
    </div>
  );
}

export default Loginpage;

import React from 'react';
import '../styles/Register.css';
import Form from '../components/Form';
import { NavLink } from 'react-router-dom';

function Register() {
  return (
    <div className="form-cont">
      <h5>Welcome to Banta Blog !</h5>
      <Form />
      <h6>
        Already registered, <NavLink to="/login">login here</NavLink>
      </h6>
    </div>
  );
}

export default Register;

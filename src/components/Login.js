import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function Login({ name, email, password, handleSubmit, handleChange }) {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="Email"
        value={email}
        label="Email"
        placeholder="Email"
        handleChange={handleChange}
      />
      <div className="pass-wrapper">
        <Input
          type={passwordShown ? 'text' : 'password'}
          name="Password"
          value={password}
          label="Password"
          placeholder="Password"
          handleChange={handleChange}
        />
        <FontAwesomeIcon
          icon={faEye}
          className="pass-icon"
          onClick={togglePasswordVisibility}
        />
      </div>
      <center>
        <Button name="Login" classname="register-btn" type="submit" />
      </center>
    </form>
  );
}

export default Login;

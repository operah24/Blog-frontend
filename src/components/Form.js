import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

function Form({ name, email, password, handleSubmit, handleChange }) {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        value={name}
        label="Name"
        placeholder="Name"
        handleChange={handleChange}
      />
      <Input
        type="text"
        name="email"
        value={email}
        label="Email"
        placeholder="Email"
        handleChange={handleChange}
      />
      <div className="pass-wrapper">
        <Input
          type={passwordShown ? 'text' : 'password'}
          name="password"
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
        <Button name="Register" classname="register-btn" type="submit" />
      </center>
    </form>
  );
}

export default Form;

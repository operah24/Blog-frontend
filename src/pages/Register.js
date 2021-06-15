import React, {useState, useContext} from 'react';
import '../styles/Register.css';
import Form from '../components/Form';
import { NavLink, Redirect } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../utils/userContext';

function Register() {
  const {state, dispatch} = useContext(AuthContext)
  const [inputs, setInputs] = useState({
    name:"",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerData = {
      name:inputs.name,
      email: inputs.email,
      password: inputs.password,
    };
    dispatch({type:"loading"})
    const url = "https://blog-opeyemi.herokuapp.com/api/v1/auth/register";
    try {
      const { data } = await axios.post(url, registerData);
      dispatch({type: "register_successful", payload:data})
    } catch (error) {
      if (error && error.response) {
        console.log(error.response.data);
        dispatch({type:"register_fail"})
      }
    }
  };
  if (state.isAuth) {
    return <Redirect to ="/dashboard" />
  }
  return (
    <div className="form-cont">
      <h5>Welcome to Banta Blog !</h5>
      <Form name={inputs.name} email={inputs.email} password={inputs.password} handleChange={handleChange} handleSubmit={ handleSubmit}/>
      <h6>
        Already registered, <NavLink to="/login">login here</NavLink>
      </h6>
    </div>
  );
}

export default Register;

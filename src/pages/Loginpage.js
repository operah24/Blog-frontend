import React, {useState, useContext} from "react";
import Login from "../components/Login";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import AuthContext from '../utils/userContext';

function Loginpage(props) {
  const { state, dispatch } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email: inputs.email,
      password: inputs.password,
    };
    dispatch({type:"loading"})
    const url = "https://blog-opeyemi.herokuapp.com/api/v1/auth/login";
    try {
      const { data: {data } } = await axios.post(url, loginData);
      dispatch({type:"login_successful", payload:data})

    } catch (error) {
      if (error && error.response) {
        console.log(error.response.data);
        dispatch({type:"login_fail"})
      }
    }
  };
  const query = new URLSearchParams(props.location.search);
  const next = query.get("next");
  console.log(next);
  if (state.isAuth) {
    return <Redirect to ={next === null ? "/" : `/${next}`} />
  }
  return (
    <div>
      <div className="form-cont">
        <h5>Welcome to Banta Blog !</h5>
        <Login
          email={inputs.email}
          password={inputs.password}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <h6>
          Not registered, <NavLink to="/register">register here</NavLink>
        </h6>
      </div>
    </div>
  );
}

export default Loginpage;

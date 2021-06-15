import './App.css';
import Nav from '../src/components/Nav';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Loginpage';
import Register from './pages/Register';
import AuthContext from './utils/userContext';
import { useReducer, useEffect } from 'react';
import { initialState, userReducer } from './utils/reducer';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './utils/privateRoute';
import AddPost from './pages/AddPost';
import axios from 'axios';

function App() {
  const [state, dispatch] = useReducer(userReducer, initialState);
  useEffect(() => {
    const fetchUser = async () => {
      const url = "https://blog-opeyemi.herokuapp.com/api/v1/auth/me";
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem("token")
          }
        }
        const { data: { data } } = await axios.get(url, config);
        dispatch({ type: "fetchUser_successful", payload: data });
        console.log(data);
      } catch (error) {
        if (error && error.response) {
          dispatch({ type: "fetchUser_fail" });
          console.log(error.response.data);
        }
        console.log(error);
      }
    };
    fetchUser();
  }, []);
  return (
    <AuthContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} next={"dashboard"} />
            <PrivateRoute path="/add-post" component={AddPost} next={"add-post"} />
            
        </Switch>
      </div>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;

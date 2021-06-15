import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthContext from './userContext';

const PrivateRoute = ({ component: Component, rest, next }) => {
    const {state} = useContext(AuthContext)
  return (
      <Route
          {...rest}
          render={(props) => {
          if (!state.isAuth) {
                return <Redirect to={`/login?next=${next}`} />
          }
          return <Component {...props} />
    }} />
  );
}

export default PrivateRoute;

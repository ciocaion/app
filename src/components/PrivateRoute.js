import {
    onAuthStateChanged,
  } from "firebase/auth";
import { Route, Redirect } from 'react-router-dom';
import { useState } from "react";
import { auth } from "../firebase";

const PrivateRoute = ({ children, ...rest }) => {
    const [user, setUser] = useState({});
      
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
  return (
    <Route
      {...rest}
      render={() => (user ? children : <Redirect to="/login" />)}
    ></Route>
  );
};

export default PrivateRoute;
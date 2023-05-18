import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'

interface PrivateRouteProps{
  children: React.ReactElement;
}

const PrivateRoute = ({children}:PrivateRouteProps) => {
  const user = useSelector((state:any) => state.user)
  const isAuthenticated = () => {
    let userIsAuthenticated = false
    if(user && user.emailVerified){
      userIsAuthenticated = true
    }
    return userIsAuthenticated
  }
  if (isAuthenticated()) {
    return children
  } else {
    return <Navigate to="/" state={{from:location}}/>
  }
};

export default PrivateRoute;
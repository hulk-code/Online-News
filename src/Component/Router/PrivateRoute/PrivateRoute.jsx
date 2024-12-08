import React, { useContext } from 'react';
import { AuthContext } from '../../AuthContext/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const pathName=useLocation()
    const{user , loading}=useContext(AuthContext)
    if(loading){
       return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
           return children     
    }
    return <>
    <Navigate state={pathName.pathname} to='/login'  ></Navigate>
    </>
};

export default PrivateRoute;
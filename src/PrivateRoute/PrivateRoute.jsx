import React, { useContext } from 'react';
import { UserContext } from '../Context/Auth_Context';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(UserContext);

    if(loading){
        return <span className="loading mx-auto loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoute;
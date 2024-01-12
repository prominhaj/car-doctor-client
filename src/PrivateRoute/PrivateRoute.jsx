import React, { useContext } from 'react';
import { UserContext } from '../Context/Auth_Context';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(UserContext);
    const location = useLocation();

    if(loading){
        return <span className="loading mx-auto loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
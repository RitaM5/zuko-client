import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import usePhotographer from '../hooks/usePhotographer';


const PhotographerRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isPhotographer, isPhotographerLoading] = usePhotographer();
    const location = useLocation();

    if(loading || isPhotographerLoading){
        return <progress className="progress w-56"></progress>
    }

    if (user && isPhotographer) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default PhotographerRoute;
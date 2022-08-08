import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth';


export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    const { pathname, search } = useLocation();
    
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath );
    

    return (logged)
        ? children // muestro el hijo
        : <Navigate to="/login" /> // en caso contrario, saco al usuario
}

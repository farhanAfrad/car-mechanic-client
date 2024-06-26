
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {loader,user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);
    if(loader){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children;
    }
    
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;
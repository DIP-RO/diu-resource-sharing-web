import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';


const PrivateRoute = ({children}) => {
    const {user ,loading} = useContext(AuthContext);
    if (user && user.uid) {
        return children;
    }
    if (loading) {
        return <div>Loading...</div>
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;

import Spinner from '../Components/Spinner';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth() || {};
    const location = useLocation();

    if (loading) {
        return <Spinner/>
    }
    if (user) {
        return children
    }
    return <Navigate state={location.pathname} to={`/signIn`} replace />
};

export default ProtectedRoute; 
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
    
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    console.log(isAuth);

    return (
        isAuth ? <Outlet /> : <Navigate to ="/login" />
    );
    
};

export default PrivateRoute;
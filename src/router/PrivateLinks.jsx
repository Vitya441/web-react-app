import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import DefaultNavigation from "./DefaultNavigation";


// Если пользователь Авторизован, то не показывать ему кнопки с авторизацией и регистрацией
// Default navigation - login, register, home
function PrivateLinks() {

    const isAuth = useSelector(state => state.auth.isAuthenticated);


    return (
        isAuth ? <></> : <DefaultNavigation />   
    );
}

export default PrivateLinks;
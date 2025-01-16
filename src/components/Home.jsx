import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import ServicesList from './ServicesList';
import ShowService from './ShowService';
import AddServiceForm from './AddServiceForm';
import Registration from './Registration';
import AdminAuthNavigation from '../router/AdminAuthNavigation';
import UserAuthNavigation from '../router/UserAuthNavigation';
import { logout } from '../store/authSlice';


function Home() {

    const appointments = useSelector(state => state.appointments);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = useSelector(state => state.auth.user);
    const isAuth = useSelector(state => state.auth.isAuthenticated);

    const userRole = user.role;
    console.log("Роль пользователя: ", userRole);

    const handleLogout = () => {
        dispatch(logout());
    }


    return (


        <div className="container mt-4">
            <h1>Мой аккаунт</h1>

            <h3>Имя пользователя: {user.username}</h3>

            {userRole === "Admin" ? <AdminAuthNavigation /> : <UserAuthNavigation />}  

            <button onClick={handleLogout} className="btn btn-danger mt-3">Выйти из аккаунта</button>
        </div>


    );
        

}

export default Home;
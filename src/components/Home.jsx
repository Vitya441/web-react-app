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

            {userRole === "ADMIN" ? <AdminAuthNavigation /> : <UserAuthNavigation />}  

            <button onClick={handleLogout} className="btn btn-danger mt-3">Выйти из аккаунта</button>
        </div>



        // <div>
        //     <h1>Мой аккаунт</h1>

        //     <h3>Имя пользователя: {user.username}</h3>

        //     {userRole === "ADMIN" ? <AdminAuthNavigation /> : <UserAuthNavigation />}  
        
        //     <button onClick={handleLogout}>Выйти из аккаунта</button>
            

        // </div>





        // <Router>

        //     <nav>
        //         <h1>
        //             <Link to={"/appointments"}>Список услуг </Link>
        //         </h1>

        //         <h1>
        //             <Link to={"/addService"}>Добавить талон услуги (для админа)</Link>
        //         </h1>

        //         <h1>
        //             <Link to={"/registration"}>Зарегестрироваться</Link>
        //         </h1>


        //     </nav>


        //     <Routes>
                
        //         <Route path='/' element={<h1>Ваш аккаунт</h1>} />
        //         <Route path='/appointments' element={<ServicesList />} />
        //         <Route path="/appointments/:id" element={<ShowService />} />
        //         <Route path="/addService" element={<AddServiceForm />} />
        //         {/* <Route path="/registration" element={<Registration />} /> */}

        //         <Route path='*' element={<h1>404 NOT FOUND</h1>} />

        //         {/* <Route path='/form' element={<AddTokenForm />}></Route> */}

        //     </Routes>

        // </Router>

        


    );
        

}

export default Home;
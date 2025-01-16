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


function Subscribes() {

    const currentUser = useSelector(state => state.auth.user);
    console.log(currentUser);

    // общий список
    const allSubscribes = useSelector(state => state.subscribes.subscribes);

    // подписки текущего пользователя (по имени пользователя)
    const userSubscribes = allSubscribes.filter(subscribe => subscribe.subscriber.username === currentUser.username);



    return (
        <div style={{ fontFamily: 'Roboto, sans-serif' }}>
        <h1>Мои записи</h1>
        <ul className="list-group">
            {userSubscribes.map(subscribe => (
                <li key={subscribe.id} className="list-group-item mb-3 p-3 shadow-sm rounded" style={{ border: 'none' }}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"><b>Учреждение:</b> {subscribe.institutionName}</h5>
                            <h5 className="card-text"><b>Услуга:</b> {subscribe.serviceName}</h5>
                            <h5 className="card-text"><b>Врач:</b> {subscribe.doctorName}</h5>
                            <h5 className="card-text"><b>Дата:</b> {subscribe.appointmentDate}</h5>
                            <h5 className="card-text"><b>Время:</b> {subscribe.appointmentTime}</h5>
                            <h5 className="card-text"><b>Пациент:</b> {subscribe.subscriber.username}</h5>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    );



}

export default Subscribes;
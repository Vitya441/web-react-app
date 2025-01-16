import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { setAppointments } from '../store/appointmentsSlice';
import axios from 'axios';

function ServicesList() {

    const appointments = useSelector(state => state.appointments.appointments); // вложенность...
    const dispatch = useDispatch();

    // Загружаем данные при первом рендере
    useEffect(() => {
        const fetchClinics = async () => {
            try {
                const response = await axios.get('http://localhost:8080/tickets');
                dispatch(setAppointments(response.data)); // Сохраняем данные в Redux
            } catch (error) {
                console.error('Ошибка загрузки поликлиник:', error.message);
            }
        };

        fetchClinics();
    }, [dispatch]);

    return (

        <div className="container mt-4">
            <h1>Список услуг:</h1>
                
            {appointments.map(appointment => (
                <div className="service" key={nanoid()}>
                    <h3>{appointment.service_name}</h3>
                    <Link to={`/appointments/${appointment.id}`} className="btn btn-primary">Подробнее</Link> 
                    <br></br><br></br>
                </div> 
            ))}
        </div>

    );

}

export default ServicesList;
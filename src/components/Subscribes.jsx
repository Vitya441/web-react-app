import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import axios from 'axios';
import { setAppointments } from '../store/appointmentsSlice';


function Subscribes() {

    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.auth.user);
    const allTickets = useSelector(state => state.appointments.appointments);
    const userSubscribes = allTickets.filter((ticket) => ticket.user_id === currentUser.id);

    // Подгрузка данных из БД
    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axios.get("http://localhost:8080/tickets");
                dispatch(setAppointments(response.data)); // Устанавливаем талоны в Redux
            } catch (error) {
                console.error("Ошибка загрузки талонов:", error.message);
            }
        };

        fetchTickets();
    }, [dispatch]);
     

    return (
        <div style={{ fontFamily: 'Roboto, sans-serif' }}>
        <h1>Мои записи</h1>
        <ul className="list-group">
            {userSubscribes.map(subscribe => (
                <li key={subscribe.id} className="list-group-item mb-3 p-3 shadow-sm rounded" style={{ border: 'none' }}>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-text"><b>Услуга:</b> {subscribe.service_name}</h5>
                            <h5 className="card-text"><b>Врач:</b> {subscribe.doctor_name}</h5>
                            <h5 className="card-text"><b>Дата:</b> {subscribe.appointment_date}</h5>
                            <h5 className="card-text"><b>Время:</b> {subscribe.appointment_time}</h5>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
        </div>
    );


}

export default Subscribes;
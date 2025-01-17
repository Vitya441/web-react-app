import React from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { addSubcribe } from '../store/userSubscribesSlice';
import { nanoid } from '@reduxjs/toolkit';
import { removeAppointment, setAppointments } from '../store/appointmentsSlice';
import axios from 'axios';


function ShowService() {

    const {id} = useParams();
    const appointments = useSelector(state => state.appointments.appointments);

    const dispatch = useDispatch();
    // ищу нужный талон по id из userParams should be equals appointment.id
    const curAppointment = appointments.find((appointment) => appointment.id == id);

    const navigate = useNavigate();
    
    const subscriber = useSelector(state => state.auth.user);

    console.log(curAppointment);

    const handleSubscribe = async () => {
        try {
            const response = await axios.put("http://localhost:8080/tickets/subscribe", {
                ticketId: curAppointment.id,
                userId: subscriber.id
            });

            const updatedTicket = response.data;

            // Обновляем глобальный список талонов, исключая записанный
            const updatedAppointments = appointments.map((appointment) =>
                appointment.id === id ? updatedTicket : appointment
            );

            dispatch(setAppointments(updatedAppointments));

            navigate("/home");


             // Добавляем запись в пользовательские подписки
            // dispatch(
            //     addSubcribe({
            //         id: updatedTicket.id,
            //         subscriber,
            //         institutionName: updatedTicket.institutionName,
            //         serviceName: updatedTicket.service_name,
            //         doctorName: updatedTicket.doctor_name,
            //         appointmentDate: updatedTicket.appointment_date,
            //         appointmentTime: updatedTicket.appointment_time,
            //     })
            // );

        } catch(error) {
            console.error("Ошибка при записи на услугу:", error.message);
            alert("Не удалось записаться на услугу. Попробуйте позже.");
        }
    }

    // // нажму на кнопку записаться и должно вывести типо что ок и еще удалить эту запись из ОБЩЕГО СПИСКА
    // const handleSubscribe = () => {
    //     console.log("ID услуги: ", id);
    //     const new_id = nanoid();
    //     dispatch(removeAppointment(id));
    //     dispatch(addSubcribe({id: new_id, subscriber: subscriber, institutionName: curAppointment.institutionName,
    //     serviceName: curAppointment.serviceName, doctorName: curAppointment.doctorName, appointmentDate: curAppointment.appointmentDate, 
    //     appointmentTime: curAppointment.appointmentTime}));

    //     navigate("/home");
    // }



    return (

        <div className="">
            <div className="card">
                <div className="card-body">
                    {/* <h3>Учреждение: {curAppointment.institutionName}</h3> */}
                    <h3>Вид услуги: {curAppointment.service_name}</h3>
                    <h3 className="card-text">Врач: {curAppointment.doctor_name}</h3>
                    <h3 className="card-text">Дата: {curAppointment.appointment_date}</h3>
                    <h3 className="card-text">Время: {curAppointment.appointment_time}</h3>
                    <hr />
                    {/* <Link to={`/appointments/${id}/reviews`} className="btn btn-primary btn-block mb-2">Отзывы</Link> */}
                    <button className="btn btn-primary btn-block mb-2" onClick={handleSubscribe}>Записаться</button>
                </div>
            </div>
        </div>

       
    );


}

export default ShowService;


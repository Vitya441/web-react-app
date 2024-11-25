import React from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import { addSubcribe } from '../store/userSubscribesSlice';
import { nanoid } from '@reduxjs/toolkit';
import { removeAppointment } from '../store/appointmentsSlice';


function ShowService() {

    const {id} = useParams();

    const appointments = useSelector(state => state.appointments.appointments);

    const dispatch = useDispatch();

    // ищу нужный талон по id из userParams should be equals appointment.id
    const curAppointment = appointments.find((appointment) => appointment.id == id);

    const navigate = useNavigate();
    
    const subscriber = useSelector(state => state.auth.user);

    console.log(curAppointment);

    // нажму на кнопку записаться и должно вывести типо что ок и еще удалить эту запись из ОБЩЕГО СПИСКА
    const handleSubscribe = () => {
        console.log("ID услуги: ", id);
        const new_id = nanoid();
        dispatch(removeAppointment(parseInt(id)));
        dispatch(addSubcribe({id: new_id, subscriber: subscriber, institutionName: curAppointment.institutionName,
        serviceName: curAppointment.serviceName, doctorName: curAppointment.doctorName, appointmentDate: curAppointment.appointmentDate, 
        appointmentTime: curAppointment.appointmentTime}));

        navigate("/home");
    }



    return (

        <div className="">
            <div className="card">
                <div className="card-body">
                    <h3>Учреждение: {curAppointment.institutionName}</h3>
                    <h3>Вид услуги: {curAppointment.serviceName}</h3>
                    <h3 className="card-text">Врач: {curAppointment.doctorName}</h3>
                    <h3 className="card-text">Дата: {curAppointment.appointmentDate}</h3>
                    <h3 className="card-text">Время: {curAppointment.appointmentTime}</h3>
                    <hr />
                    <Link to={`/appointments/${id}/reviews`} className="btn btn-primary btn-block mb-2">Отзывы</Link>
                    <button className="btn btn-primary btn-block mb-2" onClick={handleSubscribe}>Записаться</button>
                </div>
            </div>
        </div>

        // <div className="">
        //     <div className="card">
        //         <div className="card-body">
        //             <h3>Учреждение: {curAppointment.institutionName}</h3>
        //             <h3>Вид услуги: {curAppointment.serviceName}</h3>
        //             <h3 className="card-text">Врач: {curAppointment.doctorName}</h3>
        //             <h3 className="card-text">Дата: {curAppointment.appointmentDate}</h3>
        //             <h3 className="card-text">Время: {curAppointment.appointmentTime}</h3>
        //             <hr />
        //             <Link to={`/appointments/${id}/reviews`} className="btn btn-primary mb-2">Отзывы</Link> <br />
        //             <button className="btn btn-primary mb-2" onClick={handleSubscribe}>Записаться</button>
        //         </div>
        //     </div>
        // </div>
    );


}

export default ShowService;
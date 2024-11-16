import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

function ServicesList() {

    // appointments - reducer в store.js и appointments - это поле объекта initialState
    const appointments = useSelector(state => state.appointments.appointments); // вложенность...
    const dispatch = useDispatch();

    return (

        <div className="container mt-4">
            <h1>Список услуг:</h1>
                
            {appointments.map(appointment => (
                <div className="service" key={nanoid()}>
                    <h3>{appointment.serviceName}</h3>
                    <Link to={`/appointments/${appointment.id}`} className="btn btn-primary">Подробнее</Link> 
                    <br></br><br></br>
                </div> 
            ))}
        </div>


        // <div>
        // <h1>Список услуг:</h1>
                
        //         {appointments.map(appointment => (
        //             <div className='service'>
        //             <li key={nanoid()}>
        //                 <h3>{appointment.serviceName}</h3>
        //                 <Link to={`/appointments/${appointment.id}`}>Подробнее</Link>
        //             </li>
        //             </div>
                    
        //         ))}


        // </div>
    );

}

export default ServicesList;
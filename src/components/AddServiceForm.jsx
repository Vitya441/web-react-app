import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addAppointment } from "../store/appointmentsSlice";
import axios from "axios";

// Мэнэджер создает талон
function AddServiceForm({ clinicId, onClose }) {

    const [serviceName, setServiceName] = useState("");
    const [doctorName, setDoctorName] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");

    const dispatch = useDispatch();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const id = Date.now().toString(); // Уникальный ID
    //     dispatch(addAppointment({id: id, clinicId: clinicId, serviceName: serviceName, doctorName: doctorName, 
    //         appointmentDate: appointmentDate, appointmentTime: appointmentTime}));

    //     // Очиащаем форму после добавления
    //     setServiceName("");
    //     setDoctorName("");
    //     setAppointmentDate("");
    //     setAppointmentTime("")

    //     onClose();
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setLoading(true);
        // setError(null);

        try {
            // Отправка данных на сервер
            const response = await axios.post("http://localhost:8080/tickets", {
                service_name: serviceName,
                doctor_name: doctorName,
                appointment_date: appointmentDate,
                appointment_time: appointmentTime,
                clinic_id: clinicId
            });

            // Получение данных из ответа сервера
            const savedAppointment = response.data;

            // Обновление состояния Redux
            dispatch(addAppointment(savedAppointment));

            // Очистка формы после добавления
            setServiceName("");
            setDoctorName("");
            setAppointmentDate("");
            setAppointmentTime("");

            onClose(); // Закрытие формы
        } catch (err) {
            console.error("Error saving appointment:", err);
            // setError("Не удалось сохранить запись. Попробуйте ещё раз.");
        } finally {
            // setLoading(false);
        }
    };
    

    const onServiceNameChanged = e => setServiceName(e.target.value);
    const onDoctorNameChanged = e => setDoctorName(e.target.value);
    const onAppointmentDateChanged = e => setAppointmentDate(e.target.value);
    const onAppointmentTimeChanged = e => setAppointmentTime(e.target.value);


    return (

      <div>
            <form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-light">
                <div className="form-group mb-3">
                    <label htmlFor="serviceName">Услуга</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="serviceName"
                        placeholder="Введите название услуги"
                        value={serviceName}
                        onChange={onServiceNameChanged}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="doctorName">Врач</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="doctorName"
                        placeholder="Введите имя врача"
                        value={doctorName}
                        onChange={onDoctorNameChanged}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="appointmentDate">Дата</label>
                    <input 
                        type="date"
                        className="form-control"
                        id="appointmentDate"
                        placeholder="Введите дату"
                        value={appointmentDate}
                        onChange={onAppointmentDateChanged}
                        required
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="appointmentTime">Время</label>
                    <input 
                        type="time"
                        className="form-control"
                        id="appointmentTime"
                        placeholder="Выберите время"
                        value={appointmentTime}
                        onChange={onAppointmentTimeChanged}
                        required
                    />
                </div>
                <button className="btn btn-danger" type="submit">Save Service</button>
            </form>
        </div>

    );




}

export default AddServiceForm;
import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addAppointment } from "../store/appointmentsSlice";

// Мэнэджер создает талон
function AddServiceForm() {

    const [institutionName, setInstitutionName] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [doctorName, setDoctorName] = useState("");
    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");
    

    const onInstitutionNameChanged = e => setInstitutionName(e.target.value);
    const onServiceNameChanged = e => setServiceName(e.target.value);
    const onDoctorNameChanged = e => setDoctorName(e.target.value);
    const onAppointmentDateChanged = e => setAppointmentDate(e.target.value);
    const onAppointmentTimeChanged = e => setAppointmentTime(e.target.value);

    // Расчитываю id следующего талона
    const id = useSelector(state => state.appointments.appointments.length);
    // const id = nanoid();

    const dispatch = useDispatch();

    // Действие при нажатии на кнопку sumbit
    const onSaveServiceClicked = (event) => {

        event.preventDefault();
        if (institutionName && serviceName && doctorName && appointmentDate) {

            // Добавить логику сохранения в БД (POST http://localhost:3000/appointments)

            dispatch(addAppointment({id: id, institutionName: institutionName, serviceName: serviceName, doctorName: doctorName, 
              appointmentDate: appointmentDate, appointmentTime: appointmentTime}));
        }
          console.log(appointmentDate);
        setInstitutionName("");
        setServiceName("");
        setDoctorName("");
        setAppointmentDate("");
        setAppointmentTime("")
        
        
    };

    return (

      <div>
            <form onSubmit={onSaveServiceClicked} className="p-4 shadow-sm rounded bg-light">
                <div className="form-group mb-3">
                    <label htmlFor="institutionName">Учреждение</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="institutionName"
                        placeholder="Введите название учреждения"
                        value={institutionName}
                        onChange={onInstitutionNameChanged}
                        required
                    />
                </div>
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

  

        // <form onSubmit={onSaveServiceClicked} className="registration-container">
          
        //             <input 
        //               type="text"
        //               placeholder="Enter Institution Name"
        //               value={institutionName}
        //               onChange={onInstitutionNameChanged}
        //               required="true"
        //             />


        //           <input 
        //             type="text"
        //             placeholder="Enter Service Name"
        //             value={serviceName}
        //             onChange={onServiceNameChanged}
        //             required="true"
        //           />



            
        //     <input 
        //       type="text"
        //       placeholder="Enter Doctor Name"
        //       value={doctorName}
        //       onChange={onDoctorNameChanged}
        //       required="true"
        //     />
        //     <input 
        //       type="date"
        //       placeholder="Enter Appointment Date"
        //       value={appointmentDate}
        //       onChange={onAppointmentDateChanged}
        //       required="true"
        //     />
            
        //     <button className="btn btn-danger" type="submit">Save Service</button>


        // </form>
    );




}

export default AddServiceForm;
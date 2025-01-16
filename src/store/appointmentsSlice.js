import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    appointments: [
        // {id: 0, clinicId: null, institutionName: "Поликлинника №1", serviceName: "Стоматология", doctorName: "Oleg", appointmentDate: "2024-05-12", appointmentTime: "12:00"},
        // {id: 1, clinicId: null, institutionName: "Поликлинника №2", serviceName: "Реабилитация", doctorName: "Ivan", appointmentDate: "2024-05-13", appointmentTime: "11:00"},
        // {id: 2, clinicId: null, institutionName: "Поликлинника №3", serviceName: "Операция", doctorName: "Alex", appointmentDate: "2024-05-14", appointmentTime: "09:00"},        

    ]
}

export const appointmentsSlice = createSlice({

    name: "appointments",

    initialState,

    reducers: {
        setAppointments: (state, action) => {
            state.appointments = action.payload; // Сохраняем загруженные данные
        },
        addAppointment: (state, action) => {
            // Буду пушить объект {appointment} в компоненте c соответствующими полями
            state.appointments.push(action.payload);
        },

        removeAppointment: (state, action) => {
            // Буду передавать id записи, которую нужно удалить
            state.appointments = state.appointments.filter((appointment) => appointment.id !== action.payload);
        }


    }

});

export const {setAppointments, addAppointment, removeAppointment} = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
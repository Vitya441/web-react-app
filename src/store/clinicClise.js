import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    clinics: [] // id, name, addr
};

export const clinicSlice = createSlice({
    name: 'clinics',
    initialState,
    reducers: {
        setClinics: (state, action) => {
            state.clinics = action.payload; // Сохраняем загруженные данные
        },
        addClinic: (state, action) => {
            state.clinics.push(action.payload);
        },
    },
});

export const { setClinics, addClinic } = clinicSlice.actions;

export default clinicSlice.reducer;

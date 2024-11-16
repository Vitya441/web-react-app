import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    isAuthenticated: false,
    user: null,
};

export const authSlice = createSlice({

    name: "auth",

    initialState,

    reducers: {
        
        login: (state, action) => {             
            state.isAuthenticated = true;
            state.user = action.payload; 
        },

        logout: (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
            
        },

        // по паролю и email получаю все данные о пользователе через GET-запрос в Login.jsx
        updateUser: (state, action) => {
            state.user = action.payload;
        },


    }
});

export const {login, logout, setRole, updateUser} = authSlice.actions;
export default authSlice.reducer;
import { configureStore } from '@reduxjs/toolkit'
import appointmentsSlice from './appointmentsSlice';
import reviewsSlice from './reviewsSlice';
import authReducer from './authSlice';
import userSubscribesSlice from './userSubscribesSlice';


const store = configureStore({

    reducer: {
        
        auth: authReducer,
        appointments: appointmentsSlice, // Редусеры
        reviews: reviewsSlice,
        subscribes: userSubscribesSlice // добавляю
    }
    
});

export default store;



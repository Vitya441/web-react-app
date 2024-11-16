import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    // {id, serviceId, text, (sender)}
    reviews: []
};


export const reviewsSlice = createSlice({

    name: "reviews",

    initialState,

    reducers: {

        addReview: (state, action) => {
            state.reviews.push(action.payload);
        },

        removeReview: (state, action) => {
            state.reviews = state.reviews.filter(el => el.id !== action.payload);
        },


    }

});

export const {addReview, removeReview} = reviewsSlice.actions;

export default reviewsSlice.reducer;
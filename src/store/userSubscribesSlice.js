import { createSlice } from '@reduxjs/toolkit';


const initialState = {

    subscribes: []

}

export const userSubscribesSlice = createSlice({

    name: "subscribes",

    initialState,

    reducers: {
        addSubcribe: (state, action) => {
            state.subscribes.push(action.payload);
        },

    }

});

export const {addSubcribe} = userSubscribesSlice.actions;

export default userSubscribesSlice.reducer;
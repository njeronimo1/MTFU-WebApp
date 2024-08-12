import { api } from "@/lib/axios";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: [{}],
    reducers: {
        authentication: (state, action) => {
            console.log(action.payload.auth);
            api.post('/Auth/login', action.payload.auth).then((res) => console.log(res));

            state.push(action.payload.auth);
        }
    },
})

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    }
});

export const {authentication} = authSlice.actions;
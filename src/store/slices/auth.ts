import { api } from "@/lib/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface User {
    id: string,
    token: string,
    refreshToken: string,
    expiration: string
}

interface UserState {
    user: User | null,
}

const initialState:UserState = {
    user: null,
};

//guardar dados no cookies e replicar function pra somente fazer get dos dados do user
export const authenticate = createAsyncThunk(
    'auth/authenticate',
    async (action) => {
        // console.log(action);
        api.post('/Auth/login', action).then((res) => console.log(res));
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authentication: (state, action) => {
            console.log(action.payload.auth);
            

            // state.push(action.payload.auth);
        }
    },
})
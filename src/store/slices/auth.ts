import { api } from "@/lib/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface User {
    id: string,
    token: string,
    refreshToken: string,
    expiration: string
}

interface UserState {
    user: User | null,
    isLoading: boolean
}

const initialState:UserState = {
    user: null,
    isLoading: false,
};

export const authenticate = createAsyncThunk(
    'auth/authenticate',
    async (action: any) => {
        const userAuth = await api.post('/Auth/login', action);
        localStorage.setItem('user', JSON.stringify(userAuth.data));

        return userAuth.data;
    }
)

export const getUser = createAsyncThunk(
    'auth/getUser',
    async () => {
        const getUserLocal = localStorage.getItem('user');
        if(getUserLocal){
            let user = JSON.parse(getUserLocal);

            return user;
        }else{
            return null;
        }
    }
)

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.user = action.payload;
        });

        builder.addCase(authenticate.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(authenticate.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        })

        builder.addCase(authenticate.rejected, (state, action) => {
            state.isLoading = false;
        })
    },
})
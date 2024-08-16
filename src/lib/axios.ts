
import axios from "axios";
import { addTokenToLocalStorage, getTokenFromLocalStorage } from "./service";

export const api  = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    // withCredentials: true
    headers: {
        "Content-type": "application/json",
    },
    withCredentials: false,
})

api.interceptors.request.use(
    async (config) => {
        const token = getTokenFromLocalStorage();
        if (token) {
            config.headers["Authorization"] = `bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

const refreshToken = async () => {
    try {
      const resp = await api.get("Auth/refresh-token");
        console.log("refresh token", resp.data);
      return resp.data;
    } catch (e) {
      console.log("Error",e);   
    }
  };

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const resp = await refreshToken();

            const tokens = resp.response;

            addTokenToLocalStorage(tokens.accessToken, tokens.refreshToken);
            
            api.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${tokens.accessToken}`;
            
            return api(originalRequest);
        }
        return Promise.reject(error);
    }
);
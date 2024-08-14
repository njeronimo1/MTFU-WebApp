import { User } from "@/store/slices/auth";

export function getTokenFromLocalStorage(){
    const user = localStorage.getItem('user');
    if(user) {
        let userJSON:User = JSON.parse(user);
        return userJSON.token;
    }

    return null;
}

export function addTokenToLocalStorage(access_token: string, refresh_token: string){
    localStorage.setItem('token', access_token);
    localStorage.setItem('refresh_token', refresh_token);
}
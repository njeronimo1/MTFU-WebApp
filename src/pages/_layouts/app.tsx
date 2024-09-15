import { Menu } from "@/components/Menu/Menu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from 'react-router-dom'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useAppDispatch, useAppSelector } from "@/store";
import { getUser } from "@/store/slices/auth";
import { UserNotAuthenticated } from "../404";
import { GlobalLoader } from "./globalLoader";



export function AppLayout(){

   

    const dispatch = useAppDispatch();

    const { user } = useAppSelector(store => {
        const user = store.auth.user;
        return { user };
    });

    function getUserStore(){
        dispatch(getUser());
    }

    useEffect(() => {
        getUserStore();
    }, [location]);

    if(user == null){
        return <UserNotAuthenticated />;
    }
// console.log(isFetching);
    

    return(
        <>
            <GlobalLoader />
            <div className="w-full flex lg:overflow-hidden">
                <div className="hidden lg:flex w-1/6 bg-gray_fundo_mtfu h-screen">
                    <Menu />
                </div>
                <div className="lg:hidden absolute top-0 left-0">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button>Open</button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    {/* <User className="mr-2 h-4 w-4" /> */}
                                <span>Profile</span>
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                                </DropdownMenuItem>
                                <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                        </DropdownMenu>
                </div>
                <div className="w-full lg:w-5/6 bg-gray_fundo_sec_mtfu h-screen ">
                    <Outlet />
                </div>
            </div>
        </>
    )
}
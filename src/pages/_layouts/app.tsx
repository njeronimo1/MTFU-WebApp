import { Menu } from "@/components/Menu/Menu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "../app/home";
import { Outlet } from 'react-router-dom'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export function AppLayout(){

    const navigate = useNavigate();

    // useEffect(() => {
    //     navigate("/sign-in");
    // }, [location]);

    return(
        <>
            <div className="w-full flex overflow-hidden">
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
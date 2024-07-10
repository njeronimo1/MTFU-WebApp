import { Menu } from "@/components/Menu/Menu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "../app/home";

export function AppLayout(){

    const navigate = useNavigate();

    // useEffect(() => {
    //     navigate("/sign-in");
    // }, [location]);

    return(
        <>
            <div className="w-full flex">
                <div className="w-1/12 bg-gray_fundo_mtfu h-screen">
                    <Menu />
                </div>
                <div className="w-11/12 bg-gray_fundo_sec_mtfu h-screen py-12 pl-20 pr-20">
                    <Home />
                </div>
            </div>
        </>
    )
}
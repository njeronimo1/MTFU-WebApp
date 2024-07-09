import { Menu } from "@/components/Menu/Menu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
                <div className="w-11/12 bg-gray_fundo_sec_mtfu h-screen">
                    Content
                </div>
            </div>
        </>
    )
}
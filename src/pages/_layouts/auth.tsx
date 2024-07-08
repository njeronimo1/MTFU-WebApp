import { Outlet } from "react-router-dom";

//imgs
import logo from "../../assets/logo_more_than.svg"

export function AuthLayout(){
    return(
        <>
            <div className="w-full flex items-center gap-2 bg-gray_fundo_mtfu h-screen">
                <div className="w-1/3 flex items-center justify-center">
                    <img src={logo} alt="logo" />
                </div>
                <div className="w-2/3 flex items-center justify-center bg-gray_fundo_sec_mtfu h-screen">
                    <Outlet />
                </div>
            </div>
            
        </>
    )
}
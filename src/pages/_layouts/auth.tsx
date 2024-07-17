import { Outlet } from "react-router-dom";

//imgs
import logo from "../../assets/logo_more_than.svg"

export function AuthLayout(){
    return(
        <>
            <div className="w-full items-center gap-2 bg-gray_fundo_sec_mtfu lg:bg-gray_fundo_mtfu h-screen flex flex-col lg:flex-row">
                <div className="py-4 lg:p-24 w-full flex lg:w-1/3 items-center justify-center">
                    <img src={logo} alt="logo" className="w-1/4 lg:w-full" />
                </div>
                <div className="w-full lg:w-2/3 flex items-center justify-center bg-gray_fundo_sec_mtfu h-screen">
                    <Outlet />
                </div>
            </div>
        </>
    )
}
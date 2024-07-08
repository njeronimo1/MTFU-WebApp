import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AppLayout(){

    const navigate = useNavigate();

    useEffect(() => {
        navigate("/sign-in");
    }, [location]);

    return(
        <>
            App layout
        </>
    )
}
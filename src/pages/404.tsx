import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function NotFound(){
    return(
        <div className="flex h-screen flex-col items-center justify-center gap-2">
            <h1 className="text-4xl font-bold">Página não encontrada</h1>
            <p className="text-accent-foreground">
                Voltar para o{' '} <Link to="/" className="text-sky-600 dark:text-sky-400">Dashboard</Link>
            </p>
        </div>
    )
}

export function UserNotAuthenticated(){
    const navigate = useNavigate();

    // useEffect(() => {
    //     navigate('/sign-in');
    // }, []);

    return(
        <div className="flex h-screen flex-col items-center justify-center gap-2">
            <h1 className="text-4xl font-bold">Voce precisa realizar o login para acessar essa pagina</h1>
            <p className="text-accent-foreground">
                Voltar para o{' '} <Link to="/sign-in" className="text-sky-600 dark:text-sky-400">login</Link>
            </p>
        </div>
    )
}
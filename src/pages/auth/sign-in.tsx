import { Button, Input, Typografy } from "@mtfu/react"

import ArrowRight from "../../assets/icons_radix/arrow-right.svg"
import { useNavigate } from "react-router-dom"

//imgs

import eyeOpen from "../../assets/icons_radix/eye-open.svg"
import eyeClosed from "../../assets/icons_radix/eye-closed.svg"

export function SignIn() {

    const navigate = useNavigate();

    return(
        <>
            <div className="flex flex-col gap-4 p-8 w-2/4">
                <Typografy align="left" color="#FFF" fontWeight={700} type="title" children="Digite seu login e senha" />
                <div className="bg-gray_fundo_mtfu p-8 w-full rounded-xl gap-4 flex flex-col">
                    <Input label="Login" optional={false} variant="text" onChange={() => {}} placeholder="Digite aqui..." errorMessage="" imgSearch="" 
                    type="text" />
                    <Input label="Senha" optional={false} variant="password" onChange={() => {}} placeholder="Digite aqui..." errorMessage="" imgSearch="" 
                    type="password" imagesPassword={{eyeOpen: eyeOpen, eyeClosed: eyeClosed}}/>

                    <Button  variant="normal" textAlign="center" radius="8">
                        Entrar
                    </Button>

                    <div className="flex w-full justify-end text-white gap-2 items-center cursor-pointer hover:opacity-80"
                    onClick={() => {navigate("/sign-up")}}>
                        <Typografy align="right" color="#FFF" fontWeight={500} type="medium" children="Cadastre-se" />
                        <img src={ArrowRight} alt="right" />
                    </div>
                </div>
                
            </div>
        </>
    )
}
import { Button, Input, Typografy } from "@mtfu/react";
import {useNavigate} from "react-router-dom"



//imgs

import ArrowLeft from "../../assets/icons_radix/arrow-left.svg"
import eyeOpen from "../../assets/icons_radix/eye-open.svg"
import eyeClosed from "../../assets/icons_radix/eye-closed.svg"


export function SignUp(){

    const navigate = useNavigate();

    return(
        <>
            <div className="flex flex-col gap-4 p-8 w-2/4">
                <div className="w-full flex align-center justify-between">
                    <Typografy align="left" color="#FFF" fontWeight={700} type="title" children="Preencha os dados" />
                    <div className="flex w-1/3 justify-end text-white gap-2 items-center cursor-pointer hover:opacity-80"
                    onClick={() => {navigate("/sign-in")}}>
                        <img src={ArrowLeft} alt="right" />
                        <Typografy align="right" color="#FFF" fontWeight={500} type="medium" children="Login" />

                        
                        
                    </div>
                </div>
                
                <div className="bg-gray_fundo_mtfu p-8 w-full rounded-xl gap-6 flex flex-col">
                    <Input label="Login" optional={false} variant="text" onChange={() => {}} placeholder="Digite aqui..." errorMessage="" imgSearch="" type="text"  />
                    <Input label="Empresa" optional={false} variant="text" onChange={() => {}} placeholder="Digite aqui..." errorMessage="" imgSearch="" type="text" />
                    <Input label="Senha" optional={false} variant="password" onChange={() => {}} placeholder="Digite aqui..." errorMessage="" imgSearch="" type="password"
                    imagesPassword={{eyeClosed: eyeClosed, eyeOpen: eyeOpen}} />
                    <Input label="Confirme a senha" optional={false} variant="password" onChange={() => {}} placeholder="Digite aqui..." errorMessage="" imgSearch="" type="password" 
                    imagesPassword={{eyeClosed: eyeClosed, eyeOpen: eyeOpen}}/>

                    <Button children="Cadastrar" variant="normal" textAlign="center" radius="8" />
                </div>
                
            </div>

            
        </>
    )
}
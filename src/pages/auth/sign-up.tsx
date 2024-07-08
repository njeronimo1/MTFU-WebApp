import { Button, Input, Typografy } from "@mtfu/react";


export function SignUp(){
    return(
        <>
            <div className="flex flex-col gap-4 p-8 w-2/4">
                <Typografy align="left" color="#FFF" fontWeight={700} type="title" children="Digite seu login e senha" />
                <div className="bg-gray_fundo_mtfu p-8 w-full rounded-xl gap-6 flex flex-col">
                    <Input label="Login" optional={false} variant="text" onChange={() => {}} placeholder="Digite aqui..." errorMessage="" imgSearch="" />
                    <Input label="Empresa" optional={false} variant="text" onChange={() => {}} placeholder="Digite aqui..." errorMessage="" imgSearch="" />
                    <Input label="Senha" optional={false} variant="text" onChange={() => {}} placeholder="Digite aqui..." errorMessage="" imgSearch="" />
                    <Input label="Confirme a senha" optional={false} variant="text" onChange={() => {}} placeholder="Digite aqui..." errorMessage="" imgSearch="" />

                    <Button children="Cadastrar" variant="normal" />

                </div>
                
            </div>
        </>
    )
}
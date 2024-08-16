import { Button, Input, Typografy } from "@mtfu/react";
import {useNavigate} from "react-router-dom"



//imgs

import ArrowLeft from "../../assets/icons_radix/arrow-left.svg"
import eyeOpen from "../../assets/icons_radix/eye-open.svg"
import eyeClosed from "../../assets/icons_radix/eye-closed.svg"
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { api } from "@/lib/axios";
import { toast } from 'react-toastify';

const SignUpSchema = z.object({
    username: z.string({message:'Campo obrigatório'}),
    password: z.string({message: 'Campo obrigatório'}),
    confirmPassword: z.string({message: 'Campo obrigatório'}),
})

export function SignUp(){

    const navigate = useNavigate();

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
        },
    });

    async function handleSubmitSignUp(data: z.infer<typeof SignUpSchema>){
        let register = await toast.promise(
            api.post('/Auth/register', data),
            {
              pending: 'Cadastrando usuário',
              success: 'Usuário cadastrado com sucesso! 👌',
              error: 'Cadastro recusado 🤯'
            }
        );

        if(register.status == 200) {
            navigate('/sign-in');
        }
    }

    return(
        <>
            <Form {...form} >
                <form className="flex flex-col gap-4 p-8 w-full lg:w-2/4" onSubmit={form.handleSubmit(handleSubmitSignUp)}>
                    <div className="w-full flex align-center justify-between">
                        <Typografy align="left" color="#FFF" fontWeight={700} type="title" children="Preencha os dados" />
                        <div className="flex w-1/3 justify-end text-white gap-2 items-center cursor-pointer hover:opacity-80"
                        onClick={() => {navigate("/sign-in")}}>
                            <img src={ArrowLeft} alt="right" />
                            <Typografy align="right" color="#FFF" fontWeight={500} type="medium" children="Login" />

                            
                            
                        </div>
                    </div>
                    
                    <div className="bg-gray_fundo_mtfu p-8 w-full rounded-xl gap-6 flex flex-col">
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input 
                                    label="Login" 
                                    optional={false} 
                                    variant="text" 
                                    placeholder="Digite aqui..." 
                                    errorMessage="" 
                                    type="text"  
                                    {...field}/>
                                </FormControl>

                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                <Input label="Senha"  optional={false} 
                                variant="password" 
                                placeholder="Digite aqui..." 
                                errorMessage="" 
                                type="password"
                                imagesPassword={{eyeClosed: eyeClosed, eyeOpen: eyeOpen}} 
                                {...field}/>
                                </FormControl>

                                <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input label="Confirme a senha"  optional={false} 
                                    variant="password" 
                                    placeholder="Digite aqui..." 
                                    errorMessage="" 
                                    type="password"
                                    imagesPassword={{eyeClosed: eyeClosed, eyeOpen: eyeOpen}} 
                                    {...field}/>
                                </FormControl>

                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <Button children={<span>Cadastrar</span>} type="submit" variant="normal" textAlign="center" radius="8" />
                    </div>
                    
                </form>

            </Form>
        </>
    )
}
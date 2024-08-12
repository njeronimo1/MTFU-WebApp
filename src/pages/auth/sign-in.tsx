import { Button, Input, Typografy } from "@mtfu/react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSelector, useDispatch } from "react-redux"
import { authentication } from '../../store/index'

import ArrowRight from "../../assets/icons_radix/arrow-right.svg"
import { useNavigate } from "react-router-dom"

//imgs
import eyeOpen from "../../assets/icons_radix/eye-open.svg"
import eyeClosed from "../../assets/icons_radix/eye-closed.svg"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"


const SignInSchema = z.object({
    login: z.string({message:'Campo obrigatório'}),
    password: z.string({message: 'Campo obrigatório'}),
})

export function SignIn() {

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const store = useSelector(data => {
        return data.auth;
    });

    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
        },
      });

    function handleSubmitSignIn(data: z.infer<typeof SignInSchema>){
        dispatch(authentication({auth: data}));
        // console.log(data);
    }

    return(
        <>
            <Form {...form}>
                <form className="flex flex-col gap-4 p-8 w-full lg:w-2/4" onSubmit={form.handleSubmit(handleSubmitSignIn)}>
                    <Typografy align="left" color="#FFF" fontWeight={700} type="title" children="Digite seu login e senha" />
                    <div className="bg-gray_fundo_mtfu p-8 w-full rounded-xl gap-4 flex flex-col">
                        <FormField
                            control={form.control}
                            name="login"
                            render={({ field }) => (
                                <FormItem>
                                <FormControl>
                                    <Input 
                                    placeholder="Digite aqui..."
                                    label="Login"
                                    optional={false}
                                    type="text"
                                    variant="text"
                                    {...field} />
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
                                    <Input 
                                    placeholder="Digite aqui..."
                                    label="Senha"
                                    optional={false}
                                    type="text"
                                    variant="password"
                                    imagesPassword={{eyeOpen: eyeOpen, eyeClosed: eyeClosed}}
                                    {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />

                        <Button  variant="normal" type="submit" textAlign="center" radius="8" >
                            <span>Entrar</span>                   
                        </Button>

                        <div className="flex w-full justify-end text-white gap-2 items-center cursor-pointer hover:opacity-80"
                        onClick={() => {navigate("/sign-up")}}>
                            <Typografy align="right" color="#FFF" fontWeight={500} type="medium" children="Cadastre-se" />
                            <img src={ArrowRight} alt="right" />
                        </div>
                    </div>
                </form>
            </Form>
        </>
    )
}
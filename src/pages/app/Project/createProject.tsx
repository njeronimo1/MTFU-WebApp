import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { useForm, SubmitHandler } from "react-hook-form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button, Input, TextArea, Typografy } from "@mtfu/react";
import { useState } from "react";
import { UsersList } from "./projectTypes";
import { z } from 'zod'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Trash } from "phosphor-react";


const createProjectForm = z.object({
    title: z.string(),
    responsibleId: z.number(),
    categoryId: z.number(),
    users: z.string().optional().array()
})

type CreateProjectForm = z.infer<typeof createProjectForm>

export function CreateProject(){

    const { register, handleSubmit, formState: {isSubmitting, errors} } = useForm<CreateProjectForm>({
        defaultValues: {
            users: []
        }
    });

    console.log(errors.root);

    function handleSubmitProject(data: CreateProjectForm){
        console.log(data);
    }

    const [usersList, setUsersList] = useState<UsersList[]>([
        {   
            function: "front-end",
            name: "Nicolas Jerônimo",
            userId: 1
        },
        {   
            function: "front-end",
            name: "Nicolas Jerônimo",
            userId: 2
        }
    ]);

    function handlerUsersList(id: number, action: 'remove' | 'add'){
        if(action == 'remove'){
            let filter = usersList.filter((u) => u.userId !== id);
            setUsersList(filter);
        }
    }

    return(
        <>
            <div className="p-2 pl-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/project" className="text-gray-500 hover:brightness-125 hover:text-gray-500">Projetos</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/project/create-project" className="text-gray-500 hover:brightness-125 hover:text-gray-500">/ Criar projeto</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                
            </div>

            <Separator className="bg-separator_app" />

            <form className="w-full p-8" onSubmit={handleSubmit(handleSubmitProject)}>
                <div className="w-full flex gap-4" >
                    <div className="w-1/4">
                        <Input 
                            label="Titulo" 
                            type="text" 
                            optional={false} 
                            placeholder="Preencha aqui..." 
                            variant="text" 
                            // onChange={() => {}}
                            {...register("title")} 
                            errorMessage="" 
                            imgSearch="" 
                        />
                    </div>
                    
                    <div className="w-1/4 flex flex-col gap-[0.5rem]">
                        <Typografy fontWeight={600} type="medium" color="white" children="Responsável" align="left"  />
                        <Select {...register("responsibleId")} >
                            <SelectTrigger className="w-full h-12 bg-gray_fundo_sec_mtfu text-white border-mtfu hover:bg-mtfu focus:ring-mtfu focus:ring-offset-3">
                                <SelectValue placeholder="Selecione um responsável" />
                            </SelectTrigger>
                            <SelectContent className="z-50 bg-gray_fundo_mtfu text-white border-mtfu">
                                <SelectGroup>
                                    <SelectItem value="1" className="hover:bg-mtfu">More than follow up</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="w-1/4 flex flex-col gap-[0.5rem]">
                        <Typografy fontWeight={600} type="medium" color="white" children="Categoria" align="left"  />
                        <Select {...register("categoryId")} >
                            <SelectTrigger className="w-full h-12 bg-gray_fundo_sec_mtfu text-white border-mtfu hover:bg-mtfu focus:ring-mtfu focus:ring-offset-3">
                                <SelectValue placeholder="Selecione uma categoria" />
                            </SelectTrigger>
                            <SelectContent className="z-50 bg-gray_fundo_mtfu text-white border-mtfu">
                                <SelectGroup>
                                    <SelectItem value="1" className="hover:bg-mtfu">More than follow up</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="w-full flex gap-4 mt-4">
                    <div className="w-1/4 flex flex-col gap-[0.5rem]">
                            <Typografy fontWeight={600} type="medium" color="white" children="Usuarios" align="left"  />
                            <Select>
                                <SelectTrigger className="w-full h-12 bg-gray_fundo_sec_mtfu text-white border-mtfu hover:bg-mtfu focus:ring-mtfu focus:ring-offset-3">
                                    <SelectValue placeholder="Selecione um usuário" />
                                </SelectTrigger>
                                <SelectContent className="z-50 bg-gray_fundo_mtfu text-white border-mtfu">
                                    <SelectGroup>
                                        <SelectItem value="1" className="hover:bg-mtfu">Nicolas Jerônimo</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                    </div>
                </div>

                {usersList.length > 0 && (
                    <div className="w-full py-4 flex flex-col">
                        <Table>
                            <TableHeader>
                                <TableRow className="hover:bg-transparent border-b-separator_app">
                                    <TableHead className="w-1/4 text-white ">Nome</TableHead>
                                    <TableHead className="w-3/4 text-white">Função</TableHead>
                                    <TableHead className="text-right text-white">Excluir</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {usersList.map((user) => {
                                    return(
                                        <TableRow key={user.userId} className="hover:bg-transparent border-b-separator_app">
                                            <TableCell className="font-medium text-gray_text cursor-default">{user.name}</TableCell>
                                            <TableCell className="text-gray_text cursor-default">{user.function}</TableCell>
                                            <TableCell className="text-right cursor-pointer hover:brightness-150"
                                            onClick={() => {handlerUsersList(user.userId, 'remove')}}>{<Trash size={20} color="#878787"/>}</TableCell>
                                        </TableRow>
                                        
                                    )
                                })}
                            </TableBody>
                            
                        </Table>
                        
                    </div>
                )}

                <div className="w-full py-4 text-white flex gap-6 flex-col">
                    <div className="w-full">
                        <TextArea label="Descrição" onChange={() => {}} placeholder="Preencha aqui..." value="" errorMessage="" />
                    </div>
                    
                    <div className="w-full flex items-end justify-end" >
                        <Button  variant="normal" textAlign="center" radius="8" type="submit" >
                            Criar
                        </Button>
                    </div>
                    
                </div>
            </form>
        </>
    )
}
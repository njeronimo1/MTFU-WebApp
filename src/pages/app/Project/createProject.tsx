import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { useForm } from "react-hook-form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button, Input, TextArea, Typografy } from "@mtfu/react";
import { useEffect, useState } from "react";
import { CategoriesResource, CreateProjectType, ResponsibleResource, UserResource, UsersList } from "./projectTypes";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"

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

  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"


//imgs
import { ArrowSquareOut, Trash } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { badgeVariants } from "@/components/ui/badge";
import { getResourcesForProject, postCreateProject } from "./project.request";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const createProjectFormSchema = z.object({
    title: z.string().min(4, {message:'Titulo precisa ter ao menos 4 caracteres'}),
    responsible: z.string({message: 'Campo obrigatório'}),
    category: z.string({message: 'Campo obrigatório'}),
    description: z.string().min(10, {message:"Descricao precisa ter ao menos 10 caracteres"}),
})

export function CreateProject(){

    const navigate = useNavigate();

    const [responsiblesList, setResponsiblesList] = useState<ResponsibleResource[]>([]);
    const [categoriesList, setCategoriesList] = useState<CategoriesResource[]>([]);
    const [usersList, setUsersList] = useState<UserResource[]>([]);
    const [selectUsersList, setSelectUsersList] = useState<UserResource[]>([]);

    const form = useForm<z.infer<typeof createProjectFormSchema>>({
        resolver: zodResolver(createProjectFormSchema),
        defaultValues: {
          title: '',
        },
      });

    function handleSubmitProject(data: z.infer<typeof createProjectFormSchema>){

        let userlist = selectUsersList.map((user) => {return {completedName: user.nameCompleted}});

        let createProject: CreateProjectType = {
            project: {
                category: data.category,
                description: data.description,
                responsible: data.responsible,
                title: data.title,
                createDate: new Date(),
            },
            usersList: userlist
        }

        mutation.mutate(createProject);
    }

    const {data: resourcesForProject, isPending, error} = useQuery({ queryKey: ['resources'], queryFn: getResourcesForProject})
    // Mutations
    
    const mutation = useMutation({
        mutationFn: (data: CreateProjectType) => {
            return postCreateProject(data);
        },
        onSuccess: () => {
            // Invalidate and refetch
            toast.success('Projeto criado com sucesso!');
            navigate('/project');
        },
    })

    useEffect(() => {
        if(resourcesForProject){
            setCategoriesList(resourcesForProject.categories);
            setResponsiblesList(resourcesForProject.responsibles);
            setUsersList(resourcesForProject.users);
        }
    }, [resourcesForProject]);

    function handlerUsersList(id: string, action: 'remove' | 'add'){
        console.log(`handleUsers` + id);
        if(action == 'remove'){
            let filter = selectUsersList.filter((u) => u.userId !== id);
            setSelectUsersList(filter);
        }else{
            let filter = usersList.filter((u) => u.userId == id);
            let filterIfExists = selectUsersList.filter(select => select.userId == filter[0].userId).length;

            if(filterIfExists > 0){
                toast.error('Usuario ja existe na lista!')
            }else{
                filter.push(...selectUsersList);
                setSelectUsersList(filter);
            }
            
        }
        
    }
    
    return(
        <>
            <div className="pl-4 pr-4 py-2.5 relative flex justify-between">
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
                <Link className={badgeVariants({ variant: "secondary" })} target="_blank"
                 to={"https://more-than-follow-up.gitbook.io/more-than-follow-up/como-utilizar/criando-e-acessando-um-projeto"}>
                    <span
                    className="flex gap-1">
                    Docs
                    <ArrowSquareOut size={15} />
                    </span>
                </Link>
            </div>

            <Separator className="bg-separator_app" />

            
            

            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmitProject)} className="p-4">
                <div className="w-full flex gap-4" >
                    <div className="w-1/4">
                        <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                            {/* <FormLabel>Username</FormLabel> */}
                            <FormControl>
                                <Input 
                                placeholder="Digite aqui..."
                                label="Titulo"
                                optional={false}
                                type="text"
                                variant="text"
                                errorMessage=""
                                {...field} />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                                {/* <button type="submit">Submit</button> */}
                            
                         {/* <input {...register("firstName")} /> */}
                    </div>
                    
                    <div className="w-1/4 flex flex-col gap-[0.5rem]">
                        <Typografy fontWeight={600} type="medium" color="white" children="Responsável" align="left"  />
                        <FormField
                            control={form.control}
                            name="responsible"
                            render={({ field }) => (
                                <FormItem>
                                <Select onValueChange={field.onChange} 
                                // defaultValue={field.value ? field.value.toString() : undefined}
                                >
                                    <FormControl>
                                        <SelectTrigger className="w-full h-12 bg-gray_fundo_sec_mtfu text-white border-mtfu hover:bg-mtfu focus:ring-mtfu focus:ring-offset-3">
                                            <SelectValue placeholder="Selecione um responsável" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="z-50 bg-gray_fundo_mtfu text-white border-mtfu">
                                        <SelectGroup>
                                            {responsiblesList?.map((res) => {
                                                return(
                                                    <SelectItem value={res.name} key={res.responsibleId} className="hover:bg-mtfu">{res.name}</SelectItem>
                                                )
                                            })}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                    </div>

                    <div className="w-1/4 flex flex-col gap-[0.5rem]">
                        <Typografy fontWeight={600} type="medium" color="white" children="Categoria" align="left"  />
                        <FormField
                            control={form.control}
                            name="category"
                            render={({ field }) => (
                                <FormItem>
                                <Select onValueChange={field.onChange} 
                                // defaultValue={field.value ? field.value.toString() : undefined}
                                >
                                    <FormControl>
                                        <SelectTrigger className="w-full h-12 bg-gray_fundo_sec_mtfu text-white border-mtfu hover:bg-mtfu focus:ring-mtfu focus:ring-offset-3">
                                            <SelectValue placeholder="Selecione uma categoria" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="z-50 bg-gray_fundo_mtfu text-white border-mtfu">
                                        <SelectGroup>
                                            {categoriesList?.map((cat) => {
                                                return(
                                                    <SelectItem value={cat.name} key={cat.categoryId} className="hover:bg-mtfu">{cat.name}</SelectItem>
                                                )
                                            })}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                    </div>
                </div>

                <div className="w-full flex gap-4 mt-4">
                    <div className="w-2/4 flex gap-[1rem] items-end">
                            <div className="flex flex-col gap-[0.5rem] w-1/2">
                                <Typografy fontWeight={600} type="medium" color="white" children="Usuarios" align="left"  />
                                <Select onValueChange={(e) => {handlerUsersList(e, 'add')
                                    }}>
                                    <SelectTrigger className="w-full h-12 bg-gray_fundo_sec_mtfu text-white border-mtfu hover:bg-mtfu focus:ring-mtfu focus:ring-offset-3">
                                        <SelectValue placeholder="Selecione um usuário" />
                                    </SelectTrigger>
                                    <SelectContent className="z-50 bg-gray_fundo_mtfu text-white border-mtfu">
                                        <SelectGroup>
                                            {/* <SelectItem value="1" className="hover:bg-mtfu">Nicolas Jerônimo</SelectItem> */}
                                            {usersList?.map((user) => {
                                                return(
                                                    <SelectItem 
                                                    value={user.userId} 
                                                    key={user.userId}
                                                    className="hover:bg-mtfu"
                                                    
                                                    >{user.nameCompleted}</SelectItem>
                                                )
                                            })}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            
                            {/* <div className="w-[2.5rem]">
                                <Button 
                                children={<span>Adicionar</span>} 
                                type="button" 
                                onClick={handleAddUser} 
                                radius="4" 
                                textAlign="center" 
                                variant="normal" / >
                            </div> */}
                    </div>
                </div>

                 {selectUsersList.length > 0 && (
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
                                {selectUsersList.map((user) => {
                                    return(
                                        <TableRow key={user.userId} className="hover:bg-transparent border-b-separator_app">
                                            <TableCell className="font-medium text-gray_text cursor-default">{user.nameCompleted}</TableCell>
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
                        <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                 <TextArea {...field} label="Descrição" placeholder="Preencha aqui..." errorMessage="" />
                            <FormMessage />
                            </FormItem>
                        )}
                        />

                       
                    </div>
                    
                    <div className="w-full flex items-end justify-end" >
                        <Button  variant="normal"  radius="8" type="submit" textAlign="center">
                            <span>Criar</span>
                        </Button>
                    </div>
                    
                </div>
                </form>
            </Form>
        </>
    )
}
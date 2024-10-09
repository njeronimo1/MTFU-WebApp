import { CardProject } from "@/components/Project/CardProject"
import { Pagination } from "@/components/Pagination"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { ArrowSquareOut, Backspace, MagnifyingGlass } from "phosphor-react"
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProjects, getResourcesForProject } from "./project.request"
import { useEffect, useState } from "react"
import { CategoriesResource, ProjectReturnApi, StatusResource } from "./projectTypes"
import { GenericResponsePagination, GenericReturnAPI } from "@/_types/GenericReturnAPI"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import { Badge, badgeVariants } from "@/components/ui/badge"
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { zodResolver } from "@hookform/resolvers/zod"
  import { Separator } from "@/components/ui/separator"
import { Button, Input, Typografy } from "@mtfu/react"


//img
import search from '../../../assets/search.png'
import { colors } from "@mtfu/tokens"

  
const filterFormSchema = z.object({
    search: z.string().optional(),
    category: z.string().optional(),
    status: z.string().optional(),
})

export function Project(){
    const navigate = useNavigate();
    const queryClient = useQueryClient()

    const [searchParams, setSearchParams] = useSearchParams();
    const [showBtnResetFilters, setShowBtnResetFilters] = useState(false);

    const urlParameter = searchParams.get('parameter') ?? ''
    const urlCategory = searchParams.get('category') ?? ''
    const urlStatus = searchParams.get('status') ?? ''

    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1

    const [categoriesList, setCategoriesList] = useState<CategoriesResource[]>([]);
    const [statusList, setStatusList] = useState<StatusResource[]>([]);

    // Queries
    const {data: projects} = useQuery({ 
        queryKey: ['projects', urlParameter, urlCategory, urlStatus, page], 
        queryFn: async () => {
            return await getProjects({pageNumber: page, pageSize: 10, category: urlCategory, searchText: urlParameter, status: urlStatus});
        },
        staleTime: 60 * 5000,
        placeholderData: (previousData, previousQuery) => previousData,
    })
    
    const {data: resourcesForProject} = useQuery({ 
        queryKey: ['getProjectResources'], 
        queryFn: () => {
            return getResourcesForProject() 
        } })
    
    useEffect(() => {
        if(resourcesForProject){
            setCategoriesList(resourcesForProject.categories);
            setStatusList(resourcesForProject.statusProjects);
        }
    }, [resourcesForProject]);

    const form = useForm<z.infer<typeof filterFormSchema>>({
        resolver: zodResolver(filterFormSchema),
        defaultValues: {
            category: urlCategory,
            status: urlStatus,
            search: urlParameter,
        },
        
      });

    function handleFilter(data: z.infer<typeof filterFormSchema>) {
    
        setSearchParams(params => {
          params.set('page', '1')
          params.set('parameter', data.search ? data.search : '');
          params.set('category', data.category ? data.category : '')
          params.set('status', data.status ? data.status : '')
    
          return params
        })

        
    }

    function removeFilters(){
        setShowBtnResetFilters(false);
        setSearchParams(params => {
            params.set('page', '1')
            params.delete('parameter');
            params.delete('category');
            params.delete('status');
      
            return params
          })

          form.reset({
            category: '',
            search: '',
            status: ''
          })
    }

    useEffect(() => {
        const parameter = searchParams.get('parameter');
        const category = searchParams.get('category');
        const status = searchParams.get('status');


        if(parameter !== null || category !== null || status !== null){
            setShowBtnResetFilters(true);
        }
    }, [searchParams])

    return(
        <>
            <div className=" pl-4 pr-4 py-2.5 relative flex justify-between">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/project" className="text-gray-500 hover:brightness-125 hover:text-gray-500">Projetos</BreadcrumbLink>
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
                <form onSubmit={form.handleSubmit(handleFilter)}>
                    <header className="w-full flex flex-col lg:flex-row p-4 pl-4 pr-4 items-end justify-between">
                        <div className="w-full lg:w-3/4 flex flex-col lg:flex-row gap-4">
                            <div className="w-1/4 flex  justify-start flex-col gap-1">
                                <Typografy align="left" children="Pesquisar:" color="#878787" fontWeight={400} type="footer"/>
                                
                                <FormField
                                control={form.control}
                                name="search"
                                render={({ field }) => (
                                    <FormItem>
                                    {/* <FormLabel>Username</FormLabel> */}
                                    <FormControl>
                                        <input type="text" className="bg-white w-full p-2 rounded-md h-10 outline-0 text-sm placeholder:text-gray-500 text-[#6e737e] focus:ring-gray-500 focus:ring-offset-3" 
                                        placeholder="Titulo, categoria..." 
                                        {...field}/>
                                    {/* <Input label="" variant="search" optional={false} type="text" placeholder="Titulo, categoria"
                                     errorMessage="" imgSearch={search} {/> */}
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                                
                                
                                
                            </div>

                            <div className="flex flex-col gap-1">
                                <Typografy align="left" children="Categoria:" color="#878787" fontWeight={400} type="footer"/>
                                <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                        <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={urlCategory} value={field.value}>
                                            <SelectTrigger className="w-full lg:w-52 bg-white pl-3 text-gray-500 focus:ring-gray-500 focus:ring-offset-3">
                                                <SelectValue placeholder="Selecione uma categoria" className="text-gray-500"/>
                                            </SelectTrigger>
                                            <SelectContent className="w-full lg:z-50 bg-white text-gray-500 border-gray-500">

                                                <SelectGroup>
                                                    {categoriesList?.map((cat) => {
                                                        return(
                                                            <SelectItem  value={cat.name} key={cat.categoryId} className="hover:bg-mtfu">{cat.name}</SelectItem>
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

                            <div className="flex flex-col gap-1">
                                <Typografy align="left" children="Status:" color="#878787" fontWeight={400} type="footer"/>
                                
                                <FormField
                                    control={form.control}
                                    name="status"
                                    render={({ field }) => (
                                        <FormItem>
                                        <Select onValueChange={field.onChange} defaultValue={urlStatus} value={field.value}>
                                            <SelectTrigger className="w-full lg:w-52 bg-white text-gray-500 focus:ring-gray-500 focus:ring-offset-3">
                                                <SelectValue placeholder="Selecione um status" className="text-gray-500"/>
                                            </SelectTrigger>
                                            <SelectContent className="w-full lg:z-50 bg-white text-gray-500 border-gray-500">
                                                <SelectGroup>
                                                    {statusList?.map((cat) => {
                                                        return(
                                                            <SelectItem value={cat.name} key={cat.statusProjectId} className="hover:bg-mtfu">{cat.name}</SelectItem>
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
                            <div className="relative top-[1.3rem]">
                                <Button variant="normal" className="cursor-pointer h-10" type="submit" radius="4" textAlign="center" children={<MagnifyingGlass size={20} />}></Button>
                            </div>
                            {
                                showBtnResetFilters && (
                                    <div className="relative top-[1.3rem]">
                                        <Button onClick={removeFilters} variant="normal" className="cursor-pointer h-10" type="button" radius="4" textAlign="center"  children={<div className="flex gap-1 items-center"><Backspace size={24} color={"white"} /><span className="text-sm font-medium">Remover filtros</span></div>}></Button>
                                    </div>
                                )
                            }
                            
                        </div>
                        <div className="w-full lg:w-1/4 flex lg:justify-end mt-4 lg:mt-0" onClick={() => {navigate('create-project')}}>
                            <Button  variant="normal" textAlign="center" type="button" radius="8">
                                <span>Criar um novo projeto    </span>              
                            </Button>
                        </div>
                    </header>
                </form>
            </Form>
            

            <Separator className="bg-separator_app" />

            <div className="mt-2 w-full flex flex-col justify-start items-start p-4 pl-4 pr-4 gap-4 bg-gray_fundo_sec_mtfu
            max-h-[50vh] lg:max-h-[75vh] overflow-y-auto scrollbar
                                scrollbar-track-gray_fundo_mtfu scrollbar-thumb-gray_fundo_sec_mtfu">
                <Typografy align="left" children="Lista de projetos:" color="#878787" fontWeight={400} type="footer"/>

                
                <div className="flex w-full flex-wrap gap-4">
                    
                        {projects?.data.map((project) => {
                            return(
                                <div className="w-full lg:w-[49%]" key={project.projectId}>
                                    <CardProject 
                                        title={project.title}
                                        categoria={project.category}
                                        dateDelivery={project.endDate}
                                        description={project.description}
                                        projectId={project.projectId}
                                        status={project.status}
                                        key={project.projectId}
                                        users={project.projects_Users}
                                    />
                                </div>
                            )
                        })}
                </div>

                <div className="absolute bottom-3 right-3">
                 {projects?.headers && <Pagination items={projects.headers?.TotalItemCount} page={page} pages={projects.headers?.PageCount}/>}
                  
                </div>
            </div>
            
        </>
    )
}
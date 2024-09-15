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
import { Separator } from "@/components/ui/separator"
import { Button, Input, Typografy } from "@mtfu/react"

//img
import search from '../../../assets/search.png'
import { CardProject } from "@/components/Project/CardProject"
import { PaginationComponent } from "@/components/Pagination"
import { Link, useNavigate } from "react-router-dom"
import { ArrowSquareOut } from "phosphor-react"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { getProjects } from "./project.request"
  

export function Project(){
    const navigate = useNavigate();
    const queryClient = useQueryClient()

    // Queries
    const {data, isPending, error} = useQuery({ queryKey: ['projects'], queryFn: () => {return getProjects({pageNumber: 1, pageSize: 10}) } })

    // console.log(data?.$values);
    // Mutations
    // const mutation = useMutation({
    //     mutationFn: postTodo,
    //     onSuccess: () => {
    //     // Invalidate and refetch
    //     queryClient.invalidateQueries({ queryKey: ['todos'] })
    //     },
    // })

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

            <header className="w-full flex flex-col lg:flex-row p-4 pl-4 pr-4 items-end justify-between">
                <div className="w-full lg:w-3/4 flex flex-col lg:flex-row  gap-4">
                    <div className="w-1/4 flex  justify-start flex-col gap-1">
                        <Typografy align="left" children="Pesquisar:" color="#878787" fontWeight={400} type="footer"/>
                        <Input label="" variant="search" optional={false} type="text" placeholder="Titulo, categoria"
                        errorMessage="" imgSearch={search} onChange={() => {}}/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Typografy align="left" children="Categoria:" color="#878787" fontWeight={400} type="footer"/>
                        <Select>
                            <SelectTrigger className="w-full lg:w-52 bg-white pl-3 text-gray-500 focus:ring-gray-500 focus:ring-offset-3">
                                <SelectValue placeholder="Selecione uma categoria" />
                            </SelectTrigger>
                            <SelectContent className="w-full lg:z-50 bg-white text-gray-500 border-gray-500">
                                <SelectGroup>
                                    {/* <SelectLabel>Fruits</SelectLabel> */}
                                    <SelectItem value="1" className="hover:bg-mtfu">Sprint 1</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Typografy align="left" children="Status:" color="#878787" fontWeight={400} type="footer"/>
                        <Select>
                            <SelectTrigger className="w-full lg:w-52 bg-white text-gray-500 focus:ring-gray-500 focus:ring-offset-3">
                                <SelectValue placeholder="Selecione um status" />
                            </SelectTrigger>
                            <SelectContent className="w-full lg:z-50 bg-white text-gray-500 border-gray-500">
                                <SelectGroup>
                                    {/* <SelectLabel>Fruits</SelectLabel> */}
                                    <SelectItem value="1" className="hover:bg-mtfu">Sprint 1</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="w-full lg:w-1/4 flex lg:justify-end mt-4 lg:mt-0" onClick={() => {navigate('create-project')}}>
                    <Button  variant="normal" textAlign="center" radius="8">
                        <span>Criar um novo projeto    </span>              
                    </Button>
                </div>
            </header>

            <Separator className="bg-separator_app" />

            <div className="mt-2 w-full flex flex-col justify-start items-start p-4 pl-4 pr-4 gap-4 bg-gray_fundo_sec_mtfu
            max-h-[50vh] lg:max-h-[75vh] overflow-y-auto scrollbar
                                scrollbar-track-gray_fundo_mtfu scrollbar-thumb-gray_fundo_sec_mtfu">
                <Typografy align="left" children="Lista de projetos:" color="#878787" fontWeight={400} type="footer"/>

                
                <div className="flex w-full flex-wrap gap-4">
                    
                        {data?.map((project) => {
                            return(
                                <div className="w-full lg:w-[49%]">
                                    <CardProject 
                                        title={project.title}
                                        categoria={project.category}
                                        dateDelivery={project.endDate}
                                        description={project.description}
                                        projectId={project.projectId}
                                        sprints={0}
                                        key={project.projectId}
                                        users={project.projects_Users}
                                    />
                                </div>
                            )
                        })}
                </div>

                <div className="absolute bottom-3">
                  <PaginationComponent />
                </div>
            </div>
            
        </>
    )
}
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Avatar, Status, Typografy } from "@mtfu/react";
import { UserPlus } from "phosphor-react";
import { useParams } from "react-router-dom";

export function ProjectDetail(){

    const { id } = useParams();

    return (
        <>
            <div className="p-2 pl-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/project" className="text-gray-500 hover:brightness-125 hover:text-gray-500">Projetos</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/project/${id}`} className="text-gray-500 hover:brightness-125 hover:text-gray-500">/ Editar projeto</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <Separator className="bg-separator_app" />

            <div className="flex w-full">
                <div className="pl-10 py-4 w-1/3 border-r border-separator_app pr-4">
                    <div>
                        <Typografy align="left" children="Projeto teste" color="white" fontWeight={500} type="title" />
                        <div className="flex py-2">
                            <div className="">
                                <Avatar src="" alt="Nicolas" />
                            </div>
                            <div className="ml-[-0.5rem]">
                                <Avatar src="" alt="Nicolas" className="border-2"/>
                            </div>
                            <div className="ml-[-0.5rem]">
                                <Avatar src="" alt="Nicolas" />
                            </div>
                            <div className="ml-[-0.5rem] ">
                                <Avatar src="" alt="Nicolas" />
                            </div>
                            <div className="flex cursor-default border-2 border-gray_fundo_sec_mtfu items-center justify-center text-center ml-[-0.5rem] rounded-full bg-[#300076] w-[2.55rem] h-[2.55rem]">
                                <Typografy align="center" children="+1" color="white" fontWeight={500} type="medium" />
                            </div>
                            <div className="flex ml-2  cursor-pointer hover:opacity-70 transition-opacity items-center justify-center text-center rounded-full bg-purple-700 w-[2.55rem] h-[2.55rem]">
                                <UserPlus size={20} color="white" />
                            </div>

                            <div className="flex items-center gap-2 ml-5">
                                <Status color="yellow" ></Status>
                                <Typografy align="center" children="Em andamento" color="white" fontWeight={400} type="medium" />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full gap-2 mt-2">
                        <div className="bg-gray_fundo_mtfu pl-6 py-4 pr-4 pb-4 rounded-sm w-1/2">
                            <Typografy align="left" children="3" color="white" fontWeight={600} type="title" />
                            <Typografy align="left" children="Total sprints" color="white" fontWeight={400} type="medium" />
                        </div>
                        <div className="bg-gray_fundo_mtfu pl-6 py-4 pr-4 pb-4 rounded-sm w-1/2">
                            <Typografy align="left" children="52" color="white" fontWeight={600} type="title" />
                            <Typografy align="left" children="Tasks completas" color="white" fontWeight={400} type="medium" />
                        </div>
                    </div>
                </div>
                
                

                <div className="p-4 w-2/3">
                    <div className="flex gap-4">
                        <Typografy align="left" children="Fase:" color="white" fontWeight={400} type="medium" />
                        
                        <Select>
                            <SelectTrigger className="w-1/6 bg-gray_fundo_sec_mtfu text-white
                             border-mtfu hover:bg-mtfu focus:ring-mtfu focus:ring-offset-3 h-[1.8rem]">
                                <SelectValue placeholder="Selecione um projeto" />
                            </SelectTrigger>
                            <SelectContent className="z-50 bg-gray_fundo_mtfu text-white border-mtfu">
                                <SelectGroup>
                                    <SelectItem value="1" className="hover:bg-mtfu">More than follow up</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="flex w-full  mt-2">
                        <div className="w-2/3 flex flex-wrap gap-2">
                            <div className=" bg-gray_fundo_mtfu pl-6 py-4 pr-4 pb-4 rounded-sm w-[49%]">
                                <Typografy align="left" children="1" color="white" fontWeight={600} type="title" />
                                <Typografy align="left" children="Total sprints" color="white" fontWeight={400} type="medium" />
                            </div>
                            <div className="bg-gray_fundo_mtfu pl-6 py-4 pr-4 pb-4 rounded-sm w-[49%]">
                                <Typografy align="left" children="5" color="white" fontWeight={600} type="title" />
                                <Typografy align="left" children="Tasks completas" color="white" fontWeight={400} type="medium" />
                            </div>
                            <div className=" bg-gray_fundo_mtfu pl-6 py-4 pr-4 pb-4 rounded-sm w-[49%]">
                                <Typografy align="left" children="10" color="white" fontWeight={600} type="title" />
                                <Typografy align="left" children="Total tasks" color="white" fontWeight={400} type="medium" />
                            </div>
                            <div className="bg-gray_fundo_mtfu pl-6 py-4 pr-4 pb-4 rounded-sm w-[49%]">
                                <Typografy align="left" children="5" color="white" fontWeight={600} type="title" />
                                <Typografy align="left" children="Tasks à fazer" color="white" fontWeight={400} type="medium" />
                            </div>
                        </div>
                        
                        
                        <div className="ml-2 w-1/3">
                            <div className="bg-mtfu p-2 rounded-sm">
                                <Typografy align="left" children="Conclusão da fase" color="white" fontWeight={400} type="medium" />
                            </div>
                        </div>
                    </div>
                    
                
                </div>
            </div>

            <Separator className='bg-separator_app' />
        </>
    )
}
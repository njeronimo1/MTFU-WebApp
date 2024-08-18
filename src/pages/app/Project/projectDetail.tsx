import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Avatar, Typografy } from "@mtfu/react";
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
                <div className="pl-4 py-4 w-1/3">
                    <div>
                        <Typografy align="left" children="Projeto teste" color="white" fontWeight={500} type="title" />
                        <div className="flex py-2">
                            <div className="">
                                <Avatar src="" alt="Nicolas" />
                            </div>
                            <div className="relative right-2">
                                <Avatar src="" alt="Nicolas"/>
                            </div>
                            <div className="relative right-4">
                                <Avatar src="" alt="Nicolas" />
                            </div>
                            <div className="relative right-6 ">
                                <Avatar src="" alt="Nicolas" />
                            </div>
                            <div className="flex items-center justify-center text-center relative right-6 rounded-full bg-purple-700 w-[2.8rem] h-[42px]">
                                {/* <span>+1</span> */}
                                <Typografy align="center" children="+1" color="white" fontWeight={500} type="medium" />
                            </div>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </>
    )
}
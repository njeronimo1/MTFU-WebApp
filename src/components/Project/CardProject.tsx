import { Avatar, Typografy } from "@mtfu/react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { ArrowSquareOut } from "phosphor-react";
import { useNavigate } from "react-router-dom";
  
import { format, compareAsc } from "date-fns";

interface CardProjectProps{
    projectId: number | string,
    title: string,
    description: string,
    dateDelivery: string,
    sprints: number,
    categoria: string,
    users?: string[],
}

export function CardProject({projectId, title, description, sprints, categoria, users}:CardProjectProps){
    const navigate = useNavigate();

    return(
        <TooltipProvider>
            <Tooltip key={projectId}>
                <TooltipTrigger className="w-full">
                    <div onClick={() => {navigate(`/project/${projectId}`)}} 
                    className="w-full rounded-xl bg-gray_fundo_mtfu p-4 hover:bg-gray_hover cursor-pointer ease-in duration-300">
                        <header className="w-full flex justify-between">
                            <Typografy align="left" children={title} color="white" fontWeight={500} type="title" />

                            <div className="flex gap-2">
                                {users?.map((usr) => {
                                    return(
                                        <Avatar alt={usr.split(' ')[0].slice(0, 1) + usr.split(' ')[1].slice(0, 1)} />
                                    )
                                })}
                            </div>
                        </header>

                        <div className="mt-4 w-full">
                            <Typografy align="left" children={description} 
                            color="#878787" fontWeight={400} type="footer" />
                        </div>

                        <div className="flex w-full gap-2 mt-4">
                            <div className="w-3/4 gap-2 flex">
                                {/* <Typografy align="left" children={dateDelivery} color="#878787" fontWeight={400} type="footer" /> */}
                                <Typografy align="left" children={'Sprints: ' + sprints} color="#878787" fontWeight={400} type="footer" />
                                <Typografy align="left" children={"Categoria: " + categoria} color="#878787" fontWeight={400} type="footer" />
                            </div>
                            <div className="1/4">
                                <div className="w-full bg-red-600 rounded-lg h-2"></div>
                            </div>
                        </div>
                    </div>
                </TooltipTrigger>

                <TooltipContent align="end" className="bg-gray_fundo_mtfu border-none flex gap-2 cursor-pointer" >
                    <Typografy align="left" children="Visualizar projeto" color="#878787" fontWeight={400} type="footer" />
                    <ArrowSquareOut size={20} color="#878787" />
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

        
    )
}
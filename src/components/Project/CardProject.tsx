import { Avatar, Status, Typografy } from "@mtfu/react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
  import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import { ArrowSquareOut, FileCss } from "phosphor-react";
import { useNavigate } from "react-router-dom";
  
import { format, compareAsc } from "date-fns";

interface CardProjectProps{
    projectId: number | string,
    title: string,
    description: string,
    dateDelivery: string,
    status: string,
    categoria: string,
    users?: string[],
}

export function CardProject({projectId, title, description, status, categoria, users}:CardProjectProps){
    const navigate = useNavigate();

    return(
        <TooltipProvider>
            <Tooltip key={projectId}>
                <TooltipTrigger className="w-full">
                    <div onClick={() => {navigate(`/project/${projectId}`)}} 
                    className="w-full rounded-xl bg-gray_fundo_mtfu p-4 hover:bg-gray_hover cursor-pointer ease-in duration-300">
                        <header className="w-full flex justify-between">
                            <div className="w-1/2">
                                <Typografy align="left" children={title} color="white" fontWeight={500} type="title" />
                            </div>

                            <div className="flex gap-2">
                                {users?.map((usr, i) => {
                                    return(
                                        <>{i <= 3 ? 
                                            <HoverCard>
                                                <HoverCardTrigger>
                                                    <Avatar alt={usr.split(' ')[0].slice(0, 1) + usr.split(' ')[1].slice(0, 1)} />
                                                </HoverCardTrigger>
                                                <HoverCardContent className="w-50 bg-[#09090b]  border-0 shadow shadow-mtfu  p-2">
                                                <div className="flex justify-between items-center space-x-4">
                                                    <div className="flex flex-col items-center bg-mtfu p-2 rounded-sm">
                                                        <FileCss size={32} color="white"/>
                                                        <span className="text-white text-xs font-light">Front-end</span>
                                                    </div>
                                                    
                                                    {/* <Avatar alt={usr.split(' ')[0].slice(0, 1) + usr.split(' ')[1].slice(0, 1)} /> */}
                                                    
                                                    <div className="space-y-1">
                                                        <p className="text-sm font-medium text-white">
                                                            {usr}
                                                        </p>
                                                        <div className="flex items-center pt-0">
                                                        {/* <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "} */}
                                                        <span className="text-xs text-gray_text">
                                                            Ingressou em Outubro de 2024
                                                        </span>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    
                                                </HoverCardContent>
                                            </HoverCard>
                                             
                                        
                                        : <></>}</>
                                    )
                                })}

                                {users && users.length > 4 && (
                                    <div className="flex cursor-default  items-center justify-center text-center rounded-full bg-[#300076] w-[2.7rem] h-[2.75rem]">
                                        <Typografy align="center" children={`+${users.length - 4}`} color="white" fontWeight={500} type="medium" />
                                    </div>  
                                )}
                                
                            </div>
                              
                        </header>

                        <div className="mt-4 w-full">
                            <Typografy align="left" children={description} 
                            color="#878787" fontWeight={400} type="footer" />
                        </div>

                        <div className="flex w-full gap-2 mt-4">
                            <div className="w-3/4 gap-2 flex">
                                <Typografy align="left" children={<div className="flex items-center gap-2"> <Status color={status == "Concluído" ? "green" : status == "Em revisão" ? "red" : status == "Não iniciado" ? "purple" : "yellow"} /> <span>{status}</span></div>} color="#878787" fontWeight={400} type="footer" />
                                
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
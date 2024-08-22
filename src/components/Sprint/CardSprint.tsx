import { Avatar, Status, Typografy } from "@mtfu/react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"
import { ArrowSquareOut, UserPlus } from "phosphor-react";
import { useNavigate } from "react-router-dom";
  

interface CardSprintProps{
    sprintId: number | string,
    projectId: number | string,
    faseId: number | string,
    title: string,
    description: string,
    status: 'Em andamento' | 'Nao iniciada' | 'Finalizada',
    users?: {},
}

export function CardSprint({projectId, sprintId, faseId, title, description, status, users}:CardSprintProps){
    const navigate = useNavigate();

    return(
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div onClick={() => {navigate(`/sprint/${sprintId}`)}} 
                    className="w-full min-w-[22rem] rounded-xl bg-gray_fundo_mtfu py-3 pl-3 pr-3 hover:bg-gray_hover cursor-pointer ease-in duration-300">
                        <header className="w-full flex justify-between">
                            <Typografy align="left" children={title} color="white" fontWeight={500} type="title" />

                            {/* <div className="flex gap-2">
                                <Avatar />
                                <Avatar />
                                <Avatar />
                            </div> */}
                        </header>

                        <div className="mt-4 w-full">
                            <Typografy align="left" children={description} 
                            color="#878787" fontWeight={400} type="footer" />
                        </div>

                        <div className="flex w-full gap-2 mt-1 justify-between items-center">
                            <div className="w-2/4 gap-2 flex">
                                <Status color="yellow" />
                                <Typografy align="left" children={status} color="#878787" fontWeight={400} type="footer" />
                            </div>

                            <div className="flex pt-2 w-2/4 justify-end">
                                <div className="">
                                    <Avatar src="" alt="Nicolas" />
                                </div>
                                <div className="ml-[-0.5rem]">
                                    <Avatar src="" alt="Nicolas" className="border-2"/>
                                </div>
                                <div className="ml-[-0.5rem]">
                                    <Avatar src="" alt="Nicolas" />
                                </div>
                                <div className="flex cursor-default border-2 border-gray_fundo_sec_mtfu items-center justify-center text-center ml-[-0.5rem] rounded-full bg-[#300076] w-[2.55rem] h-[2.55rem]">
                                    <Typografy align="center" children="+1" color="white" fontWeight={500} type="medium" />
                                </div>                                
                            </div>
                        </div>
                    </div>
                </TooltipTrigger>

                <TooltipContent align="end" className="bg-gray_fundo_mtfu border-none flex gap-2 cursor-pointer" >
                    <Typografy align="left" children="Visualizar sprint" color="#878787" fontWeight={400} type="footer" />
                    <ArrowSquareOut size={20} color="#878787" />
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>

        
    )
}
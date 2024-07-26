import { Typografy } from "@mtfu/react"
import { ArrowSquareOut, FigmaLogo, FileCode, Kanban, TestTube } from "phosphor-react"

interface CardUserProps{
    title: string,
    status: 'Em andamento' | 'Finalizado' | 'Homologacao',
    dateInital: string,
    dateEnd: string,
    taskId: string,
    sprint: string,
    type: 'frontend' | 'backend' | 'designer' | 'tester'
}

export function CardUser({title, dateEnd, dateInital, sprint, status, type}: CardUserProps){
    return (
        <>
            <div className="flex flex-col hover:brightness-125 cursor-default pl-2 ">
                {/* //list of tasks */}

                <div className="flex gap-4 w-full items-center">
                    <div className="w-1/12 flex items-center justify-center">
                        {type == 'frontend' && (
                            <div className="bg-mtfu rounded-full p-1.5">
                                <Kanban size={24} color="white"/>
                            </div>
                        )}

                        {type == 'backend' && (
                            <div className="bg-mtfu rounded-full p-1.5">
                                <FileCode size={24} color="white" />
                            </div>
                        )}

                        {type == 'designer' && (
                            <div className="bg-mtfu rounded-full p-1.5">
                            <FigmaLogo size={24} color="white" />
                            </div>
                        )}

                        {type == 'tester' && (
                            <div className="bg-mtfu rounded-full p-1.5">
                            <TestTube size={24} color="white" />
                            </div>
                        )}
                        
                    </div>
                    <div className="flex flex-col w-10/12">
                        <div className="w-full">
                            <Typografy align="left" children={title} color="white" fontWeight={400} type="description"/>
                        </div>
                        <div className="w-full flex flex-col 2xl:flex-row 2xl:gap-2">
                            <div className="flex gap-2">
                            <Typografy align="left" children={status} color="#878787" fontWeight={400} type="footer"/>
                            
                            </div>
                            <div className="flex xl:gap-2 flex-col xl:flex-row">
                            <Typografy align="left" children={dateInital} color="#878787" fontWeight={400} type="footer"/>
                            <Typografy align="left" children={dateEnd} color="#878787" fontWeight={400} type="footer"/>
                                <div>
                                    <Typografy align="left" children={`Sprint: ${sprint}`} color="#878787" fontWeight={400} type="footer"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="1/12">
                        <ArrowSquareOut size={24} color="#878787" />
                    </div>
                </div>
            </div>
        </>
    )
}
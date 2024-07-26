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
            <div className="flex flex-col hover:brightness-125 cursor-default ">
                {/* //list of tasks */}

                <div className="flex gap-3 w-full items-center">
                    <div className="bg-mtfu w-2/12 rounded-full py-2.5 flex items-center justify-center">
                        {type == 'frontend' && (
                            <Kanban size={24} color="white"/>
                        )}

                        {type == 'backend' && (
                            <FileCode size={30} color="white" />
                        )}

                        {type == 'designer' && (
                            <FigmaLogo size={30} color="white" />
                        )}

                        {type == 'tester' && (
                            <TestTube size={30} color="white" />
                        )}
                        
                    </div>
                    <div className="flex flex-col w-10/12">
                        <div className="w-full">
                            <Typografy align="left" children={title} color="white" fontWeight={400} type="description"/>
                        </div>
                        <div className="w-full flex gap-2">
                            <Typografy align="left" children={status} color="#878787" fontWeight={400} type="footer"/>
                            <Typografy align="left" children={dateInital} color="#878787" fontWeight={400} type="footer"/>
                            <Typografy align="left" children={dateEnd} color="#878787" fontWeight={400} type="footer"/>
                            <Typografy align="left" children={`Sprint: ${sprint}`} color="#878787" fontWeight={400} type="footer"/>
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
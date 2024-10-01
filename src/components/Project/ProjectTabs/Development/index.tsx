import { CardSprint } from "@/components/Sprint/CardSprint";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { api } from "@/lib/axios";
import { tabs } from "@/pages/app/Project/projectDetail";
import { Button, Input, Typografy } from "@mtfu/react";
import { colors } from "@mtfu/tokens";
import { ArrowRight, Clock, PlusCircle, Trash } from "phosphor-react";
import { useState } from "react";
import { toast } from "react-toastify";

interface DevelopmentProject {
    projectId: string;
    setTabActive: (e: tabs) => void;
}
export function Development({projectId, setTabActive}:DevelopmentProject){


    const [openModalAvanceFase, setOpenModalAvanceFase] = useState(false);

    async function avanceFase(){
        let avance = await toast.promise(
            api.post('/'),
            {
              pending: 'Processando...',
              success: 'Fase avancada com sucesso!, agora o projeto esta em Analise de requisitos👌',
              error: 'Erro ao avancar de fase... 🤯'
            }
        );

        if(avance.status == 200) {
            setTabActive("develop");
        }

        setOpenModalAvanceFase(false);
    }

    async function saveAlters(){
        await toast.promise(
            api.post('/'),
            {
              pending: 'Salvando alteracoes...',
              success: 'Alteracoes salvas com sucesso!',
              error: 'Erro ao salvar alteracoes 🤯'
            }
        );

        setOpenModalAvanceFase(false);
    }

    return(
        <div className="flex flex-col gap-2 mt-0 relative ">
            <div className="sticky top-12 flex gap-2 py-4 z-[50] flex-col bg-gray_fundo_sec_mtfu">
                <Typografy align="left" children="Desenvolvimento e testes" color="white" fontWeight={500} type="title" />
                <Typografy align="left" children="Aqui é cadastrado os links principais da aplicaçao e modulos, para acompanhamento das storys e tasks do desenvolvimento em geral."
                color="#878787" fontWeight={400} type="footer" />

                <div className="bg-gray_fundo_mtfu rounded-sm py-1 pl-2 pr-2 absolute right-1 h-10 top-0 w-[40%] xl:w-[30%] 2xl:w-[22%] flex items-center justify-around">
                    <div className="w-[45%] border-r flex pl-2 pr-2 gap-1">
                        <Typografy align="left" children="Data inicio: " color="white" fontWeight={400} type="footer" />
                        <Typografy align="left" children="12/02/2024" color="#878787" fontWeight={400} type="footer" />
                    </div>
                    <div className="w-[45%] flex pl-2 pr-2 gap-1" >
                        <Typografy align="left" children="Ultima att: " color="white" fontWeight={400} type="footer" />
                        <Typografy align="left" children="27/02/2024" color="#878787" fontWeight={400} type="footer" />
                    </div>
                    <div className="rounded-md p-2 flex items-center justify-center h-10 hover:bg-mtfu transition-colors cursor-pointer">
                        <Clock size={20}  color="white" />
                    </div>
                    
                </div>

                <Separator className="bg-separator_app" />
            </div>
            <Typografy align="left" children="Links relacionados:" color="white" fontWeight={500} type="title" />
            <div className="mt-2 gap-4 flex w-full items-center">
                
                <div className="w-1/4">
                    <Input
                        label="Titulo"
                        variant="text"
                        optional={false}
                        
                        type="text"
                        placeholder="Preencha aqui..."
                        errorMessage=""
                        
                        onChange={() => {}}
                        className="w-full mt-2" 
                    />
                </div>
                
                <div className="w-1/4">
                    <Input
                        label="Link"
                        variant="text"
                        optional={false}
                        type="text"
                        placeholder="Preencha aqui..."
                        errorMessage=""
                        onChange={() => {}}
                        className="w-full mt-2" 
                    />
                </div>
                <PlusCircle size={32} color={colors.mtfu} className="relative top-4 cursor-pointer hover:opacity-70 transition-opacity"/>
                
                
             </div>

             <div className="flex flex-col w-1/2 h-32 overflow-y-auto" >
                <div className="flex w-full items-center gap-2 ">
                    <div className="flex w-full items-center justify-between cursor-pointer hover:opacity-65 transition-opacity bg-gray_fundo_mtfu p-3">
                        <Typografy align="left" children="Homolog" color="white" fontWeight={600} type="medium" />
                        <ArrowRight size={24}  color="white"/>
                    </div>
                    <Trash size={32} color="white" className="cursor-pointer hover:opacity-70 transition-opacity"/>
                </div>
                <div className="flex w-full items-center gap-2 ">
                    <div className="flex w-full items-center justify-between cursor-pointer hover:opacity-65 transition-opacity bg-gray_fundo_mtfu p-3">
                        <Typografy align="left" children="Homolog" color="white" fontWeight={600} type="medium" />
                        <ArrowRight size={24}  color="white"/>
                    </div>
                    <Trash size={32} color="white" className="cursor-pointer hover:opacity-70 transition-opacity"/>
                </div>
                <div className="flex w-full items-center gap-2 ">
                    <div className="flex w-full items-center justify-between cursor-pointer hover:opacity-65 transition-opacity bg-gray_fundo_mtfu p-3">
                        <Typografy align="left" children="Homolog" color="white" fontWeight={600} type="medium" />
                        <ArrowRight size={24}  color="white"/>
                    </div>
                    <Trash size={32} color="white" className="cursor-pointer hover:opacity-70 transition-opacity"/>
                </div>
                <div className="flex w-full items-center gap-2 ">
                    <div className="flex w-full items-center justify-between cursor-pointer hover:opacity-65 transition-opacity bg-gray_fundo_mtfu p-3">
                        <Typografy align="left" children="Homolog" color="white" fontWeight={600} type="medium" />
                        <ArrowRight size={24}  color="white"/>
                    </div>
                    <Trash size={32} color="white" className="cursor-pointer hover:opacity-70 transition-opacity"/>
                </div>
                <div className="flex w-full items-center gap-2 ">
                    <div className="flex w-full items-center justify-between cursor-pointer hover:opacity-65 transition-opacity bg-gray_fundo_mtfu p-3">
                        <Typografy align="left" children="Homolog" color="white" fontWeight={600} type="medium" />
                        <ArrowRight size={24}  color="white"/>
                    </div>
                    <Trash size={32} color="white" className="cursor-pointer hover:opacity-70 transition-opacity"/>
                </div>
                
             </div>
             <div className="text-white cursor-pointer hover:opacity-65 transition-opacity">Ver mais</div>







             <Separator  className="bg-separator_app" />

            <div className="w-full overflow-x-scroll flex gap-4 py-2 items-center justify-start">
                <CardSprint projectId={projectId} faseId={1} sprintId={1} description="
                Sprint criada com objetivo de finalizar a parte inicial do More than follow up" status="Em andamento"
                title="Sprint 1 - Planejamento MTFU" users={[]}/>

                <CardSprint projectId={projectId} faseId={1} sprintId={1} description="
                Sprint criada com objetivo de finalizar a parte inicial do More than follow up" status="Em andamento"
                title="Sprint 1 - Planejamento MTFU" users={[]}/>

                <CardSprint projectId={projectId} faseId={1} sprintId={1} description="
                Sprint criada com objetivo de finalizar a parte inicial do More than follow up" status="Em andamento"
                title="Sprint 1 - Planejamento MTFU" users={[]}/>

                <CardSprint projectId={projectId} faseId={1} sprintId={1} description="
                Sprint criada com objetivo de finalizar a parte inicial do More than follow up" status="Em andamento"
                title="Sprint 1 - Planejamento MTFU" users={[]}/>
                
                <CardSprint projectId={projectId} faseId={1} sprintId={1} description="
                Sprint criada com objetivo de finalizar a parte inicial do More than follow up" status="Em andamento"
                title="Sprint 1 - Planejamento MTFU" users={[]}/>
            </div>

            <div className="sticky bottom-2 w-full flex justify-end py-2 gap-2">
                <Button variant="normal" textAlign="center" radius="4" type="button" onClick={saveAlters}><span>Salvar alteracoes</span></Button>

                <Dialog open={openModalAvanceFase} onOpenChange={setOpenModalAvanceFase}>
                    <DialogTrigger asChild>
                        <Button variant="normal" textAlign="center" radius="4" onClick={() => {setOpenModalAvanceFase(true)}}><span>Avancar fase</span></Button>
                    </DialogTrigger>
                    <DialogContent className="bg-gray_fundo_mtfu text-white border-0">
                        
                        <DialogHeader className="text-white">
                            <DialogTitle className="text-white">Voce realmente deseja avancar de fase?</DialogTitle>
                            <DialogDescription>
                            Ao avançar de fase você ainda poderá voltar e salvar alterações, mas não poderá criar nenhuma sprint vinculada a fase de planejamento do projeto.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button variant="normal" textAlign="center" radius="4" onClick={() => {setOpenModalAvanceFase(false)}}><span>Cancelar</span></Button>
                            <Button variant="normal" textAlign="center" radius="4" 
                            onClick={avanceFase}><span>Sim</span></Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                
            </div>
        </div>
    )
}
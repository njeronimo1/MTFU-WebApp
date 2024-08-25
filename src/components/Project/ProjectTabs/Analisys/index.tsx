import { Editor } from "@/components/Editor/Editor";
import { Separator } from "@/components/ui/separator";
import { Button, Input, TextArea, Typografy } from "@mtfu/react";
import { Block } from "@blocknote/core";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CardSprint } from "@/components/Sprint/CardSprint";

import { toast } from 'react-toastify';
import { PlusCircle, Trash } from 'phosphor-react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { api } from "@/lib/axios";
import { tabs } from "@/pages/app/Project/projectDetail";
import { colors } from "@mtfu/tokens";
  

interface PlanningProject {
    projectId: string;
    setTabActive: (e: tabs) => void;
}

export function AnalysisProject({projectId, setTabActive} : PlanningProject){

    const [openModalAvanceFase, setOpenModalAvanceFase] = useState(false);
    const [openModalReqDirect, setOpenModalReqDirect] = useState(false);
    const [openModalReqNotDirect, setOpenModalReqNotDirect] = useState(false);


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
            setTabActive("analysis");
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

    function saveReqs(req: 'funcional' | 'nfuncional'){
        setOpenModalReqDirect(false);
    }


    return(
        <div className="flex flex-col gap-2 mt-0 ">
            <div className="sticky top-12 flex gap-2 py-4 z-[50] flex-col bg-gray_fundo_sec_mtfu">
                <Typografy align="left" children="Analise de requisitos" color="white" fontWeight={500} type="title" />
                <Typografy align="left" children="Aqui voce pode criar todos os requisitos que seu projeto necessita! (ex: requisitos funcionais e nao-funcionais)"
                color="#878787" fontWeight={400} type="footer" />

                <Separator className="bg-separator_app" />
            </div>
            

             {/* <Typografy align="left" children="Link para documentacao em outro site?" color="white" fontWeight={400} type="medium" /> */}
             <div className="mt-2 flex gap-4">

                <Dialog open={openModalReqDirect} onOpenChange={setOpenModalReqDirect} >
                    <DialogTrigger asChild>
                    <div className="bg-gray_fundo_mtfu p-4 w-52 rounded-md min-h-28 flex flex-col justify-between
                    transition-shadow hover:opacity-95 hover:shadow hover:shadow-mtfu cursor-pointer"
                    onClick={() => {setOpenModalReqDirect(true)}}>
                        <Typografy align="center" children="Diretos ou funcionais" color="#878787" fontWeight={500} type="footer" />

                        <div className="w-full flex items-center justify-center">
                            
                        <PlusCircle size={40} color={colors.mtfu} />
                            
                        </div>
                    </div>
                    </DialogTrigger>
                    <DialogContent className="bg-gray_fundo_mtfu text-white border-0 max-w-[800px]">
                        
                        <DialogHeader className="text-white">
                            <DialogTitle className="text-white text-lg font-normal" >Requisitos diretos ou funcionais</DialogTitle>
                            <DialogDescription className="font-light text-xs">
                            Obs: fornecemos um exemplo de estrutura simples para criação dos requisitos com o objetivo de ter uma documentação básica e de fácil acesso.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="mt-2 flex flex-col gap-4">
                            <Input
                                label="Funcao ou acao"
                                variant="text"
                                optional={false}
                                type="text"
                                placeholder="Preencha aqui..."
                                errorMessage=""
                                onChange={() => {}}
                                className="w-1/2 mt-2" 
                            />

                            <TextArea 
                            label="Comportamento do sistema"
                            errorMessage=""
                            onChange={() => {}}
                            placeholder="Preencha aqui..."
                            value=""/>

                            <div className="w-full flex justify-end">
                                <Button type="button" radius="4" textAlign="center" variant="normal"
                                onClick={() => {}}> <span>Criar</span> </Button>
                            </div>

                            <Separator className="bg-separator_app" />

                            <div className="max-h-60 overflow-y-auto p-2 flex flex-col gap-4">
                                <div className="bg-gray_fundo_sec_mtfu rounded-md p-4 relative flex flex-col gap-4">
                                    <div className="flex flex-col">
                                        <Typografy align="left" children="Funcao:" color="white" fontWeight={400} type="medium" />
                                        <Typografy align="left" children="Funcao ou acao do usuario aqui" color="#878787" fontWeight={400} type="footer" />

                                    </div>

                                    <div className="flex flex-col">
                                        <Typografy align="left" children="Comportamento do sistema:" color="white" fontWeight={400} type="medium" />
                                        <Typografy align="left" children="Comportamento aqui" color="#878787" fontWeight={400} type="footer" />

                                    </div>
                                    
                                    <div className="absolute bottom-3 right-3 cursor-pointer transition-opacity hover:opacity-75">
                                        <Trash size={20} />
                                    </div>
                                    
                                </div>

                                <div className="bg-gray_fundo_sec_mtfu rounded-md p-4 relative flex flex-col gap-4">
                                    <div className="flex flex-col">
                                        <Typografy align="left" children="Funcao:" color="white" fontWeight={400} type="medium" />
                                        <Typografy align="left" children="Funcao ou acao do usuario aqui" color="#878787" fontWeight={400} type="footer" />

                                    </div>

                                    <div className="flex flex-col">
                                        <Typografy align="left" children="Comportamento do sistema:" color="white" fontWeight={400} type="medium" />
                                        <Typografy align="left" children="Comportamento aqui" color="#878787" fontWeight={400} type="footer" />

                                    </div>
                                    
                                    <div className="absolute bottom-3 right-3 cursor-pointer transition-opacity hover:opacity-75">
                                        <Trash size={20} />
                                    </div>
                                    
                                </div>

                                <div className="bg-gray_fundo_sec_mtfu rounded-md p-4 relative flex flex-col gap-4">
                                    <div className="flex flex-col">
                                        <Typografy align="left" children="Funcao:" color="white" fontWeight={400} type="medium" />
                                        <Typografy align="left" children="Funcao ou acao do usuario aqui" color="#878787" fontWeight={400} type="footer" />

                                    </div>

                                    <div className="flex flex-col">
                                        <Typografy align="left" children="Comportamento do sistema:" color="white" fontWeight={400} type="medium" />
                                        <Typografy align="left" children="Comportamento aqui" color="#878787" fontWeight={400} type="footer" />

                                    </div>
                                    
                                    <div className="absolute bottom-3 right-3 cursor-pointer transition-opacity hover:opacity-75">
                                        <Trash size={20} />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </DialogContent>
                </Dialog>
                <Dialog open={openModalReqDirect} onOpenChange={setOpenModalReqDirect} >
                    <DialogTrigger asChild>
                    <div className="bg-gray_fundo_mtfu p-4 w-52 rounded-md min-h-28 flex flex-col justify-between
                    transition-shadow hover:opacity-95 hover:shadow hover:shadow-mtfu cursor-pointer"
                    onClick={() => {setOpenModalReqDirect(true)}}>
                        <Typografy align="center" children="Inderetos ou nao-funcionais" color="#878787" fontWeight={500} type="footer" />

                        <div className="w-full flex items-center justify-center">
                            
                        <PlusCircle size={40} color={colors.mtfu} />
                            
                        </div>
                    </div>
                    </DialogTrigger>
                    <DialogContent className="bg-gray_fundo_mtfu text-white border-0 max-w-[800px]">
                        
                        <DialogHeader className="text-white">
                            <DialogTitle className="text-white text-lg font-normal" >Requisitos indiretos ou nao-funcionais</DialogTitle>
                            <DialogDescription className="font-light text-xs">
                            Obs: fornecemos um exemplo de estrutura simples para criação dos requisitos com o objetivo de ter uma documentação básica e de fácil acesso.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="mt-2 flex flex-col gap-4">
                            <Input
                                label="Funcao ou acao"
                                variant="text"
                                optional={false}
                                type="text"
                                placeholder="Preencha aqui..."
                                errorMessage=""
                                onChange={() => {}}
                                className="w-1/2 mt-2" 
                            />

                            <TextArea 
                            label="Comportamento do sistema"
                            errorMessage=""
                            onChange={() => {}}
                            placeholder="Preencha aqui..."
                            value=""/>

                            <div className="w-full flex justify-end">
                                <Button type="button" radius="4" textAlign="center" variant="normal"
                                onClick={() => {}}> <span>Criar</span> </Button>
                            </div>

                            <Separator className="bg-separator_app" />

                            <div className="max-h-60 overflow-y-auto p-2 flex flex-col gap-4">
                                <div className="bg-gray_fundo_sec_mtfu rounded-md p-4 relative flex flex-col gap-4">
                                    <div className="flex flex-col">
                                        <Typografy align="left" children="Funcao:" color="white" fontWeight={400} type="medium" />
                                        <Typografy align="left" children="Funcao ou acao do usuario aqui" color="#878787" fontWeight={400} type="footer" />

                                    </div>

                                    <div className="flex flex-col">
                                        <Typografy align="left" children="Comportamento do sistema:" color="white" fontWeight={400} type="medium" />
                                        <Typografy align="left" children="Comportamento aqui" color="#878787" fontWeight={400} type="footer" />

                                    </div>
                                    
                                    <div className="absolute bottom-3 right-3 cursor-pointer transition-opacity hover:opacity-75">
                                        <Trash size={20} />
                                    </div>
                                    
                                </div>

                                <div className="bg-gray_fundo_sec_mtfu rounded-md p-4 relative flex flex-col gap-4">
                                    <div className="flex flex-col">
                                        <Typografy align="left" children="Funcao:" color="white" fontWeight={400} type="medium" />
                                        <Typografy align="left" children="Funcao ou acao do usuario aqui" color="#878787" fontWeight={400} type="footer" />

                                    </div>

                                    <div className="flex flex-col">
                                        <Typografy align="left" children="Comportamento do sistema:" color="white" fontWeight={400} type="medium" />
                                        <Typografy align="left" children="Comportamento aqui" color="#878787" fontWeight={400} type="footer" />

                                    </div>
                                    
                                    <div className="absolute bottom-3 right-3 cursor-pointer transition-opacity hover:opacity-75">
                                        <Trash size={20} />
                                    </div>
                                    
                                </div>

                                <div className="bg-gray_fundo_sec_mtfu rounded-md p-4 relative flex flex-col gap-4">
                                    <div className="flex flex-col">
                                        <Typografy align="left" children="Funcao:" color="white" fontWeight={400} type="medium" />
                                        <Typografy align="left" children="Funcao ou acao do usuario aqui" color="#878787" fontWeight={400} type="footer" />

                                    </div>

                                    <div className="flex flex-col">
                                        <Typografy align="left" children="Comportamento do sistema:" color="white" fontWeight={400} type="medium" />
                                        <Typografy align="left" children="Comportamento aqui" color="#878787" fontWeight={400} type="footer" />

                                    </div>
                                    
                                    <div className="absolute bottom-3 right-3 cursor-pointer transition-opacity hover:opacity-75">
                                        <Trash size={20} />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </DialogContent>
                </Dialog>

             </div>

            <div className="flex w-full justify-between mt-2">
                <Typografy align="left" children="Sprints" color="white" fontWeight={500} type="title" />
                <div className="flex gap-3 w-1/4 justify-end">
                    <Typografy align="left" children="Filtrar por:" color="white" fontWeight={400} type="medium" />
                    <Select>
                        <SelectTrigger className="w-2/6 bg-gray_fundo_sec_mtfu text-white
                            border-mtfu hover:bg-mtfu focus:ring-mtfu focus:ring-offset-3 h-[1.8rem]">
                            <SelectValue placeholder="Todas" />
                        </SelectTrigger>
                        <SelectContent className="z-50 bg-gray_fundo_mtfu text-white border-mtfu">
                            <SelectGroup>
                                <SelectItem value="1" className="hover:bg-mtfu">Todas</SelectItem>
                            </SelectGroup>
                            <SelectGroup>
                                <SelectItem value="2" className="hover:bg-mtfu">Ativa</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                
            </div>

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
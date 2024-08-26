import { Editor } from "@/components/Editor/Editor";
import { Separator } from "@/components/ui/separator";
import { Button, Input, TextArea, Typografy } from "@mtfu/react";
import { Block } from "@blocknote/core";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CardSprint } from "@/components/Sprint/CardSprint";

import { toast } from 'react-toastify';
import { Clock, PlusCircle, Trash, Upload } from 'phosphor-react'
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
import { Badge } from "@/components/ui/badge";
  

interface DesignProject {
    projectId: string;
    setTabActive: (e: tabs) => void;
}

export function DesignProject({projectId, setTabActive} : DesignProject){

    const [openModalAvanceFase, setOpenModalAvanceFase] = useState(false);
    const [openModalReqDirect, setOpenModalReqDirect] = useState(false);
    const [openModalReqNotDirect, setOpenModalReqNotDirect] = useState(false);


    //preview image
    const [image, setImage] = useState<any>();

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
            setTabActive("design");
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
        <div className="flex flex-col gap-2 mt-0 relative ">
            <div className="sticky top-12 flex gap-2 py-4 z-[50] flex-col bg-gray_fundo_sec_mtfu">
                <Typografy align="left" children="Design" color="white" fontWeight={500} type="title" />
                <Typografy align="left" children="Todo projeto necessita de um planejamento, utilize essa aba para colocar em ordem tudo que será feito daqui em diante."
                color="#878787" fontWeight={400} type="footer" />

                <div className="bg-gray_fundo_mtfu rounded-sm py-1 pl-2 pr-2 absolute right-1 h-10 top-0 w-[40%] xl:w-[25%] 2xl:w-[22%] flex items-center justify-around">
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
            
            <div className="mt-2">
                <Input
                    label="Link para prototipagem geral do projeto"
                    variant="text"
                    optional={false}
                    type="text"
                    placeholder="Preencha aqui..."
                    errorMessage=""
                    onChange={() => {}}
                    className="w-1/2 mt-2" 
                />
             </div>

             {/* <Typografy align="left" children="Link para documentacao em outro site?" color="white" fontWeight={400} type="medium" /> */}
             <div className="my-6 flex gap-4">

                <Dialog open={openModalReqDirect} onOpenChange={setOpenModalReqDirect} >
                    <DialogTrigger asChild>
                        <div className="bg-gray_fundo_mtfu w-64 rounded-md min-h-32 flex flex-col justify-center
                        transition-shadow hover:opacity-95 hover:shadow hover:shadow-mtfu cursor-pointer relative"
                        onClick={() => {setOpenModalReqDirect(true)}}>
                            <div className="w-full flex items-center justify-center">
                                
                                <PlusCircle size={40} color={colors.mtfu} />
                                
                            </div>

                            <div className="absolute bottom-[-1.5rem] w-full">
                                <Typografy align="center" children="Nova seção" color="#878787" fontWeight={400} type="medium" />
                            </div>
                            
                        </div>
                    </DialogTrigger>
                    <DialogContent className="bg-gray_fundo_mtfu text-white border-0 max-w-[800px]">
                        
                        <DialogHeader className="text-white">
                            <DialogTitle className="text-white text-lg font-normal" >Nova seção</DialogTitle>
                            <DialogDescription className="font-light text-xs">
                            Obs: fornecemos um exemplo de estrutura simples para criação dos requisitos com o objetivo de ter uma documentação básica e de fácil acesso.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="mt-2 flex flex-col gap-4">

                            {image ? 
                            <> 
                                <Typografy align="left" children="Veja como sua imagem ficara listada:" color="#878787" fontWeight={400} type="medium" />
                                <div className="bg-gray_fundo_sec_mtfu p-3 w-72 max-h-34 flex flex-col gap-2 rounded-sm relative cursor-pointer">
                                    <label className="w-full hover:brightness-90 transition cursor-pointer" htmlFor="multiple_files">
                                        <img src={URL.createObjectURL(image)} alt="preview" className="w-64 max-h-32" />
                                    </label>
                                    <Typografy align="center" children="Titulo aqui" color="#878787" fontWeight={400} type="medium" />


                                    <label className=" absolute right-[-3.5rem] top-0 bg-gray_hover p-1.5 rounded-sm cursor-pointer hover:brightness-90" htmlFor="multiple_files">
                                      <Upload size={32} />
                                    </label>
                                </div>
                                
                                
                                <input className="hidden" id="multiple_files" type="file" multiple={false} onChange={(e) => {setImage(e.target.files ? e.target.files[0] : null)}} />
                            </> 
                            : 
                            <>
                                <label className="w-full mb-2 rounded-sm bg-gray_fundo_sec_mtfu border border-mtfu flex flex-col items-center 
                                justify-center min-h-44  hover:border-violet-900 hover:bg-opacity-40 cursor-pointer transition ease-out duration-3000" htmlFor="multiple_files">
                                    <PlusCircle size={40} color={colors.mtfu} />
                                    Adicionar capa
                                </label>
                                <input className="hidden" id="multiple_files" type="file" multiple={false} onChange={(e) => {setImage(e.target.files ? e.target.files[0] : null)}} />
                            </>}
                            

                            <Input
                                label="Nome:"
                                variant="text"
                                optional={false}
                                type="text"
                                placeholder="Preencha aqui..."
                                errorMessage=""
                                onChange={() => {}}
                                className="w-1/2 mt-2" 
                            />

                            <Input
                                label="Link:"
                                variant="text"
                                optional={false}
                                type="text"
                                placeholder="Preencha aqui..."
                                errorMessage=""
                                onChange={() => {}}
                                className="w-1/2 mt-2" 
                            />

                            <TextArea 
                            label="Descrição:"
                            errorMessage=""
                            onChange={() => {}}
                            placeholder="Preencha aqui..."
                            value=""/>

                            <div className="w-full flex justify-end">
                                <Button type="button" radius="4" textAlign="center" variant="normal"
                                onClick={() => {}}> <span>Criar</span> </Button>
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
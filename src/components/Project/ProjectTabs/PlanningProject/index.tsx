import { Editor } from "@/components/Editor/Editor";
import { Separator } from "@/components/ui/separator";
import { Button, Input, TextArea, Typografy } from "@mtfu/react";
import { Block } from "@blocknote/core";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CardSprint } from "@/components/Sprint/CardSprint";
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
  

interface PlanningProject {
    projectId: string;
}

export function PlanningProject({projectId} : PlanningProject){

    const [contentEditor, setContentEditor] = useState<string>('');
    const [showEditor, setShowEditor] = useState(false);
    const [openModalAvanceFase, setOpenModalAvanceFase] = useState(false);

    useEffect(() => {
        if(contentEditor.length > 0){
            localStorage.setItem('editor', JSON.stringify(contentEditor));
        }
         
    }, [contentEditor]);

    useEffect(() => {
        let editor = localStorage.getItem('editor');
        if(editor){
            let data = JSON.parse(editor);
            setContentEditor(data);
            setShowEditor(true);
        }else{
            setShowEditor(true);
        }
    }, []);


    return(
        <div className="flex flex-col gap-2 mt-0 ">
            <div className="sticky top-12 flex gap-2 py-4 z-[50] flex-col bg-gray_fundo_sec_mtfu">
                <Typografy align="left" children="Planejamento" color="white" fontWeight={500} type="title" />
                <Typografy align="left" children="Todo projeto necessita de um planejamento, utilize essa aba para colocar em ordem tudo que será feito daqui em diante."
                color="#878787" fontWeight={400} type="footer" />

                <Separator className="bg-separator_app" />
            </div>
            

             {/* <Typografy align="left" children="Link para documentacao em outro site?" color="white" fontWeight={400} type="medium" /> */}
             <div className="mt-2">
                <Input
                    label="Link para documentacao em outro site?"
                    variant="text"
                    optional={false}
                    type="text"
                    placeholder="Preencha aqui..."
                    errorMessage=""
                    onChange={() => {}}
                    className="w-1/2 mt-2" 
                />
             </div>
             

            <div className="mt-2">
                {/* <TextArea 
                    label="Planejamento"
                    placeholder="Preencha aqui..."
                    errorMessage=""
                    onChange={() => {}}
                    className="w-full text-white mt-2"
                    value=""
                /> */}

                <Typografy align="left" children="Monte seu planejamento:" color="white" fontWeight={500} type="description" />

                {showEditor && (
                    <div className="mt-2">
                        <Editor initialContent={contentEditor} onChangeFn={setContentEditor} />
                    </div>
                    
                )}  
                
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
                <Button variant="normal" textAlign="center" radius="4"><span>Salvar alteracoes</span></Button>

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
                            onClick={() => {setOpenModalAvanceFase(false)}}><span>Sim</span></Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                
            </div>

            

             
        </div>
        

    )
}
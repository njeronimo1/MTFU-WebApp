import { Editor } from "@/components/Editor/Editor";
import { Separator } from "@/components/ui/separator";
import { Button, Input, TextArea, Typografy } from "@mtfu/react";
import { Block } from "@blocknote/core";
import { useEffect, useState } from "react";


export function PlanningProject(){

    const [contentEditor, setContentEditor] = useState<string>('');
    const [showEditor, setShowEditor] = useState(false);

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
            <div className="sticky top-12 flex gap-2 py-4 z-[999] flex-col bg-gray_fundo_sec_mtfu">
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

                <Typografy align="left" children="Monte seu planejamento:" color="white" fontWeight={500} type="title" />

                {showEditor && (
                    <div className="mt-2">
                        <Editor initialContent={contentEditor} onChangeFn={setContentEditor} />
                    </div>
                    
                )}  
                
            </div>

            <div className="sticky bottom-2 w-full flex justify-end py-2 gap-2">
                <Button variant="normal" textAlign="center" radius="4"><span>Salvar alteracoes</span></Button>
                <Button variant="normal" textAlign="center" radius="4"><span>Avancar fase</span></Button>
            </div>
             
        </div>
        

    )
}
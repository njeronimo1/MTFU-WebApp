import { Separator } from "@/components/ui/separator";
import { Input, TextArea, Typografy } from "@mtfu/react";


export function PlanningProject(){
    return(
        <div className="flex flex-col gap-2 mt-4">
            <Typografy align="left" children="Planejamento" color="white" fontWeight={500} type="title" />
            <Typografy align="left" children="Todo projeto necessita de um planejamento, utilize essa aba para colocar em ordem tudo que será feito daqui em diante."
             color="#878787" fontWeight={400} type="footer" />

             <Separator className="bg-separator_app" />

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
                <TextArea 
                    label="Planejamento"
                    placeholder="Preencha aqui..."
                    errorMessage=""
                    onChange={() => {}}
                    className="w-full text-white mt-2"
                    value=""
                />
            </div>
             
        </div>
        

    )
}
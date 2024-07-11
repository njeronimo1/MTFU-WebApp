import { Typografy } from "@mtfu/react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import Drawer from '@mui/material/Drawer';

//icons
import { XCircle } from "phosphor-react";

interface Filter{
    onClose: (state: boolean) => void;
}

export function Filter({onClose} : Filter){
    return(
        <Drawer open={true} onClose={() => {onClose(false)}} anchor="right" sx={{ zIndex: 1}}>
            <div className="w-96 bg-gray_fundo_mtfu h-screen p-8 flex align-center gap-4 flex-col">
                <div className="w-full flex justify-between ">
                     <Typografy align="left" children="Filtro" color="white" fontWeight={800} type="title"/>
                     <div className="hover:opacity-80 cursor-pointer" onClick={() => {onClose(false)}}>
                         <XCircle size={32} color="white" />
                     </div>
                 </div>
                 <div className="">
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent className="z-50">
                            <SelectGroup>
                                <SelectLabel>Fruits</SelectLabel>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                 </div>
            </div>
        </Drawer>
    )
}
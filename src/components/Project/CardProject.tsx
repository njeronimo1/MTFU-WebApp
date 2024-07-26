import { Avatar, Typografy } from "@mtfu/react";

export function CardProject(){
    return(
        <div className="w-full rounded-xl bg-gray_fundo_mtfu p-4">
            <header className="w-full flex justify-between">
                <Typografy align="left" children="Projeto 3" color="white" fontWeight={500} type="title" />

                <div className="flex gap-2">
                    <Avatar />
                    <Avatar />
                    <Avatar />
                </div>
            </header>

            <div className="mt-2 w-full">
                <Typografy align="left" children="Projeto 3" color="white" fontWeight={400} type="description" />
            </div>

            <div className="flex w-full gap-2">
                <div className="w-3/4">
                    <Typografy align="left" children="Entrega: 22/11/2024" color="#878787" fontWeight={400} type="footer" />
                    <Typografy align="left" children="Sprints: 2" color="#878787" fontWeight={400} type="footer" />
                    <Typografy align="left" children="Categoria: Sustentacao" color="#878787" fontWeight={400} type="footer" />
                </div>
                <div className="1/4">
                    <div className="w-full bg-red-600 rounded-lg h-2"></div>
                </div>
            </div>
        </div>
    )
}
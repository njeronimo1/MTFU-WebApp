import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
  import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Button, Input, Typografy } from "@mtfu/react"

//img
import search from '../../../assets/search.png'
import { CardProject } from "@/components/Project/CardProject"
  

export function Project(){
    return(
        <>
            <div className="p-2 pl-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/project" className="text-gray-500 hover:brightness-125 hover:text-gray-500">Projetos</BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                
            </div>
            <Separator className="bg-separator_app" />

            <header className="w-full flex  p-4 pl-8 pr-8 items-end justify-between">
                <div className="w-3/4 flex gap-4">
                    <Input variant="search" label="Pesquise por titulo ou descricao" optional={false} type="text" placeholder="Titulo, categoria"
                    errorMessage="" imgSearch={search} onChange={() => {}}/>

                    <div className="flex flex-col gap-1">
                        <Typografy align="left" children="Categoria:" color="#878787" fontWeight={400} type="footer"/>
                        <Select>
                            <SelectTrigger className="w-48 bg-white text-gray-500 focus:ring-gray-500 focus:ring-offset-3">
                                <SelectValue placeholder="Selecione uma categoria" />
                            </SelectTrigger>
                            <SelectContent className="z-50 bg-white text-gray-500 border-gray-500">
                                <SelectGroup>
                                    {/* <SelectLabel>Fruits</SelectLabel> */}
                                    <SelectItem value="1" className="hover:bg-mtfu">Sprint 1</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col gap-1">
                        <Typografy align="left" children="Status:" color="#878787" fontWeight={400} type="footer"/>
                        <Select>
                            <SelectTrigger className="w-48 bg-white text-gray-500 focus:ring-gray-500 focus:ring-offset-3">
                                <SelectValue placeholder="Selecione um status" />
                            </SelectTrigger>
                            <SelectContent className="z-50 bg-white text-gray-500 border-gray-500">
                                <SelectGroup>
                                    {/* <SelectLabel>Fruits</SelectLabel> */}
                                    <SelectItem value="1" className="hover:bg-mtfu">Sprint 1</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="w-1/4 flex justify-end">
                <Button  variant="normal" textAlign="center" radius="8" >
                        Criar um novo projeto                    
                        </Button>
                </div>
            </header>

            <Separator className="bg-separator_app" />

            <div className="mt-2 w-full flex flex-col p-4 pl-8 pr-8 gap-4">
                <Typografy align="left" children="Lista de projetos:" color="#878787" fontWeight={400} type="footer"/>

                <div className="flex w-full">
                    
                        <div className="w-1/2">
                            <CardProject 

                            />
                        </div>
                    
                </div>
            </div>
        </>
    )
}
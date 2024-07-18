import { BoxCount, Typografy } from "@mtfu/react";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { colors } from "@mtfu/tokens";


const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];


export function DashADM(){
    return(
            <main className='w-full  flex '>
                {/* dados filtrados por projeto */}
                <div className='w-3/4 flex flex-col py-5 pl-10  pr-8 border-r border-separator_app' >
                    <div className="w-full flex justify-between">
                        <div className="flex flex-col gap-1">
                            <span className='text-2xl text-white font-semibold '>Andamento dos projetos ativos</span>
                            <Typografy children='Filtre por um projeto para obter a relação entre pontos entregues ao longo do percurso e informações sobre a sprint atual.' type='footer' align='left' color='#878787' fontWeight={500}/>
                        </div>

                        <div className="w-1/6">
                            <Select>
                                <SelectTrigger className="w-full bg-gray_fundo_sec_mtfu text-white border-mtfu hover:bg-mtfu focus:ring-mtfu focus:ring-offset-3">
                                    <SelectValue placeholder="Selecione um projeto" />
                                </SelectTrigger>
                                <SelectContent className="z-50 bg-gray_fundo_mtfu text-white border-mtfu">
                                    <SelectGroup>
                                        {/* <SelectLabel>Fruits</SelectLabel> */}
                                        <SelectItem value="1" className="hover:bg-mtfu">More than follow up</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className='w-full md:h-64 lg:h-80 mt-8'>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={300} data={data}>
                                    <Bar dataKey="uv" fill={colors.mtfu} />
                                </BarChart>
                                
                            </ResponsiveContainer>
                        </div>
                </div>

                {/* dados filtrados por sprint e atalhos */}
                <div className="w-1/4 ">
                    Sprint e atalho
                </div>
                {/* <div className='w-full flex gap-4 mt-10'>
                    <div className='w-2/3 min-h-96 pr-4'>
                        <div className='w-full flex align-center gap-6'>
                            <Typografy  align='left' children='Desempenho por:' color='white' fontWeight={700} type='title'/>
                            <Button children='7 dias' radius='12' textAlign='center' variant='filter-active' />
                            <Button children='14 dias' radius='12' textAlign='center' variant='filter-desactive' />
                            <Button children='30 dias' radius='12' textAlign='center' variant='filter-desactive' />
                        </div>

                        <div className='w-full h-5/6 mt-8'>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={300} data={data}>
                                    <Bar dataKey="uv" fill={colors.mtfu} />
                                </BarChart>
                                
                            </ResponsiveContainer>
                        </div>
                        
                    </div>
                    <div className='pl-12'>
                        <Typografy  align='left' children='Ultimos 7 dias' color='white' fontWeight={700} type='title'/>

                        <div className='flex mt-8 align-center gap-4'>
                            <div className=''>
                                <Avatar title='Nicolas jeronimo' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Typografy  align='left' children='Usuario 1' color='white' fontWeight={700} type='medium'/>
                                <Typografy  align='left' children='8pts' color='white' fontWeight={300} type='footer'/>
                            </div>
                        </div>
                    </div>
                </div> */}
            </main>
    )
}
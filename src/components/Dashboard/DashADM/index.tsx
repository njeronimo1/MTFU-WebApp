import { Avatar, BoxCount, Typografy } from "@mtfu/react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, DefaultTooltipContent, PieChart, Pie, Cell } from 'recharts';

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
import { Separator } from "@/components/ui/separator";
import { CardUser } from "../CardUser/CardUser";


const data = [
    {
      name: '21/07',
      pontos: 4,
      
    },
    {
      name: '22/07',
      pontos: 3,
      
    },
    {
      name: '23/07',
      pontos: 2,
      
    },
    {
      name: '24/07',
      pontos: 1,
      
    },
    {
      name: '25/07',
      pontos: 1,
      
    },
    {
      name: '26/07',
      pontos: 2,
      
    },
    {
      name: '27/07',
      pontos: 3,
      
    },
  ];

  const dataPointDelivery = [
    {
      name: 'Sprint 1',
      pontos: 4,
      
    },
    {
      name: 'Sprint 2',
      pontos: 3,
      
    },
    {
      name: 'Sprint 3',
      pontos: 2,
      
    },
    {
      name: 'Sprint 4',
      pontos: 1,
      
    },
    {
      name: 'Sprint 5',
      pontos: 1,
      
    },
    {
      name: 'Sprint 6',
      pontos: 2,
      
    },
    {
      name: 'Sprint 7',
      pontos: 3,
      
    },
  ];

  const dataPie = [
    { name: 'Entregues', value: 400 },
    { name: 'A fazer', value: 200 },
  ];
  
  const COLORS = ['#6111CA', '#222222'];


export function DashADM(){


    return(
            <main className='w-full  flex '>
                {/* dados filtrados por projeto */}
                <div className='w-3/4 flex flex-col  border-r border-separator_app' >
                    <div className="w-full flex justify-between gap-2 py-5 
                    lg:pl-5 pr-4
                    2xl:pl-10  2xl:pr-8">
                        <div className="flex flex-col gap-1">
                            <span className='text-2xl text-white font-semibold '>Andamento dos projetos ativos</span>
                            <Typografy children='Filtre por um projeto para obter a relação entre pontos entregues ao longo do percurso e informações sobre a sprint atual.' type='footer' align='left' color='#878787' fontWeight={500}/>
                        </div>

                        <div className="w-2/6">
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

                    <div className='w-full md:h-32 lg:h-48 xl:h-42 2xl:h-72 lg:mt-0 xl:mt-0 py-5 
                    lg:pl-5 pr-4
                    2xl:pl-10  2xl:pr-8'>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={300} data={dataPointDelivery}>
                                    <Bar dataKey="pontos" fill={colors.mtfu} />
                                    <XAxis dataKey="name" fontSize={10} />
                                          <YAxis fontSize={10}/>
                                          <DefaultTooltipContent/>
                                </BarChart>
                            </ResponsiveContainer>
                    </div>

                    <Separator className='bg-separator_app' />

                    <div className=' flex flex-col w-full' >
                        <div className="flex flex-col justify-start align-baseline py-5 
                        lg:pl-5 pr-4
                        2xl:pl-10  2xl:pr-8 gap-1">
                            <Typografy align="left" children="Sprint ativa" color="white" fontWeight={400} type="title" />
                            
                            <div className="flex gap-4">
                                <div className="flex gap-1">
                                    <Typografy align="left" children="Total de pontos: " color="#878787" fontWeight={400} type="medium" />
                                    <Typografy align="left" children="59 " color="white" fontWeight={500} type="medium" />
                                </div>

                                <div className="flex gap-1">
                                    <Typografy align="left" children="Data de inicio: " color="#878787" fontWeight={400} type="medium" />
                                    <Typografy align="left" children="22/07 " color="white" fontWeight={500} type="medium" />
                                </div>

                                <div className="flex gap-1">
                                    <Typografy align="left" children="Data de termino: " color="#878787" fontWeight={400} type="medium" />
                                    <Typografy align="left" children="22/07 " color="white" fontWeight={500} type="medium" />
                                </div>
                            </div>
                        </div>

                        <div className="flex py-1 
                        lg:pl-5 pr-4
                        2xl:pl-10  2xl:pr-8 w-full lg:gap-2 2xl-gap-14">
                            <div className="bg-gray_fundo_mtfu w-1/3 lg:h-52 2xl:h-72 rounded-xl pl-4 py-2 items-start justify-start">
                                <Typografy align="left" children="Pontos entregues (7 dias) " color="#878787" fontWeight={400} type="footer" />

                                <div className="w-full lg:h-44 sm:h-30 2xl:h-64 py-2 pr-6 flex items-center">
                                  <ResponsiveContainer width="100%" height="100%">

                                    <LineChart width={300} height={100} data={data} 
                                    margin={{
                                      top: 0,
                                      right: 0,
                                      left: -40,
                                      bottom: 0,
                                    }} >
                                      <Line type="monotone" dataKey="pontos" stroke={colors.mtfu} strokeWidth={2}
                                       dot={false}/>
                                        <XAxis dataKey="name" fontSize={10} />
                                          <YAxis fontSize={10}/>
                                      <Tooltip />
                                    </LineChart>

                                  </ResponsiveContainer>
                                  
                                </div>
                            
                            </div>
                            <div className="bg-gray_fundo_mtfu w-1/3 lg:h-52 2xl:h-72 rounded-xl pl-4 py-2">
                                <Typografy align="left" children="Conclusão geral " color="#878787" fontWeight={400} type="footer" />
                            
                                <div className="w-full  lg:h-48 sm:h-30 2xl:h-64 py-0 pr-6">
                                  <ResponsiveContainer width="100%" height="100%">
                                      <PieChart width={100} height={100} >
                                        <Pie
                                          data={dataPie}
                                          cx="50%"
                                          cy="50%"
                                          innerRadius={40}
                                          outerRadius={75}
                                          fill="#000000"
                                          paddingAngle={0}
                                          dataKey="value"

                                        >
                                         
                                          {data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#121212"/>
                                          ))}
                                        </Pie>
                                        <Tooltip />
                                      </PieChart>
                                  </ResponsiveContainer>
                                </div>
                                  
                            </div>
                            <div className="bg-gray_fundo_mtfu w-1/3 lg:h-52 2xl:h-72 rounded-xl pl-4 py-2">
                                <Typografy align="left" children="Pontos por usuario " color="#878787" fontWeight={400} type="footer" />
                            
                                <div className="flex flex-col mt-3 lg:max-h-40 2xl:max-h-60 overflow-y-auto scrollbar
                                scrollbar-track-gray_fundo_mtfu scrollbar-thumb-gray_fundo_sec_mtfu gap-4">

                                  <div className="flex gap-2">
                                    <div className="flex items-center justify-center">
                                      <Avatar title="Nicolas" src="github.com/njeronimo1.png" alt="" />
                                    </div>
                                    <div className="flex w-full flex-col gap-1">
                                      <Typografy align="left" children="Nicolas Jeronimo" color="#878787" fontWeight={400} type="medium" />
                                      <Typografy align="left" children="26pts " color="white" fontWeight={400} type="footer" />
                                    </div>
                                  </div>

                                  <div className="flex gap-2">
                                    <div className="flex items-center justify-center">
                                      <Avatar title="Nicolas" src="github.com/njeronimo1.png" alt="" />
                                    </div>
                                    <div className="flex w-full flex-col gap-1">
                                      <Typografy align="left" children="Nicolas Jeronimo" color="#878787" fontWeight={400} type="medium" />
                                      <Typografy align="left" children="26pts " color="white" fontWeight={400} type="footer" />
                                    </div>
                                  </div>

                                  <div className="flex gap-2">
                                    <div className="flex items-center justify-center">
                                      <Avatar title="Nicolas" src="github.com/njeronimo1.png" alt="" />
                                    </div>
                                    <div className="flex w-full flex-col gap-1">
                                      <Typografy align="left" children="Nicolas Jeronimo" color="#878787" fontWeight={400} type="medium" />
                                      <Typografy align="left" children="26pts " color="white" fontWeight={400} type="footer" />
                                    </div>
                                  </div>

                                  <div className="flex gap-2">
                                    <div className="flex items-center justify-center">
                                      <Avatar title="Nicolas" src="github.com/njeronimo1.png" alt="" />
                                    </div>
                                    <div className="flex w-full flex-col gap-1">
                                      <Typografy align="left" children="Nicolas Jeronimo" color="#878787" fontWeight={400} type="medium" />
                                      <Typografy align="left" children="26pts " color="white" fontWeight={400} type="footer" />
                                    </div>
                                  </div>

                                  <div className="flex gap-2">
                                    <div className="flex items-center justify-center">
                                      <Avatar title="Nicolas" src="github.com/njeronimo1.png" alt="" />
                                    </div>
                                    <div className="flex w-full flex-col gap-1">
                                      <Typografy align="left" children="Nicolas Jeronimo" color="#878787" fontWeight={400} type="medium" />
                                      <Typografy align="left" children="26pts " color="white" fontWeight={400} type="footer" />
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

                {/* dados filtrados por sprint e atalhos */}
                <div className="w-1/4 lg:py-4 2xl:py-4 lg:pl-3 lg:pr-3
                        2xl:pl-6  2xl:pr-6">
                    <div className="flex items-center justify-between gap-1  ">
                        <div className="w-1/2">
                            <span className='text-2xl text-white font-semibold '>Atividade</span>
                        </div>

                        <div className="w-1/2">
                            <Select>
                                <SelectTrigger className="w-full bg-gray_fundo_sec_mtfu text-white border-mtfu hover:bg-mtfu focus:ring-mtfu focus:ring-offset-3">
                                    <SelectValue placeholder="Selecione uma sprint" />
                                </SelectTrigger>
                                <SelectContent className="z-50 bg-gray_fundo_mtfu text-white border-mtfu">
                                    <SelectGroup>
                                        {/* <SelectLabel>Fruits</SelectLabel> */}
                                        <SelectItem value="1" className="hover:bg-mtfu">Sprint 1</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 mt-5">
                        <CardUser title="teste" sprint="100" status="Em andamento" dateEnd="22/07" dateInital="21/07" taskId="1" type="frontend" key={1} />
                        <CardUser title="teste" sprint="100" status="Em andamento" dateEnd="22/07" dateInital="21/07" taskId="1" type="backend" key={1} />
                        <CardUser title="teste" sprint="100" status="Em andamento" dateEnd="22/07" dateInital="21/07" taskId="1" type="designer" key={1} />
                        <CardUser title="teste" sprint="100" status="Em andamento" dateEnd="22/07" dateInital="21/07" taskId="1" type="tester" key={1} />
                    </div>
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
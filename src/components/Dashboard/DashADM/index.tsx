import { BoxCount, Typografy } from "@mtfu/react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

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

  const dataPointDelivery = [
    {
      name: '22/07/2024',
      pts: 10,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '23/07/2024',
      pts: -0,
      pv: -1398,
      amt: -2210,
    },
    {
      name: '24/07/2024',
      pts: 3,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '25/07/2024',
      pts: 4,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '26/07/2024',
      pts: 5,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '27/07/2024',
      pts: 0,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '28/07/2024',
      pts: 0,
      pv: 4300,
      amt: 2100,
    },
  ];
  
  


export function DashADM(){
    
    const gradientOffset = () => {
        const dataMax = Math.max(...data.map((i) => i.uv));
        const dataMin = Math.min(...data.map((i) => i.uv));
      
        if (dataMax <= 0) {
          return 0;
        }
        if (dataMin >= 0) {
          return 1;
        }
      
        return dataMax / (dataMax - dataMin);
      };

    const off = gradientOffset();

    return(
            <main className='w-full  flex '>
                {/* dados filtrados por projeto */}
                <div className='w-3/4 flex flex-col  border-r border-separator_app' >
                    <div className="w-full flex justify-between gap-2 py-5 pl-10  pr-8">
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

                    <div className='w-full md:h-32 lg:h-52 mt-8 py-5 pl-6  pr-6'>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={300} data={data}>
                                    <Bar dataKey="uv" fill={colors.mtfu} />
                                </BarChart>
                            </ResponsiveContainer>
                    </div>

                    <Separator className='bg-separator_app' />

                    <div className='w-3/4 flex flex-col w-full' >
                        <div className="flex flex-col justify-start align-baseline py-5 pl-10  pr-8 gap-1">
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
                        <div className="flex py-1 pl-10 pr-8 w-full gap-14">
                            <div className="bg-gray_fundo_mtfu w-1/3 h-52 rounded-xl pl-4 py-2 items-start justify-start">
                                <Typografy align="left" children="Pontos entregues (7 dias) " color="#878787" fontWeight={400} type="footer" />

                                <div className="w-full h-40 py-2 pr-4">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <AreaChart
                                        width={500}
                                        height={400}
                                        data={dataPointDelivery}
                                        margin={{
                                            top: 10,
                                            right: 0,
                                            left: -30,
                                            bottom: 0,
                                        }}
                                        

                                        >
                                        <CartesianGrid strokeDasharray="0 0"  />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <defs>
                                            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset={off} stopColor={colors.mtfu} stopOpacity={1} />
                                            <stop offset={off} stopColor="red" stopOpacity={1} />
                                            </linearGradient>
                                        </defs>
                                        <Area type="natural" dataKey="pts" stroke="" fill="url(#splitColor)" activeDot={true}
                                        />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </div>
                            
                            </div>
                            <div className="bg-gray_fundo_mtfu w-1/3 h-52 rounded-xl pl-4 py-2">
                                <Typografy align="left" children="Conclusao geral " color="#878787" fontWeight={400} type="footer" />
                            </div>
                            <div className="bg-gray_fundo_mtfu w-1/3 h-52 rounded-xl pl-4 py-2">
                                <Typografy align="left" children="Pontos por usuario " color="#878787" fontWeight={400} type="footer" />
                            </div>
                        </div>
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
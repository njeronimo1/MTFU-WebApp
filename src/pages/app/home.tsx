
//imgs
import { Avatar, BoxCount, Button, Typografy } from '@mtfu/react'
import logo from '../../assets/+thanfollowup.svg'
import filter from '../../assets/filter.png'
import lightBolt from '../../assets/icons_radix/lightning-bolt.svg'
import { Bar, BarChart, ResponsiveContainer } from 'recharts'
import { colors } from '@mtfu/tokens'


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

export function Home(){

    return(
        <div className='w-full'>
            <header className='w-full flex justify-between align-center'>
                <div className='flex flex-col align-center'>
                    <img src={logo} alt="more than follow up" className='w-1/2' />
                    <Typografy children='Dashboard' type='footer' align='left' color='white' fontWeight={500}/>
                </div>
                <div>
                    <div className='p-2 bg-mtfu rounded-lg cursor-pointer hover:opacity-80'>
                        <img src={filter} alt="filter" />
                    </div>
                </div>
            </header>
            <main className='w-full mt-10'>
                <div className='flex align-center justify-center w-full gap-24'>
                    <BoxCount title='Projetos ativos' count='5' image={lightBolt} alt=''/>
                    <BoxCount title='Sprints ativas' count='5' image={lightBolt} alt=''/>
                    <BoxCount title='Tarefas ativas' count='5' image={lightBolt} alt=''/>
                </div>
                <div className='w-full flex gap-4 mt-10'>
                    <div className='w-2/3 min-h-96 pr-4'>
                        <div className='w-full flex align-center gap-6'>
                            <Typografy  align='left' children='Desempenho por:' color='white' fontWeight={700} type='title'/>
                            <Button children='7 dias' radius='12' textAlign='center' variant='filter-active'  />
                            <Button children='14 dias' radius='12' textAlign='center' variant='filter-desactive'  />
                            <Button children='30 dias' radius='12' textAlign='center' variant='filter-desactive'  />
                        </div>

                        <div className='w-full h-5/6 mt-12'>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={300} data={data}>
                                    <Bar dataKey="uv" fill={colors.mtfu} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        
                    </div>
                    <div className='pl-12'>
                        <Typografy  align='left' children='Ultimos 7 dias' color='white' fontWeight={700} type='title'/>

                        <div className='flex mt-10 align-center gap-4'>
                            <div className=''>
                                <Avatar title='Nicolas jeronimo' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <Typografy  align='left' children='Usuario 1' color='white' fontWeight={700} type='medium'/>
                                <Typografy  align='left' children='8pts' color='white' fontWeight={300} type='footer'/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

//imgs
import { Avatar, BoxCount, Button, Typografy } from '@mtfu/react'
import logo from '../../assets/+thanfollowup.svg'
import filter from '../../assets/filter.png'
import lightBolt from '../../assets/icons_radix/lightning-bolt.svg'
import { Bar, BarChart, ResponsiveContainer } from 'recharts'
import { colors } from '@mtfu/tokens'
import { useState } from 'react'
import { Filter } from '@/components/Filter'
import { Separator } from '@/components/ui/separator'

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

    //states filter
    const [openFilter, setOpenFilter] = useState(false);

    return(
        <div className='w-full'>
            <header className='w-full flex justify-between align-center py-6 pl-10 pr-10'>
                <div className='flex flex-col align-center'>
                    <span className='text-3xl text-white font-semibold'>Ola, Nicolas Jeronimo</span>
                    <Typografy children='O sucesso é a soma de pequenos esforços repetidos dia após dia.' type='footer' align='left' color='#878787' fontWeight={500}/>
                </div>

                
            </header>
            <Separator className='bg-separator_app' />
            

            {openFilter && (
                <Filter onClose={setOpenFilter}/>
            )}
        </div>
    )
}

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
import { DashADM } from '@/components/Dashboard/DashADM'



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
            
            <DashADM />


        </div>
    )
}
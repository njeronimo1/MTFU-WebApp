
import {useLocation, useNavigate} from 'react-router-dom'
import {colors} from '@mtfu/tokens'

import { Separator } from "@/components/ui/separator"
import { CaretDown, ChartLineUp, CheckSquareOffset, GearSix, Kanban, ProjectorScreenChart, Archive as ReportIcon, SignOut, UserCircle } from 'phosphor-react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  


//imgs
import logo from '../../assets/+up.svg';
import { useEffect, useState } from 'react'
import { Typografy } from '@mtfu/react'


export function Menu(){

    //routes states and hooks
    const location = useLocation();
    const navigate = useNavigate();
    const [routerActually, setRouterActually] = useState('');

    useEffect(() => {
        if(location.pathname == '/'){
            setRouterActually('/');
        }

        if(location.pathname == '/project'){
            setRouterActually('project');
        }

        if(location.pathname == '/sprints'){
            setRouterActually('sprints');
        }

        if(location.pathname == '/tasks'){
            setRouterActually('tasks');
        }
    }, [location]);

    function redirectForRoute(route: string){
        navigate(`/${route}`);
    }

    return(
        <>
            <div className="w-full h-screen flex flex-col align-center relative">
                <div className='flex align-center justify-start p-4'>
                    <img src={logo} alt="+up" className='cursor-pointer' onClick={() => {navigate('/')}} />
                </div>
                <Separator color='#1A1919' className='bg-separator_menu'/>
                <div className='w-full p-4'>
                    <Typografy align='left' children='Menu' fontWeight={400} color='#878787' type='footer'/>
                </div>
                <div className='w-full py-2 pb-2 pl-4 mt-2 mb-2 flex align-middle justify-start gap-3 cursor-pointer hover:brightness-150 '
                    style={routerActually == '/' ? {borderLeft: `0.15rem solid ${colors.mtfu}`} : {}}
                    onClick={() => {redirectForRoute('')}}
                >
                    <ChartLineUp size={32} color={routerActually == 'home' ? 'white' : '#878787'}/>
                    <div className='w-full mt-1.5'>
                      <Typografy align='left' children='Dashboard' fontWeight={500} color={routerActually == 'home' ? 'white' : '#878787'} type='medium'/>
                    </div>
                </div>
                <div className='w-full py-2 pb-2 pl-4 mt-2 mb-2 flex align-middle justify-start gap-3 cursor-pointer hover:brightness-150'
                style={routerActually == 'project' ? {borderLeft: `0.15rem solid ${colors.mtfu}`} : {}}
                onClick={() => {redirectForRoute('project')}}>
                    <ProjectorScreenChart size={32} color={routerActually == 'project' ? 'white' : '#878787'}/>
                    <div className='w-full mt-1.5'>
                    <Typografy align='left' children='Projetos' fontWeight={500} color={routerActually == 'project' ? 'white' : '#878787'} type='medium'/>
                    </div>
                    
                </div>
                <div className='w-full py-2 pb-2 pl-4 mt-2 mb-2 flex align-center justify-start gap-3 cursor-pointer hover:brightness-150'
                style={routerActually == 'sprints' ? {borderLeft: `0.15rem solid ${colors.mtfu}`} : {}}
                onClick={() => {redirectForRoute('sprints')}}>
                   <Kanban size={32} color={routerActually == 'sprints' ? 'white' : '#878787'}/>

                    <div className='w-full mt-1.5'>
                    <Typografy align='left' children='Sprints' fontWeight={500} color={routerActually == 'sprints' ? 'white' : '#878787'} type='medium'/>
                    </div>
                    
                </div>
                <div className='w-full py-2 pb-2 pl-4 mt-2 mb-2 flex align-center justify-start gap-3 cursor-pointer hover:brightness-150'
                style={routerActually == 'tasks' ? {borderLeft: `0.15rem solid ${colors.mtfu}`} : {}}
                onClick={() => {redirectForRoute('tasks')}}>
                    <CheckSquareOffset size={32} color={routerActually == 'tasks' ? 'white' : '#878787'}/>

                    <div className='w-full mt-1.5'>
                    <Typografy align='left' children='Tasks' fontWeight={500} color={routerActually == 'tasks' ? 'white' : '#878787'} type='medium'/>
                    </div>
                    
                </div>

                <div className='w-full py-2 pb-2 pl-4 mt-2 mb-2 flex align-center justify-start gap-3 cursor-pointer hover:brightness-150'
                style={routerActually == 'tasks' ? {borderLeft: `0.15rem solid ${colors.mtfu}`} : {}}
                onClick={() => {redirectForRoute('tasks')}}>
                    {/* <img src={Pencil2} alt="" className='w-6'/> */}
                    <ReportIcon size={32} color={routerActually == 'reports' ? 'white' : '#878787'}/>

                        <div className='w-full mt-1.5'>
                        <Typografy align='left' children='Relatorios' fontWeight={500} color={routerActually == 'tasks' ? 'white' : '#878787'} type='medium'/>
                        </div>
                    
                </div>


                <div className='w-full flex flex-col align-center absolute bottom-0 '>
                    <Separator className='bg-separator_menu' />

                    <div className='flex gap-2 py-3 pb-4 pl-4 align-middle cursor-pointer hover:brightness-150'>
                        <GearSix size={32} color='#878787'/>
                        <div className=' mt-1.5'>
                            <Typografy align='center' children='Configuracoes' color='#878787' fontWeight={400} type='medium'/>
                        </div>
                        
                    </div>

                    <div className='flex gap-2 py-3 pb-3 pl-4 bg-white rounded-t-xl'>
                        <UserCircle size={42} color={colors.mtfu}/>
                        <div className='w-full flex justify-between pr-4 align-center'>
                            <div className='flex align-center flex-col cursor-default'>
                                <Typografy align='left' children='Nicolas Jeronimo' color={colors.mtfu} fontWeight={500} type='medium'/>
                                <Typografy align='left' children='Front-end' color='#878787' fontWeight={400} type='footer'/>
                            </div>
                            
                            <div className='cursor-pointer hover:opacity-80'>
                                <Popover>
                                    <PopoverTrigger>
                                        <CaretDown size={20} color='#878787' weight='bold'/>
                                    </PopoverTrigger>
                                    <PopoverContent className='bg-gray_fundo_mtfu border-mtfu'>
                                        <div className='flex gap-2 cursor-pointer hover:brightness-150' onClick={() => {navigate('/sign-in')}}>
                                            <SignOut size={20} color='#878787' />

                                            <Typografy align='left' children='Logout' color='#878787' fontWeight={400} type='medium'/>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
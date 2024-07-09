
import {useLocation, useNavigate} from 'react-router-dom'
import {colors} from '@mtfu/tokens'

//imgs
import Home from '../../assets/icons_radix/home.svg'
import Archive from '../../assets/icons_radix/archive.svg'
import LightningBolt from '../../assets/icons_radix/lightning-bolt.svg'
import Pencil2 from '../../assets/icons_radix/pencil-2.svg'
import { useEffect, useState } from 'react'


export function Menu(){

    //routes states and hooks
    const location = useLocation();
    const navigate = useNavigate();
    const [routerActually, setRouterActually] = useState('');

    useEffect(() => {
        if(location.pathname == '/'){
            setRouterActually('home');
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
            <div className="w-full h-screen flex flex-col align-center py-16">
                <div className='w-full py-6 pb-6 flex align-center justify-center'
                    style={routerActually == 'home' ? {borderRight: `0.15rem solid ${colors.mtfu}`} : {}}
                    onClick={() => {redirectForRoute('home')}}
                >
                    <img src={Home} alt="" className='w-6'/>
                </div>
                <div className='w-full py-6 pb-6 flex align-center justify-center'
                style={routerActually == 'project' ? {borderRight: `0.15rem solid ${colors.mtfu}`} : {}}
                onClick={() => {redirectForRoute('project')}}>
                    <img src={Archive} alt="" className='w-6'/>
                </div>
                <div className='w-full py-6 pb-6 flex align-center justify-center'
                style={routerActually == 'sprints' ? {borderRight: `0.15rem solid ${colors.mtfu}`} : {}}
                onClick={() => {redirectForRoute('sprints')}}>
                    <img src={LightningBolt} alt="" className='w-6'/>
                </div>
                <div className='w-full py-6 pb-6 flex align-center justify-center'
                style={routerActually == 'tasks' ? {borderRight: `0.15rem solid ${colors.mtfu}`} : {}}
                onClick={() => {redirectForRoute('tasks')}}>
                    <img src={Pencil2} alt="" className='w-6'/>
                </div>
            </div>
        </>
    )
}
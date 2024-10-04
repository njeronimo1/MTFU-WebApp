
import { useIsFetching } from '@tanstack/react-query'
import { CircleNotch } from 'phosphor-react';

export function GlobalLoader(){
    const isFetching = useIsFetching();

    if(!isFetching) return null;

    return(
        <div className="bg-gray_fundo_sec_mtfu w-full absolute top-0 h-screen text-black flex items-center justify-center z-[999]
        opacity-80">
            <CircleNotch size={60} className='animate-spin text-mtfu' />
        </div>
    )
}
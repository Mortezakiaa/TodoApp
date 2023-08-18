'use client'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import {IoMdLogOut} from 'react-icons/io'

function Nav() {
    const router = useRouter()
    const {data , status} = useSession()
    useEffect(()=>{
        if(status === 'unauthenticated') router.replace('/SignIn')
        
    },[status])
  return (
        <nav aria-label="menu nav" className="fixed top-0 z-20 w-full h-auto px-1 pt-2 pb-1 mt-0 bg-gray-800 md:pt-1">
            <div className="flex flex-wrap items-center justify-between">
                <div className="flex justify-center flex-shrink text-white md:w-1/3 md:justify-start">
                    <a href="#" aria-label="Home">
                        <span className="pl-2 text-xl"><i className="em em-grinning"></i></span>
                    </a>
                </div>
                <div className="flex content-center justify-between w-full pt-2 md:w-1/3 md:justify-end">
                    <ul className="flex items-center justify-between flex-1 list-reset md:flex-none">
                        <li className="flex-1 md:flex-none md:mr-3">
                            <div className="relative flex items-center gap-4">
                                <p className='text-yellow-500'>{data?.user?.email}</p>
                                <button onClick={()=> signOut()} className="flex items-center gap-2 px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
                                    <IoMdLogOut/>
                                    <span>LogOut</span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
  )
}

export default Nav

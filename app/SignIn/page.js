'use client'
import SignUpForm from "@/Components/SignUpForm"
import {signIn} from 'next-auth/react'
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useSession } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function page() {
    const router = useRouter()
    const ref = useRef()
    const {status} = useSession()
  
    useEffect(()=>{
        if(status === 'authenticated') router.replace('/Todos')
    },[status])

    useEffect(()=>{
        ref.current.focus()
    },[])
    const [data , setData] = useState({
        email:'',
        password:'',
    })
    const LogIn =  async ()=>{
        const res = await signIn('credentials' , {
            email:data.email,
            password:data.password,
            callbackUrl:'/Todos'
        })
        if(res.error){
            toast.error(res.error)
        }
    }
  return (
    <div>
        <ToastContainer/>
        <SignUpForm Ref={ref} LoginUser={false} SignUpUser={false} Login={() => LogIn()} getData={e => setData({...data , [e.target.name]:e.target.value})}/>
    </div>
  )
}

export default page

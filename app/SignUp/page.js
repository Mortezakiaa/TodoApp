'use client'
import SignUpForm from "@/Components/SignUpForm"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { useSession } from "next-auth/react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function page() {
  const ref = useRef()
  const router = useRouter()
  const [data,setData]= useState({
    email:'',
    password:''
  })
  const {status} = useSession()
  
  useEffect(()=>{
    if(status === 'authenticated') router.replace('/')
  },[status])
  useEffect(()=>{
    ref.current.focus()
  },[])
  const Enter =  ()=>{
  axios.post('/api/SignUp' , data).then(res =>{
      router.replace('/SignIn')
   }).catch(err =>{
    toast.error(err.response.data.message)
   })
  }
  const GetDetails = (e)=>{
    setData({...data , [e.target.name]:e.target.value})
  }
  return (
    <div>
      <ToastContainer/>
      <SignUpForm Ref={ref} LoginUser={true} SignUpUser={true} SignUp={() => Enter()} getData={(e) => GetDetails(e)}/>
    </div>
  )
}

export default page

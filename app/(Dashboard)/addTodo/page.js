'use client'
import RadioButton from "@/Components/RadioButton"
import { BsAlignStart } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainHeader from "@/Components/MainHeader";
import Loader from "@/Components/Loader";
function page() {
  const [state,setState] = useState({
    title:'',
    status:''
  })
  const [loading , setLoading] = useState(false)
  
  const ChangeStatus =(e)=>{
    setState({...state , status:e.target.value})
  }
  const SendTodos = ()=>{
    setLoading(true)
    axios.post('/api/todo',{
      data:state 
    }).then(res =>{
      if(res.data.status == "Success"){
        setLoading(false)
        toast.success(res.data.message)
        setState({title:'' , status:''})
      }
    }).catch(err =>{
      setLoading(false)
      toast.error(err.message)
    })
  }
  return (
    <div>
        <ToastContainer/>
        <MainHeader headerText={'Add New Todo'}/>
      <div className='px-3 mt-2'>
        <div>
          <label htmlFor="title" className="block mb-2 text-lg">Title</label>
          <input type="text" id="title" value={state.title} onChange={e =>{setState({...state , title:e.target.value})}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>    
        <div className="flex items-center justify-between px-2 mt-2 bg-teal-600 rounded-md w-[200px]">
          <RadioButton checked={state.status === 'Todo'} ChangeStatus={e=> ChangeStatus(e)} value={'Todo'}/>
          <BsAlignStart color="white"/>
        </div>
        <div className="flex items-center justify-between px-2 mt-2 bg-cyan-800 rounded-md w-[200px]">
          <RadioButton checked={state.status === 'InProgress'} ChangeStatus={e=> ChangeStatus(e)} value={'InProgress'}/>
          <FiSettings color="white"/>
        </div>
        <div className="flex items-center justify-between px-2 mt-2 bg-green-700 rounded-md w-[200px]">
          <RadioButton checked={state.status === 'Review'} ChangeStatus={e=> ChangeStatus(e)} value={'Review'}/>
          <AiOutlineFileSearch color="white" />
        </div>
        <div className="flex items-center justify-between px-2 mt-2 bg-blue-700 rounded-md w-[200px]">
          <RadioButton checked={state.status === 'Done'} ChangeStatus={e=> ChangeStatus(e)} value={'Done'}/>
          <MdDoneAll color="white"/>
        </div>
        {loading == true ? <Loader/>:
        <button type="button" onClick={SendTodos} className="mt-2 text-white bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add Todo</button>
        }
      </div>
    </div>
  )
}

export default page

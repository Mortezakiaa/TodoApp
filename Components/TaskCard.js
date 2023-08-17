'use client'
import axios from "axios";
import { useState } from "react";
import { BiRightArrow, BiLeftArrow , BiTrashAlt} from "react-icons/bi";
import {RiTodoLine} from 'react-icons/ri'
function TaskCard({items , data , next , back}) {
  const [state , setState] = useState(data)
  const UpdateTodosStatus = (id , status)=>{
    axios.patch(`/api/todo/${id}` , {status}).then((res)=>{
      setState(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const RemoveTodos = (id)=>{
    axios.delete(`/api/todo/${id}`).then((res)=>{
      setState(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  return (
        <div className="w-full p-6 md:w-1/2 xl:w-1/4">
            <div className="p-2 text-gray-800 uppercase border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg bg-gradient-to-b from-gray-300 to-gray-100">
                <h2 className="font-bold text-gray-600 uppercase">{items}</h2>
            </div>   
            <div className="flex pt-1 flex-col gap-2 bg-stone-300">
              {state?.map((item)=>(
                <div className="bg-white p-2 border-transparent rounded-lg shadow-xl" key={item._id}>
                  <div className="flex gap-2 items-center">
                  <RiTodoLine/>
                  <h2 className="break-all">{item.title}</h2>
                  </div>
                    <div className="p-2 text-center">
                        <div className="flex items-center justify-between">
                          {back ? 
                          <button type="button" onClick={()=> UpdateTodosStatus(item._id , back)} className="flex items-center p-1 text-sm font-medium text-center text-yellow-400 border border-yellow-400 rounded-lg hover:text-white hover:bg-yellow-500 focus:outline-none dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400">
                            <BiLeftArrow/>
                            <span>Back</span>
                          </button>:''
                          }
                          {
                            !next?
                          <button type="button" onClick={()=> RemoveTodos(item._id)} className="flex items-center p-1 text-sm font-medium text-center text-red-700 border border-red-700 rounded-lg hover:text-white hover:bg-red-800 focus:outline-none dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600">
                            <BiTrashAlt/>
                            <span>Remove</span>
                          </button>:''
                          }
                          {next ? 
                          <button type="button" onClick={()=> UpdateTodosStatus(item._id , next)} className="flex items-center p-1 text-sm font-medium text-center text-green-700 border border-green-700 rounded-lg hover:text-white hover:bg-green-800 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 focus:outline-none">
                            <span>Next</span>
                            <BiRightArrow/>
                          </button>:''
                          }
                        </div>
                    </div>  
                </div> 
              ))}
            </div>
        </div> 
  )
}

export default TaskCard

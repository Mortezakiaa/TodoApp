'use client'
import MainHeader from "@/Components/MainHeader"
import TaskCard from "@/Components/TaskCard"
import axios from "axios"
import { useEffect, useState } from "react"


function Page() {
  const [state,setState] = useState()
  useEffect(()=>{
    fetchTodos()
  },[])
  const fetchTodos = async ()=>{
    const res = await axios.get('/api/todo')
    const data = await res.data
    setState(data.message)
  }  
  return (
    <div>
      <MainHeader headerText={'Todos'}/>
      <div className="flex flex-row flex-wrap flex-grow mt-2">
        <TaskCard fetchTodos={fetchTodos} items={'Todo'} data={state?.Todo} next="InProgress"/>
        <TaskCard fetchTodos={fetchTodos} items={'In Progress'} data={state?.InProgress} next="Review" back="Todo"/>
        <TaskCard fetchTodos={fetchTodos} items={'Review'} data={state?.Review} next="Done" back="InProgress"/>
        <TaskCard fetchTodos={fetchTodos} items={'Done'} data={state?.Done} back="Review"/>
      </div>
    </div>
  )
}

export default Page


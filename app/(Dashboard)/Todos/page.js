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
        <TaskCard fetchTodos={fetchTodos} items={'Daily Todos'} data={state?.DailyTodo} next="WeeklyTodo"/>
        <TaskCard fetchTodos={fetchTodos} items={'Weekly Todos'} data={state?.WeeklyTodo} next="MonthlyTodo" back="DailyTodo"/>
        <TaskCard fetchTodos={fetchTodos} items={'Monthly Todos'} data={state?.MonthlyTodo} back="WeeklyTodo"/>
      </div>
    </div>
  )
}

export default Page


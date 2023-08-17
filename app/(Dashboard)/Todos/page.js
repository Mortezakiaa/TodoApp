import MainHeader from "@/Components/MainHeader"
import TaskCard from "@/Components/TaskCard"
import User from "@/Model/UserModel"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { ConnectToDb } from "@/utils/ConnectToDb"
import axios from "axios"
import { getServerSession } from "next-auth"

export const dynamic = 'force-dynamic'

async function Page() {
  await ConnectToDb()
  const session = await getServerSession(authOptions)
  const user = await User.findOne({email:session?.user.email})
  let ID = user?._id.valueOf()
   const res = await axios.get(`http://localhost:3000/api/todo/${ID}`)
   const data = await res.data
  return (
    <div>
      <MainHeader headerText={'Todos'}/>
      <div className="flex flex-row flex-wrap flex-grow mt-2">
        <TaskCard items={'Todo'} data={data.message.Todo} next="InProgress"/>
        <TaskCard items={'In Progress'} data={data.message.InProgress} next="Review" back="Todo"/>
        <TaskCard items={'Review'} data={data.message.Review} next="Done" back="InProgress"/>
        <TaskCard items={'Done'} data={data.message.Done} back="Review"/>
      </div>
    </div>
  )
}

export default Page


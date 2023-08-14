import MainHeader from "@/Components/MainHeader"
import TaskCard from "@/Components/TaskCard"
import User from "@/Model/UserModel"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { ConnectToDb } from "@/utils/ConnectToDb"
import { getServerSession } from "next-auth"

async function Page() {
  const session = await getServerSession(authOptions)
  await ConnectToDb()
  const user = await User.findOne({email:session.user.email})
  let ID = user._id.valueOf()
   const res = await fetch(`http://localhost:3000/api/todo/${ID}` , {cache:'no-store'})
  //  const data = await res.json()
  return (
    <div>
      <MainHeader headerText={'Todos'}/>
      <div  className="flex flex-row flex-wrap flex-grow mt-2">
        <TaskCard/>
      </div>
    </div>
  )
}

export default Page


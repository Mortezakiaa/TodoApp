import User from "@/Model/UserModel"
import { ConnectToDb } from "@/utils/ConnectToDb"
import SortedTodos from "@/utils/SortedTodos"
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "../../auth/[...nextauth]/route"

export async function GET(req,context){
    try {
        await ConnectToDb()
        const session = await getServerSession(authOptions) // with getServerSession(req) is returns null!!!
        console.log(session) // returns null !!!!
        const {userID} = context.params
        const user = await User.findOne({_id:userID})
        const data = SortedTodos(user.todos)
        return NextResponse.json({message:data} , {status:200})
    } catch (error) {
        return NextResponse.json({message:'Somethings Went Wrong!'} , {status:500})
    }
}
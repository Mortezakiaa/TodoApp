import User from "@/Model/UserModel"
import { ConnectToDb } from "@/utils/ConnectToDb"
import SortedTodos from "@/utils/SortedTodos"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function GET(req,context){
    try {
        await ConnectToDb()
        const {userID} = context.params
        const user = await User.findOne({_id:userID})
        const data = SortedTodos(user.todos)
        return NextResponse.json({message:data} , {status:200})
    } catch (error) {
        return NextResponse.json({message:'Somethings Went Wrong!'} , {status:500})
    }
}

export async function PATCH (req,context){
    try {
        await ConnectToDb() 
        const dataID = context.params.userID
        const {status} = await req.json()
        const session = await getServerSession(req)
        if(!session) return NextResponse.json({message:'Please Login!'},{status:401})
        const user = await User.findOne({email:session.user.email})
        const data = user.todos.filter(item => item.id === dataID)
        data[0].status = status
        user.save()
        return NextResponse.json({message:data} , {status:200})
    } catch (error) {   
        return NextResponse.json({message:'Somethings Went Wrong!'} , {status:500})
    }
}

export async function DELETE(req,context){
    try {
        await ConnectToDb() 
        const dataID = context.params.userID
        const session = await getServerSession(req)
        if(!session) return NextResponse.json({message:'Please Login!'},{status:401})
        const user = await User.findOne({email:session.user.email})
        const data = user.todos.filter(item => item.id !== dataID)
        user.todos = data
        user.save()
        return NextResponse.json({message:data} , {status:200})
    } catch (error) {
        return NextResponse.json({message:'Somethings Went Wrong!'} , {status:500})
    }
}
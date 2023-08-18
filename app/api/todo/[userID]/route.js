import User from "@/Model/UserModel"
import { ConnectToDb } from "@/utils/ConnectToDb"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function PATCH (req,context){
    try {
        await ConnectToDb() 
        const dataID = context.params.userID
        const {status} = await req.json()
        const session = await getServerSession(req)
        if(!session) return NextResponse.json({message:'Please Login!'},{status:401})
        const user = await User.updateOne({"todos._id":dataID} , {$set:{"todos.$.status":status}})
        return NextResponse.json({message:'success'} , {status:200})
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
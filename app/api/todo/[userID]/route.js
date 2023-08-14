import User from "@/Model/UserModel"
import { ConnectToDb } from "@/utils/ConnectToDb"
import { NextResponse } from "next/server"

export async function GET(req,context){
    try {
        await ConnectToDb()
        const {userID} = context.params
        const user = await User.findOne({_id:userID})
        console.log(user);
    } catch (error) {
        return NextResponse.json({message:'Somethings Went Wrong!'} , {status:500})
    }
}
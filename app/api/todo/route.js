import User from "@/Model/UserModel";
import { ConnectToDb } from "@/utils/ConnectToDb";
import { getServerSession } from "next-auth";
import { NextResponse} from "next/server";

export async function POST(req){
    try {
        await ConnectToDb()
        const data = await req.json()
        const {status,title} = data.data
        const {user:{email}} = await getServerSession(req)
        const user = await User.findOne({email:email})
        if(!user){
            return NextResponse.json({error:'Failed' , message:'User not Found!!!'} , {status:404})
        }
        if(!status || !title){
            return NextResponse.json({error:'Failed' , message:'Invalid Data !!!!'} , {status:422})
        }
         await user.todos.push({status,title})
         await user.save()
         return NextResponse.json({status:'Success' , message:'Todo Created !!!'})
    } catch (error) {
        return NextResponse.json({error:'Failed' , message:'Error To Connect To DB'} , {status:500})
    }
   
}


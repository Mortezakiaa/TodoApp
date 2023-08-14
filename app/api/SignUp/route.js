import { NextResponse } from "next/server"
import { ConnectToDb, HashedPass } from "@/utils/ConnectToDb"
import User from "@/Model/UserModel"

export async function POST(req){
    const body = await req.json()
    const {email , password} = body
    try {
        await ConnectToDb()
    } catch (error) {
        return NextResponse.json({error:'Failed' , message:'Failed To ConnectTo DB'} , {status:500})
    }
    if(email == '' || password == ''){
        return NextResponse.json({error:'Failed' , message:'Invalid Registration !!!'} , {status:422})
    }

    const OldUser = await User.findOne({email:email})
    if(OldUser){
        return NextResponse.json({error:'Failed' , message:'User is Exist!!'} , {status:409})
    }
    const hashPassword = await HashedPass(password)
    const newUser = await User.create({email:email,password:hashPassword})
    return NextResponse.json({status:'Success' , message:'User Created'})
}
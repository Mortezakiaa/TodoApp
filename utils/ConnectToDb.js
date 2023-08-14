import { compare, hash } from "bcryptjs";
import { verify } from "jsonwebtoken";
import mongoose from "mongoose"

export async function ConnectToDb() {
    if(mongoose.connections[0].readyState === 1)return
    await mongoose.connect(process.env.MONGO_URI)
    console.log('Connceted TO DB');
}

export async function HashedPass(pass){
    const hashPass = await hash(pass,12)
    return hashPass
}

export async function verifyPass(pass,hashPass){
    const isValid = await compare(pass,hashPass)
    return isValid
}

export function verifyToken(token,secretKey){
    try {
        const res = verify(token,secretKey)
        return {email:res.email}
    } catch (error) {
        return false
    }
}

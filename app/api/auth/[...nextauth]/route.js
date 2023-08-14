import NextAuth from "next-auth"
import User from "@/Model/UserModel"
import { ConnectToDb , verifyPass } from "@/utils/ConnectToDb"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOptions = {
    session:{strategy:'jwt'},
    providers:[
        CredentialsProvider({
           async authorize(credentials){
                const {email,password} = credentials
                try {
                    await ConnectToDb()

                    if(!email || !password){
                        throw new Error('Invalid Data')
                    }
                    const user = await User.findOne({email})
    
                    if(!user){
                        throw new Error('User is NotExist')
                    }
    
                    const isValid = await verifyPass(password,user.password)
                    if(!isValid) throw new Error('Email Or Password is Wrong!!!')
                    return {email}
                } catch (error) {
                    throw new Error('Failed To Connect To DB')
                }
           }
        })
    ]
}


const handler = NextAuth(authOptions)

export {handler as GET , handler as POST}
import User  from "../../models/User"
import mongoose from "mongoose"

// Create user function
export async function POST (request){

    const body = await request.json()

    const pass = body.password

    if(!pass?.length || pass.length < 5){
        new Error('Password must be at least 5 characters!')
        return false
    }

    // Hashing password with bcrypt
    const plainPassword = pass

    const salt = bcrypt.genSaltSync(10);
    const hashedPassworrd = bcrypt.hashSync(plainPassword, salt);
    body.password = hashedPassworrd
  

    mongoose.connect(process.env.MONGO_URL)
    const createdUser = await User.create(body)


    return Response.json(createdUser)
}
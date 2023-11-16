import User  from "../../models/User"
import mongoose from "mongoose"

export async function POST (request){

    const body = await request.json()

    mongoose.connect(process.env.MONGO_URL)
    const createdUser = await User.create(body)


    return Response.json(createdUser)
}
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/app/models/User";


export async function PUT(req){

    mongoose.connect(process.env.MONGO_URL);

    const data = await req.json();
    const session = await getServerSession(authOptions);
    const email = session.user.email

    // const user = User.findOne({email)

    console.log({session, data})

    if('name' in data ){
        // update user name
        // UpdateOne - trazimo korisnika u bazi po email koji dolazi iz sessije i updejtujemo podatke
        await User.updateOne({email}, {name: data.name})
    }

    return Response.json(true)
}
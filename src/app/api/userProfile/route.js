import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { User } from "@/app/models/User";
import { UserInfo } from "@/app/models/UserInfo";


// Update user profile function
export async function PUT(req){

    mongoose.connect(process.env.MONGO_URL);

    const data = await req.json();
    const session = await getServerSession(authOptions);
    const email = session.user.email

    // name i image idu u jednu kolekciju u db (user kolekcija)
    // otherUserInfo su ostali podaci iz forme kojiidu u drugu kolekciju u db (userInfo kooekcija)
    const {name, image, ...otherUserInfo} = data

    // console.log(otherUserInfo)

    // const user = User.findOne({email)

    // console.log({session, data})

    // const update = {}

    // if('name' in data){
    //     update.name = data.name
    // }

    
    // if('image' in data){
    //     update.image = data.image
    // }
    
    // if(Object.keys(update).length > 0 ){
    //     // update user name
    //     // UpdateOne - trazimo korisnika u bazi po email koji dolazi iz sessije i updejtujemo podatke
    //     // await User.updateOne({email}, {name: data.name})
    //     await User.updateOne({email}, update)
    // }
    await User.updateOne({email}, {name, image})

    await UserInfo.findOneAndUpdate({email}, otherUserInfo, {upsert: true})

    return Response.json(true)
}


// Get user by emailb
export async function GET() {

  mongoose.connect(process.env.MONGO_URL)

  const session = await getServerSession(authOptions);
  const email = session?.user?.email

  if(!email){
    return Response.json({})
  }
  
  const user = await User.findOne({email}).lean()
  const userInfo = await UserInfo.findOne({email}).lean()
  return Response.json({...user, ...userInfo})
}

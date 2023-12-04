import mongoose from "mongoose";
import { Category } from "@/app/models/Category";


// Create category
export async function POST(req){

    const {name} = await req.json()

    mongoose.connect(process.env.MONGO_URL)
    const createdCategory = await Category.create({name})

    return Response.json(createdCategory)
}


// Get user by emailb
// export async function GET() {

//   mongoose.connect(process.env.MONGO_URL)

//   const session = await getServerSession(authOptions);
//   const email = session?.user?.email

//   if(!email){
//     return Response.json({})
//   }
  
//   const user = await User.findOne({email}).lean()
//   const userInfo = await UserInfo.findOne({email}).lean()
//   return Response.json({...user, ...userInfo})
// }

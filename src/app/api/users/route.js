import mongoose from "mongoose";
import { User } from "@/app/models/User";
import { UserInfo } from "@/app/models/UserInfo";


// Get all users
export async function GET() {

  mongoose.connect(process.env.MONGO_URL)
//   return Response.json(
//     await UserInfo.find()
//   )


  const user = await User.find().lean()
  const userInfo = await UserInfo.find().lean()


  const mergedArrays = userInfo.map((item) => {
    const matchedObject = user.find((obj) => obj.email  === item.email);
    return { ...item, ...matchedObject };
  });

  return Response.json(mergedArrays)
}


// Update user
// export async function PUT(req) {

//     const {_id, name} = await req.json()

//     mongoose.connect(process.env.MONGO_URL)
   
//     await Category.updateOne({_id}, {name})

//     return Response.json(true)
// }


// Update user
// export async function DELETE(req) {

//     const {_id} = await req.json()

//     mongoose.connect(process.env.MONGO_URL)
   
//     await Category.deleteOne({_id})

//     return Response.json(true)
// }

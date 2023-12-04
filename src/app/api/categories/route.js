import mongoose from "mongoose";
import { Category } from "@/app/models/Category";


// Create category
export async function POST(req){

    const {name} = await req.json()

    mongoose.connect(process.env.MONGO_URL)
    const createdCategory = await Category.create({name})

    return Response.json(createdCategory)
}


// Get all categories
export async function GET() {

  mongoose.connect(process.env.MONGO_URL)
  return Response.json(
    await Category.find()
  )
}


// Update category
export async function PUT(req) {

    const {_id, name} = await req.json()

    mongoose.connect(process.env.MONGO_URL)
   
    await Category.updateOne({_id}, {name})

    return Response.json(true)
}

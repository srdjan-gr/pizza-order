import mongoose from "mongoose";
import { Menu } from "@/app/models/Menu";

// Create pizza
export async function POST(req) {
  const { image, name, ingredients, sizeAndPrice } = await req.json();

  mongoose.connect(process.env.MONGO_URL);
  const createdPizza = await Menu.create({
    image,
    name,
    ingredients,
    sizeAndPrice,
  });

  return Response.json(createdPizza);
}

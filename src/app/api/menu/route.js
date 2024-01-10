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

// Get all items
export async function GET() {
  mongoose.connect(process.env.MONGO_URL);
  return Response.json(await Menu.find());
}

// Update single Pizza
export async function PUT(req) {
  const { _id, published, prop } = await req.json();

  console.log(published);

  mongoose.connect(process.env.MONGO_URL);

  if (prop === "editPublished") {
    await Menu.updateOne({ _id }, { published });
  }

  if (prop === "editPizza") {
    await Menu.updateOne({ _id }, { published });
  }

  return Response.json(true);
}

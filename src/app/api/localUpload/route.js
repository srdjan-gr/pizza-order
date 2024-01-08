import mongoose from "mongoose";
import { Menu } from "@/app/models/Menu";

import uniqid from "uniqid";
// import path from "path";
import { writeFile, fs } from "fs/promises";

export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");

  if (!file) {
    return Response.json({ message: 500 });
  }

  //   mongoose.connect(process.env.MONGO_URL);

  const fileName = file.name.split(".")[0];
  const ext = file.name.split(".").slice(-1)[0];
  const newFileName = uniqid() + "-" + fileName + "." + ext;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const path = `./public/pizzaImages/${newFileName}`;
  await writeFile(path, buffer);

  //   await Menu.create({ image: newFileName });

  return Response.json(newFileName);
}

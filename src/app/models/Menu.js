const { Schema, models, model } = require("mongoose");

// PIzza menu prices
const sizeAndPriceShema = new Schema({
  size: String,
  price: Number,
});

// Mongo Pizza Menu Model
const MenuSchema = new Schema(
  {
    image: {
      type: String,
      requireed: true,
      unique: true,
    },
    name: {
      type: String,
      requireed: true,
      unique: true,
    },
    allergens: {
      type: String,
      requireed: true,
    },
    ingredients: {
      type: String,
      requireed: true,
    },
    sizeAndPrice: {
      type: [sizeAndPriceShema],
      requireed: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Menu = models?.Menu || model("Menu", MenuSchema);

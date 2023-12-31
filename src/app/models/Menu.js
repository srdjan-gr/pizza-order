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
      // requireed: true,
      // unique: true,
    },
    name: {
      type: String,
      requireed: true,
      unique: true,
    },
    ingredients: {
      type: String,
      requireed: true,
      unique: true,
    },
    sizeAndPrice: {
      type: [sizeAndPriceShema],
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Menu = models?.Menu || model("Menu", MenuSchema);

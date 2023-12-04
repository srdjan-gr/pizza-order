const { Schema, models, model } = require("mongoose");

// Mongo Category Model
const CategorySchema = new Schema({
    name: {
        type: String,
        requireed: true, 
        unique: true
    },
    published: {
        type: Boolean, 
        default: false
    },

}, {timestamps: true})



export const Category = models?.Category || model('Category', CategorySchema)
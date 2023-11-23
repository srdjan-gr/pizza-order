const { Schema, models, model } = require("mongoose");

// Mongo User Model
const UserSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String, 
        requireed: true, 
        unique: true
    },
    password: {
        type: String, 
        reguired: true,
    }, 
    image: { type: String },
    phone: { type: String },
    country: {  type: String },
    zip: {type: String },
    city: { type: String },
    address: { type: String },

}, {timestamps: true})



export const User = models?.User ||  model('User', UserSchema)

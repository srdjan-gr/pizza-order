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
    image: {
        type: String
    },
}, {timestamps: true})



export const User = models?.User ||  model('User', UserSchema)

const { Schema, models, model } = require("mongoose");
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    name: {type: String},
    email: {
        type: String, 
        requireed: true, 
        unique: true
    },
    password: {
        type: String, 
        reguired:true,
    }
}, {timestamps: true})



export const User = models?.User ||  model('User', UserSchema)

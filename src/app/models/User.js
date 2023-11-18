const { Schema, models, model } = require("mongoose");
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    email: {
        type: String, 
        requireed: true, 
        unique: true
    },
    password: {
        type: String, 
        reguired:true,
        validate: pass => {
            if(!pass?.length || pass.length < 5){
                new Error('Password must be at least 5 characters!')
                return false
            }
        },
    }
}, {timestamps: true})


// Hashing password with bcrypt
UserSchema.post('validate', (user) => {

    const plainPassword = user.password

    const salt = bcrypt.genSaltSync(10);
    const hashedPassworrd = bcrypt.hashSync(plainPassword, salt);

    user.password = hashedPassworrd
})

export const User = models?.User ||  model('User', UserSchema)

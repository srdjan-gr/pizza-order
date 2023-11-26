const { Schema, models, model } = require("mongoose");

// Mongo UserInfob Model
const UserInfoSchema = new Schema({

    email: {type: String, required: true},
    phone: { type: String },
    country: {  type: String },
    zip: {type: String },
    city: { type: String },
    address: { type: String },
    address2: { type: String },
    admin: {type: Boolean, default: false},

}, {timestamps: true})

export const UserInfo = models?.UserInfo ||  model('UserInfo', UserInfoSchema)

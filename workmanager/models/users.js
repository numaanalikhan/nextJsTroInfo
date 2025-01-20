import mongoose, { Schema } from "mongoose";

const userSchema = new Schema ({
    name:String,
    email:{
        unique:true,
        type:String,
    },
    password:String,
    about:String,
    profileUrl:String
})

export const userModel = mongoose.models.users || mongoose.model("users",userSchema)
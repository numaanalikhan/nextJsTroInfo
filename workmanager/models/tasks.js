import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    addedDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    // dueDate
    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending"
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
    //pending,completed
})

export const taskModel = mongoose.models.tasks ||mongoose.model("tasks",taskSchema)
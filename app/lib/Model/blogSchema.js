import mongoose from "mongoose";

let BlogSchema = mongoose.Schema({
    title:String,
    description:String,
    imagelink:String,
    userid:String
    
   
})

if( mongoose.models["blogs"]){
    delete  mongoose.models["blogs"]

}

export const BlogModel = mongoose.model("blogs",BlogSchema)
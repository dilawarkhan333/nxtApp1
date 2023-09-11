import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectLink } from '../../lib/db'
import {BlogModel } from '../../lib/Model/blogSchema'

export async function GET() {

    await mongoose.connect(ConnectLink).then((val) => {
        console.log("test connect")
    })

    let checkuser = await BlogModel.find({ })

    console.log(checkuser)

    if(checkuser!=null){
        return NextResponse.json({
            data: checkuser,
            message: "GET all Blog"
        })

    }
    else{
        return NextResponse.json({
            data:[],
            message: "Not add any Blog"
        })
    }  
}
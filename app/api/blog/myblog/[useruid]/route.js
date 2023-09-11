import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectLink } from '../../../../lib/db'
import { BlogModel } from '../../../../lib/Model/blogSchema'

export async function GET(request,content) {
    console.log(content.params.useruid)

    await mongoose.connect(ConnectLink).then((val) => {
        console.log("test connect")
    })

    let checkuser = await BlogModel.find({ userid: content.params.useruid })

    console.log(checkuser)

    if(checkuser!=null){
        return NextResponse.json({
            data: checkuser,
            message: "GET Your blog"
        })

    }
    else{
        return NextResponse.json({
            data:[],
            message: "Not add any blog"
        })
    }  
}
import mongoose, { mongo } from "mongoose"
import { ConnectLink } from "../../../lib/db"
import { NextResponse } from "next/server"
import { BlogModel } from "../../../lib/Model/blogSchema"

export async function PUT(request, content) {
    const EditId = content.params.editid;
    const filter = { _id: EditId }
    const pay = await request.json();
    console.log(pay)
    await mongoose.connect(ConnectLink)
    const res = await BlogModel.findOneAndUpdate(filter, pay)

    return NextResponse.json({ res, success: true })

}

export async function GET(request, content) {
    const EditId = content.params.editid;
    const rec = { _id: EditId }
    await mongoose.connect(ConnectLink)
    const res = await BlogModel.findById(rec)
    return NextResponse.json({ res, success: true })

}

export async function DELETE(request,content){
    const EditId = content.params.editid;
    const record = {_id:EditId}
await mongoose.connect(ConnectLink);
const res = await BlogModel.deleteOne(record);
return NextResponse.json({res,success:true})

}
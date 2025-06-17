import { Connect } from "@/app/config/db";
import client from "@/app/model/Consumermodel"
import { NextRequest,NextResponse } from "next/server";
Connect()

export async function GET() {
    const alluser= await client.find()
    return NextResponse.json({message:true,alluser})
    
}
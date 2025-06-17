import client from "@/app/model/Consumermodel";
import { Connect } from "@/app/config/db";
import { NextRequest, NextResponse } from "next/server";

Connect();

export async function POST(req) {
    try {
        const reqBody =  await req.json();
        const { Name, email ,message} = reqBody;

        if (!Name || !email ||  !message ) {
            return NextResponse.json({ message: "All fields are required", success: false }, { status: 400 });
        }

        const newUser = new client({ Name, email ,message});
        const savedUser = await newUser.save();

        return NextResponse.json({ message: "Thanks for connecting", success: true, savedUser });
    } catch (error) {
        console.error("Error saving user:", error);
        return NextResponse.json({ message: "Error saving user", success: false, error: error.message }, { status: 500 });
    }
}
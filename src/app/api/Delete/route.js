import { Connect } from "@/app/config/db";
import clientmodel from "@/app/model/Consumermodel";
import { NextResponse } from "next/server";

Connect();

export async function DELETE(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    try {
        const data = await clientmodel.findByIdAndDelete(id);
        if (!data) {
            return NextResponse.json({ message: "No data found", success: false }, { status: 400 });
        }
        return NextResponse.json({ message: "Data deleted", success: true });
    } catch (error) {
        return NextResponse.json({ message: "Error in deleting", success: false, error: error.message }, { status: 400 });
    }
}
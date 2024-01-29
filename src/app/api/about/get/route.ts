import connectToDatabase from "@/database";
import About from "@/models/About";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        await connectToDatabase();
        const data = await About.find({});
        
        if (data) {
            return NextResponse.json({
                success: true,
                data: data,
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Something went wrong !Please try again",
            });
        }
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: "Something went wrong !Please try again",
        });
    }
}
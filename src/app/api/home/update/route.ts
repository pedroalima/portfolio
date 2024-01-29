import connectToDatabase from "@/database";
import Home from "@/models/Home";
import { NextResponse, type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req: NextRequest) {
    try {
        await connectToDatabase();
        const extractData = await req.json();
        const { _id, mainText, description } = extractData;
        const updateData = await Home.findOneAndUpdate(
            { _id },
            { mainText, description },
            { new: true }
        );

        if (updateData) {
            return NextResponse.json({
                success: true,
                message: "Data update successfully"
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Something went wrong! Please try again"
            });
        }
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: "Something went wrong! Please try again"
        });
    }
}
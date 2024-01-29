import connectToDatabase from "@/database";
import About from "@/models/About";
import { NextResponse, type NextRequest } from "next/server";


export const dynamic = "force-dynamic";

export async function PUT(req: NextRequest) {
    try {
        await connectToDatabase();
        const extractData = await req.json();
        const { _id, about, projects, experience, skills } = extractData;
        const updateData = await About.findOneAndUpdate(
            { _id },
            { about, projects, experience, skills },
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


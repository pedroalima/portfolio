import connectToDatabase from "@/database";
import Experience from "@/models/Experience";
import { NextResponse, type NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req: NextRequest) {
    try {
        await connectToDatabase();
        const extractData = await req.json();
        const { _id } = extractData;
        const deleteData = await Experience.findOneAndDelete(
            { _id }
        );

        if (deleteData) {
            return NextResponse.json({
                success: true,
                message: "Data deleted successfully"
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
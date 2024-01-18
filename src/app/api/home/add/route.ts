import connectToDatabase from "@/database";
import Home from "@/models/Home";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: NextApiRequest) {
    try {
        await connectToDatabase();
        const extractData = await req.body;
        const saveData = await Home.create(extractData);

        if (saveData) {
            return NextResponse.json({
                success: true,
                message: "Data saved successfully",
            });
        } else {
            return NextResponse.json({
                success: false,
                message: "Something goes wrong! Please try again",
            });
        }
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message: "Something goes wrong! Please try again",
        });
    }
}
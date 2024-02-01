import connectToDatabase from "@/database";
import User from "@/models/User";
import { compare, hash } from "bcryptjs";
import { NextResponse, type NextRequest } from "next/server";


export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    try {
        await connectToDatabase();
        const { username, password } = await req.json();

        const checkUser = await User.findOne({username});

        if (!checkUser) {
            return NextResponse.json({
                success: false,
                message: "User name is not present! Please try again"
            });
        }

        const hashPassword = await hash(checkUser.password, 12);
        const checkPassword = await compare(password, hashPassword);

        if (!checkPassword) {
            return NextResponse.json({
                success: false,
                message: "Wrong password. Please try again"
            });
        } else {
            return NextResponse.json({
                success: true,
                message: "Login successfully"
            });
        }

    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: true,
            message: "Something goes wrong. Please try again"
        });
    }
}
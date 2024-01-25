import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

    const token = request.cookies.get("auth_token");

    const adminRoute = new URL("/admin", request.url);
    const loginRoute = new URL("/login", request.url);

    if (!token) {
        if (request.nextUrl.pathname == "/") {
            return NextResponse.next();
        }
    
        if (request.nextUrl.pathname == "/login") {
            return NextResponse.next();
        }
    
        return NextResponse.redirect(loginRoute);
    }

    if (request.nextUrl.pathname == "/") {
        return NextResponse.redirect(adminRoute);
    }

    if (request.nextUrl.pathname == "/login") {
        return NextResponse.redirect(adminRoute);
    }
}

export const config = {
    matcher: ["/", "/login", "/admin"],
};
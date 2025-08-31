import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

const ProtectedRoutes = ["/myreservation", "/checkout", "/admin"]

export async function middleware(request: NextRequest) {
    const session = await auth();
    const isLoggedin = !!session?.user;
    const role = session?.user.role;
    const { pathname } = request.nextUrl;

    if (!isLoggedin && ProtectedRoutes.some((route) => pathname.startsWith(route))) {
        return NextResponse.redirect(new URL("/signin", request.url))
    }

    if (isLoggedin && role !== "admin" && pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    if (isLoggedin && pathname.startsWith("/signin")) {
        return NextResponse.redirect(new URL("/", request.url))
    }
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}
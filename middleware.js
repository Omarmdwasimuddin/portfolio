import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
  const token = req.cookies.get("token")?.value;

  try {
    if (!token) throw new Error("No token");

    await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    return NextResponse.next();
  } catch (e) {
    // For API route
    if (req.nextUrl.pathname.startsWith('/api/')) {
      return NextResponse.json({ status: "unauthorized" }, { status: 401 });
    }

    // For UI route
    return NextResponse.redirect(new URL("/user/login", req.url));
  }
}

export const config = {
  matcher: ["/dashboard"], // Add other protected routes here
};

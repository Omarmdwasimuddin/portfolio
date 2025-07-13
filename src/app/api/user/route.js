import { NextResponse } from "next/server";
import { SignJWT } from "jose";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Check against .env values
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        { status: "fail", message: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = await new SignJWT({ email })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("24h")
      .sign(new TextEncoder().encode(process.env.JWT_SECRET));

    // Create cookie
    const response = NextResponse.json({ status: "success", token });
    response.headers.set(
      "Set-Cookie",
      `token=${token}; Path=/; HttpOnly; Max-Age=86400`
    );

    return response;
  } catch (error) {
    return NextResponse.json({ status: "fail", error: error.message }, { status: 500 });
  }
}

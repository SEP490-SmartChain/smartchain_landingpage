import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    // Mock Check
    if (username !== "admin" || password !== "admin") {
      return NextResponse.json(
        { error: "Invalid credentials (use admin/admin)" },
        { status: 401 }
      );
    }

    const mockToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock_token." + Date.now();

    // Set secure HTTP-only cookie for middleware
    const cookieStore = await cookies();
    cookieStore.set("admin_session", mockToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return NextResponse.json({
      success: true,
      token: mockToken,
      user: { id: 1, username: "admin", name: "Admin User", role: "admin" },
    });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

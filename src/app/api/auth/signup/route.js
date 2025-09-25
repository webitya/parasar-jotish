import { NextResponse } from "next/server"
import { registerUser, generateToken } from "@/lib/auth"

export async function POST(request) {
  try {
    const userData = await request.json()

    // Validate required fields
    if (!userData.name || !userData.email || !userData.password) {
      return NextResponse.json({ message: "Name, email, and password are required" }, { status: 400 })
    }

    // Register user
    const user = await registerUser(userData)

    // Generate JWT token
    const token = generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    })

    // Create response
    const response = NextResponse.json({
      message: "User created successfully",
      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        approved: user.approved,
      },
      token,
    })

    // Set HTTP-only cookie
    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    })

    return response
  } catch (error) {
    console.error("Signup error:", error)
    return NextResponse.json({ message: error.message || "Signup failed" }, { status: 400 })
  }
}

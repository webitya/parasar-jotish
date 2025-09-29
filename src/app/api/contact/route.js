import { NextResponse } from "next/server"
import { createContactSubmission } from "@/lib/db-utils"

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 })
    }

    // Create contact submission
    const result = await createContactSubmission({
      name,
      email,
      subject,
      message,
    })

    return NextResponse.json({
      message: "Thank you for your message. We'll get back to you soon!",
      submissionId: result.insertedId.toString(),
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

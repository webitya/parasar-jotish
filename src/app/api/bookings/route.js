import { NextResponse } from "next/server"
import { createBooking, getUserBookings, getAstrologerBookings } from "@/lib/db-utils"

export async function GET(request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const astrologerId = searchParams.get("astrologerId")

    let bookings = []

    if (userId) {
      bookings = await getUserBookings(userId)
    } else if (astrologerId) {
      bookings = await getAstrologerBookings(astrologerId)
    }

    // Transform data for frontend
    const transformedBookings = bookings.map((booking) => ({
      id: booking._id.toString(),
      userId: booking.userId,
      astrologerId: booking.astrologerId,
      service: booking.service,
      date: booking.date,
      timeSlot: booking.timeSlot,
      status: booking.status,
      amount: booking.amount,
      createdAt: booking.createdAt,
    }))

    return NextResponse.json(transformedBookings)
  } catch (error) {
    console.error("Error fetching bookings:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const bookingData = await request.json()

    // Validate required fields
    if (!bookingData.userId || !bookingData.astrologerId || !bookingData.date || !bookingData.timeSlot) {
      return NextResponse.json({ message: "Missing required booking information" }, { status: 400 })
    }

    // Create booking
    const result = await createBooking({
      ...bookingData,
      status: "pending",
    })

    return NextResponse.json({
      message: "Booking created successfully",
      booking: {
        id: result.insertedId.toString(),
        ...bookingData,
        status: "pending",
      },
    })
  } catch (error) {
    console.error("Error creating booking:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

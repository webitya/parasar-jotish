import { NextResponse } from "next/server"
import { getRecentActivity } from "@/lib/db-utils"

// Mock recent activity data
const recentActivity = [
  {
    id: "1",
    type: "user_signup",
    title: "New User Registration",
    description: "Priya Sharma joined the platform",
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(), // 5 minutes ago
  },
  {
    id: "2",
    type: "astrologer_application",
    title: "Astrologer Application",
    description: "Dr. Rajesh Kumar applied to become an astrologer",
    timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(), // 15 minutes ago
  },
  {
    id: "3",
    type: "booking_created",
    title: "New Booking",
    description: "Session booked with Acharya Sharma",
    timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
  },
  {
    id: "4",
    type: "payment_received",
    title: "Payment Received",
    description: "₹1200 payment for astrology session",
    timestamp: new Date(Date.now() - 45 * 60 * 1000).toISOString(), // 45 minutes ago
  },
  {
    id: "5",
    type: "user_signup",
    title: "New User Registration",
    description: "Amit Patel joined the platform",
    timestamp: new Date(Date.now() - 60 * 60 * 1000).toISOString(), // 1 hour ago
  },
]

export async function GET(request) {
  try {
    // In a real app, you would verify admin authentication here
    const activities = await getRecentActivity()
    return NextResponse.json(activities)
  } catch (error) {
    console.error("Error fetching admin activity:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

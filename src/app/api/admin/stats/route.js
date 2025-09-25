import { NextResponse } from "next/server"
import { getAdminStats } from "@/lib/db-utils"

export async function GET(request) {
  try {
    // In a real app, you would verify admin authentication here
    const stats = await getAdminStats()
    return NextResponse.json(stats)
  } catch (error) {
    console.error("Error fetching admin stats:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

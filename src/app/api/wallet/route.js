import { NextResponse } from "next/server"
import { getUserWallet, updateWalletBalance } from "@/lib/db-utils"

export async function GET(request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")

    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 })
    }

    const wallet = await getUserWallet(userId)

    return NextResponse.json({
      userId: wallet.userId,
      balance: wallet.balance,
      transactions: wallet.transactions || [],
    })
  } catch (error) {
    console.error("Error fetching wallet:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { userId, amount, type, description } = await request.json()

    // Validate required fields
    if (!userId || !amount || !type) {
      return NextResponse.json({ message: "Missing required information" }, { status: 400 })
    }

    // Update wallet
    const wallet = await updateWalletBalance(userId, amount, type, description)

    return NextResponse.json({
      message: "Transaction processed successfully",
      wallet: {
        userId: wallet.userId,
        balance: wallet.balance,
        transactions: wallet.transactions,
      },
    })
  } catch (error) {
    console.error("Error processing transaction:", error)
    return NextResponse.json(
      {
        message: error.message || "Internal server error",
      },
      { status: 400 },
    )
  }
}

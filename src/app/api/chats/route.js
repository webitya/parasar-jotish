import { NextResponse } from "next/server"
import { getUserChats, createChat } from "@/lib/db-utils"

// Mock chat data
const chats = [
  {
    id: "1",
    userId: "101",
    astrologerId: "1",
    astrologerName: "Acharya Sharma",
    lastMessage: "Thank you for the insightful reading!",
    lastMessageTime: "2025-06-11T14:30:00Z",
    unreadCount: 0,
    status: "completed",
  },
  {
    id: "2",
    userId: "101",
    astrologerId: "2",
    astrologerName: "Divya Jyotishi",
    lastMessage: "The cards are showing positive energy around your career...",
    lastMessageTime: "2025-06-10T16:45:00Z",
    unreadCount: 2,
    status: "active",
  },
  {
    id: "3",
    userId: "102",
    astrologerId: "1",
    astrologerName: "Acharya Sharma",
    lastMessage: "Your birth chart indicates strong leadership qualities",
    lastMessageTime: "2025-06-09T11:20:00Z",
    unreadCount: 0,
    status: "completed",
  },
]

export async function GET(request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get("userId")
    const astrologerId = searchParams.get("astrologerId")

    let chats = []

    if (userId) {
      chats = await getUserChats(userId)
    }
    // Add astrologer chats logic if needed

    // Transform data for frontend
    const transformedChats = chats.map((chat) => ({
      id: chat._id.toString(),
      userId: chat.userId,
      astrologerId: chat.astrologerId,
      astrologerName: chat.astrologerName,
      lastMessage: chat.lastMessage || "",
      lastMessageTime: chat.lastMessageTime || chat.createdAt,
      unreadCount: chat.unreadCount || 0,
      status: chat.status || "active",
    }))

    return NextResponse.json(transformedChats)
  } catch (error) {
    console.error("Error fetching chats:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const chatData = await request.json()

    // Validate required fields
    if (!chatData.userId || !chatData.astrologerId) {
      return NextResponse.json({ message: "Missing required chat information" }, { status: 400 })
    }

    // Create chat
    const result = await createChat({
      ...chatData,
      lastMessage: "",
      lastMessageTime: new Date(),
      unreadCount: 0,
      status: "active",
    })

    return NextResponse.json({
      message: "Chat created successfully",
      chat: {
        id: result.insertedId.toString(),
        ...chatData,
        status: "active",
      },
    })
  } catch (error) {
    console.error("Error creating chat:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

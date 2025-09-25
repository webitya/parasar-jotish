"use client"

import { motion } from "framer-motion"
import { Chat, AccessTime } from "@mui/icons-material"

export default function ChatHistory({ chats }) {
  if (!chats || chats.length === 0) {
    return (
      <div className="text-center py-8">
        <Chat className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">No conversations yet</p>
        <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
          Start a Chat
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {chats.map((chat, index) => (
        <motion.div
          key={chat.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-4 border border-border rounded-lg hover:shadow-sm transition-shadow cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-3">
                {chat.astrologerName?.charAt(0).toUpperCase() || "A"}
              </div>
              <div>
                <p className="font-medium">{chat.astrologerName || "Astrologer"}</p>
                <p className="text-sm text-muted-foreground">{chat.lastMessage}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center text-sm text-muted-foreground mb-1">
                <AccessTime className="h-4 w-4 mr-1" />
                {new Date(chat.lastMessageTime).toLocaleTimeString()}
              </div>
              {chat.unreadCount > 0 && (
                <span className="inline-flex items-center justify-center w-5 h-5 bg-primary text-white text-xs rounded-full">
                  {chat.unreadCount}
                </span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

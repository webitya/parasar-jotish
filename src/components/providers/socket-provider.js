"use client"

import { createContext, useEffect, useState } from "react"
import { io } from "socket.io-client"
import { toast, toastTypes } from "@/components/ui/toaster"

export const SocketContext = createContext()

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null)
  const [connected, setConnected] = useState(false)

  useEffect(() => {
    // Initialize socket connection
    const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3001"

    try {
      const socketInstance = io(socketUrl, {
        autoConnect: false,
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
      })

      // Set up event listeners
      socketInstance.on("connect", () => {
        console.log("Socket connected")
        setConnected(true)
      })

      socketInstance.on("disconnect", () => {
        console.log("Socket disconnected")
        setConnected(false)
      })

      socketInstance.on("error", (error) => {
        console.error("Socket error:", error)
        toast("Connection error. Please refresh the page.", toastTypes.ERROR)
      })

      // Store socket instance
      setSocket(socketInstance)

      // Connect to socket server
      socketInstance.connect()

      // Clean up on unmount
      return () => {
        if (socketInstance) {
          socketInstance.disconnect()
        }
      }
    } catch (error) {
      console.error("Socket initialization error:", error)
      toast("Failed to initialize chat connection.", toastTypes.ERROR)
    }
  }, [])

  return <SocketContext.Provider value={{ socket, connected }}>{children}</SocketContext.Provider>
}

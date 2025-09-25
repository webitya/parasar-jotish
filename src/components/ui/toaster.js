"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Error, Info, Warning, Close } from "@mui/icons-material"

export const toastTypes = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
}

const toastIcons = {
  [toastTypes.SUCCESS]: <CheckCircle className="h-5 w-5" />,
  [toastTypes.ERROR]: <Error className="h-5 w-5" />,
  [toastTypes.WARNING]: <Warning className="h-5 w-5" />,
  [toastTypes.INFO]: <Info className="h-5 w-5" />,
}

const toastStyles = {
  [toastTypes.SUCCESS]: "bg-success text-success-foreground",
  [toastTypes.ERROR]: "bg-destructive text-destructive-foreground",
  [toastTypes.WARNING]: "bg-warning text-warning-foreground",
  [toastTypes.INFO]: "bg-info text-info-foreground",
}

// Create a global toast state
let toastQueue = []
let listeners = []

export function toast(message, type = toastTypes.INFO, duration = 5000) {
  const id = Math.random().toString(36).substring(2, 9)
  const newToast = { id, message, type, duration }
  toastQueue = [...toastQueue, newToast]
  listeners.forEach((listener) => listener(toastQueue))

  // Auto-dismiss after duration
  setTimeout(() => {
    dismissToast(id)
  }, duration)

  return id
}

export function dismissToast(id) {
  toastQueue = toastQueue.filter((t) => t.id !== id)
  listeners.forEach((listener) => listener(toastQueue))
}

export function Toaster() {
  const [toasts, setToasts] = useState([])

  useEffect(() => {
    const handleToastChange = (newToasts) => {
      setToasts(newToasts)
    }

    listeners.push(handleToastChange)
    setToasts(toastQueue)

    return () => {
      listeners = listeners.filter((listener) => listener !== handleToastChange)
    }
  }, [])

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4 w-full sm:w-auto sm:max-w-[420px]">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            className={`flex items-center p-4 rounded-lg shadow-lg ${toastStyles[toast.type]}`}
          >
            <div className="mr-3">{toastIcons[toast.type]}</div>
            <div className="flex-1">{toast.message}</div>
            <button
              onClick={() => dismissToast(toast.id)}
              className="ml-3 opacity-70 hover:opacity-100 transition-opacity"
            >
              <Close className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

"use client"

import { motion } from "framer-motion"
import { CalendarToday, AccessTime, Person, CheckCircle, Schedule, Cancel } from "@mui/icons-material"

const statusConfig = {
  confirmed: {
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-50",
    label: "Confirmed",
  },
  pending: {
    icon: Schedule,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    label: "Pending",
  },
  cancelled: {
    icon: Cancel,
    color: "text-red-600",
    bgColor: "bg-red-50",
    label: "Cancelled",
  },
}

export default function BookingCard({ booking }) {
  const status = statusConfig[booking.status] || statusConfig.pending
  const StatusIcon = status.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 border border-border rounded-lg hover:shadow-sm transition-shadow"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <Person className="h-4 w-4 text-muted-foreground mr-2" />
            <span className="font-medium">{booking.astrologerName || "Astrologer"}</span>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{booking.service}</span>
          </div>

          <div className="flex items-center text-sm text-muted-foreground space-x-4">
            <div className="flex items-center">
              <CalendarToday className="h-4 w-4 mr-1" />
              {new Date(booking.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <AccessTime className="h-4 w-4 mr-1" />
              {booking.timeSlot}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <span className="font-semibold">₹{booking.amount}</span>
          <div className={`flex items-center px-2 py-1 rounded-full ${status.bgColor}`}>
            <StatusIcon className={`h-4 w-4 mr-1 ${status.color}`} />
            <span className={`text-xs font-medium ${status.color}`}>{status.label}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

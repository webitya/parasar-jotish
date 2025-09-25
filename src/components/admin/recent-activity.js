"use client"

import { motion } from "framer-motion"
import { AccessTime, Person, Star, CalendarToday, AccountBalance } from "@mui/icons-material"

const activityIcons = {
  user_signup: <Person className="h-5 w-5" />,
  astrologer_application: <Star className="h-5 w-5" />,
  booking_created: <CalendarToday className="h-5 w-5" />,
  payment_received: <AccountBalance className="h-5 w-5" />,
}

const activityColors = {
  user_signup: "text-blue-600 bg-blue-50",
  astrologer_application: "text-purple-600 bg-purple-50",
  booking_created: "text-green-600 bg-green-50",
  payment_received: "text-orange-600 bg-orange-50",
}

export default function RecentActivity({ activities }) {
  if (!activities || activities.length === 0) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
        <h2 className="text-xl font-semibold mb-6">Recent Activity</h2>
        <div className="text-center py-8">
          <AccessTime className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground">No recent activity</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <button className="text-primary hover:text-primary-dark text-sm font-medium">View all</button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center space-x-4 p-4 border border-border rounded-lg"
          >
            <div className={`p-2 rounded-lg ${activityColors[activity.type] || "text-gray-600 bg-gray-50"}`}>
              {activityIcons[activity.type] || <AccessTime className="h-5 w-5" />}
            </div>
            <div className="flex-1">
              <p className="font-medium">{activity.title}</p>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
            </div>
            <div className="text-sm text-muted-foreground">{new Date(activity.timestamp).toLocaleTimeString()}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

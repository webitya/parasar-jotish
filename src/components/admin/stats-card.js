"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown } from "@mui/icons-material"

export default function StatsCard({ stat }) {
  const isPositive = stat.change?.startsWith("+")

  return (
    <motion.div whileHover={{ y: -2 }} className="bg-white p-6 rounded-xl shadow-sm border border-border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
          <p className="text-2xl font-bold mt-2">{stat.value}</p>
          {stat.change && (
            <div className={`flex items-center mt-2 ${isPositive ? "text-green-600" : "text-red-600"}`}>
              {isPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
              <span className="text-sm font-medium">{stat.change}</span>
              <span className="text-xs text-muted-foreground ml-1">vs last month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${stat.bgColor}`}>
          <div className={stat.color}>{stat.icon}</div>
        </div>
      </div>
    </motion.div>
  )
}

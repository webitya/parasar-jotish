"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { AccountBalance, CalendarToday, Chat, TrendingUp, Settings, Notifications } from "@mui/icons-material"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import WalletCard from "@/components/dashboard/wallet-card"
import BookingCard from "@/components/dashboard/booking-card"
import ChatHistory from "@/components/dashboard/chat-history"

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()
  const [stats, setStats] = useState({
    walletBalance: 0,
    totalBookings: 0,
    activeSessions: 0,
    totalSpent: 0,
  })
  const [recentBookings, setRecentBookings] = useState([])
  const [chatHistory, setChatHistory] = useState([])

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
      return
    }

    if (user) {
      fetchDashboardData()
    }
  }, [user, loading, router])

  const fetchDashboardData = async () => {
    try {
      // Fetch wallet data
      const walletResponse = await fetch(`/api/wallet?userId=${user.id}`)
      if (walletResponse.ok) {
        const walletData = await walletResponse.json()
        setStats((prev) => ({
          ...prev,
          walletBalance: walletData.balance,
          totalSpent: walletData.transactions.filter((t) => t.type === "debit").reduce((sum, t) => sum + t.amount, 0),
        }))
      }

      // Fetch bookings
      const bookingsResponse = await fetch(`/api/bookings?userId=${user.id}`)
      if (bookingsResponse.ok) {
        const bookingsData = await bookingsResponse.json()
        setRecentBookings(bookingsData.slice(0, 5))
        setStats((prev) => ({
          ...prev,
          totalBookings: bookingsData.length,
          activeSessions: bookingsData.filter((b) => b.status === "confirmed").length,
        }))
      }

      // Fetch chat history
      const chatResponse = await fetch(`/api/chats?userId=${user.id}`)
      if (chatResponse.ok) {
        const chatData = await chatResponse.json()
        setChatHistory(chatData.slice(0, 5))
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const statCards = [
    {
      title: "Wallet Balance",
      value: `₹${stats.walletBalance}`,
      icon: <AccountBalance className="h-6 w-6" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Total Bookings",
      value: stats.totalBookings,
      icon: <CalendarToday className="h-6 w-6" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "Active Sessions",
      value: stats.activeSessions,
      icon: <Chat className="h-6 w-6" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Total Spent",
      value: `₹${stats.totalSpent}`,
      icon: <TrendingUp className="h-6 w-6" />,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
            <p className="text-muted-foreground mt-2">Here s what s happening with your spiritual journey</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <button className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors">
              <Notifications className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-border"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <div className={stat.color}>{stat.icon}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Wallet Section */}
          <div className="lg:col-span-1">
            <WalletCard balance={stats.walletBalance} onRecharge={fetchDashboardData} />
          </div>

          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Recent Bookings</h2>
                <button className="text-primary hover:text-primary-dark text-sm font-medium">View all</button>
              </div>
              <div className="space-y-4">
                {recentBookings.length > 0 ? (
                  recentBookings.map((booking) => <BookingCard key={booking.id} booking={booking} />)
                ) : (
                  <div className="text-center py-8">
                    <CalendarToday className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No bookings yet</p>
                    <button className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors">
                      Book a Session
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Chat History */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-border">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Conversations</h2>
            <button className="text-primary hover:text-primary-dark text-sm font-medium">View all</button>
          </div>
          <ChatHistory chats={chatHistory} />
        </div>
      </div>
    </DashboardLayout>
  )
}

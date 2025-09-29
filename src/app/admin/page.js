"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  Dashboard,
  People,
  Star,
  AttachMoney,
  TrendingUp,
  Schedule,
  Settings,
  ExitToApp,
  PersonAdd,
  Payment,
  Chat,
  Analytics,
  Security,
  AdminPanelSettings,
} from "@mui/icons-material"
import AdminLayout from "@/components/admin/admin-layout"

// Simple StatsCard component
function StatsCard({ title, value, icon, color, change, changeType }) {
  const colorClasses = {
    blue: "bg-blue-50 text-blue-600",
    purple: "bg-purple-50 text-purple-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    indigo: "bg-indigo-50 text-indigo-600",
    red: "bg-red-50 text-red-600",
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          {icon}
        </div>
      </div>
      {change && (
        <div className="mt-4 flex items-center">
          <span
            className={`text-sm font-medium ${
              changeType === "increase" ? "text-green-600" : "text-red-600"
            }`}
          >
            {change}
          </span>
          <span className="text-sm text-gray-500 ml-1">from last month</span>
        </div>
      )}
    </div>
  )
}

// Simple RecentActivity component
function RecentActivity({ activities, isLoading }) {
  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const getActivityIcon = (type) => {
    switch (type) {
      case "user_signup":
        return <PersonAdd className="h-5 w-5 text-blue-600" />
      case "astrologer_application":
        return <Star className="h-5 w-5 text-purple-600" />
      case "booking_created":
        return <Schedule className="h-5 w-5 text-green-600" />
      case "payment_received":
        return <Payment className="h-5 w-5 text-orange-600" />
      default:
        return <Dashboard className="h-5 w-5 text-gray-600" />
    }
  }

  const formatTime = (timestamp) => {
    const now = new Date()
    const diff = now - new Date(timestamp)
    const minutes = Math.floor(diff / (1000 * 60))
    
    if (minutes < 1) return "Just now"
    if (minutes < 60) return `${minutes}m ago`
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    return `${days}d ago`
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <TrendingUp className="h-5 w-5 mr-2 text-gray-600" />
        Recent Activity
      </h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex-shrink-0 p-2 bg-gray-100 rounded-full">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.title}</p>
              <p className="text-sm text-gray-500 mt-1">{activity.description}</p>
              <p className="text-xs text-gray-400 mt-1">{formatTime(activity.timestamp)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AdminDashboard() {
  const [adminUser, setAdminUser] = useState(null)
  const [stats, setStats] = useState({
    totalUsers: 1234,
    totalAstrologers: 89,
    totalBookings: 456,
    totalRevenue: 125000,
    activeChats: 23,
    pendingApprovals: 12,
  })
  const [recentActivity, setRecentActivity] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check admin authentication
    const adminData = localStorage.getItem("admin_user")
    const adminToken = localStorage.getItem("admin_token")

    if (!adminData || !adminToken) {
      router.push("/admin/login")
      return
    }

    setAdminUser(JSON.parse(adminData))
    loadDashboardData()
  }, [router])

  const loadDashboardData = async () => {
    try {
      // Simulate loading dashboard data
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock recent activity data
      const mockActivity = [
        {
          id: 1,
          type: "user_signup",
          title: "New User Registration",
          description: "Rahul Kumar joined the platform",
          timestamp: new Date(Date.now() - 1000 * 60 * 5), // 5 minutes ago
        },
        {
          id: 2,
          type: "astrologer_application",
          title: "Astrologer Application",
          description: "Priya Sharma applied to become an astrologer",
          timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
        },
        {
          id: 3,
          type: "booking_created",
          title: "New Booking",
          description: "Session booked for Vedic Astrology",
          timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        },
        {
          id: 4,
          type: "payment_received",
          title: "Payment Received",
          description: "₹500 payment for consultation",
          timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
        },
        {
          id: 5,
          type: "user_signup",
          title: "New User Registration",
          description: "Anjali Patel joined the platform",
          timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
        },
      ]

      setRecentActivity(mockActivity)
      setIsLoading(false)
    } catch (error) {
      console.error("Error loading dashboard data:", error)
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("admin_user")
    localStorage.removeItem("admin_token")
    router.push("/admin/login")
  }

  if (!adminUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Dashboard className="h-8 w-8 mr-3 text-orange-500" />
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-1">Welcome back, {adminUser.name}! Here s what s happening today.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-orange-50 px-3 py-2 rounded-lg">
              <AdminPanelSettings className="h-5 w-5 text-orange-500 mr-2" />
              <span className="text-sm font-medium text-orange-700">Super Admin</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center bg-red-50 hover:bg-red-100 px-3 py-2 rounded-lg text-red-600 transition-colors"
            >
              <ExitToApp className="h-4 w-4 mr-2" />
              Logout
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          <StatsCard
            title="Total Users"
            value={stats.totalUsers.toLocaleString()}
            icon={<People className="h-6 w-6" />}
            color="blue"
            change="+12%"
            changeType="increase"
          />
          <StatsCard
            title="Astrologers"
            value={stats.totalAstrologers.toLocaleString()}
            icon={<Star className="h-6 w-6" />}
            color="purple"
            change="+5%"
            changeType="increase"
          />
          <StatsCard
            title="Total Bookings"
            value={stats.totalBookings.toLocaleString()}
            icon={<Schedule className="h-6 w-6" />}
            color="green"
            change="+18%"
            changeType="increase"
          />
          <StatsCard
            title="Revenue"
            value={`₹${(stats.totalRevenue / 1000).toFixed(0)}K`}
            icon={<AttachMoney className="h-6 w-6" />}
            color="orange"
            change="+25%"
            changeType="increase"
          />
          <StatsCard
            title="Active Chats"
            value={stats.activeChats.toLocaleString()}
            icon={<Chat className="h-6 w-6" />}
            color="indigo"
            change="+8%"
            changeType="increase"
          />
          <StatsCard
            title="Pending Approvals"
            value={stats.pendingApprovals.toLocaleString()}
            icon={<PersonAdd className="h-6 w-6" />}
            color="red"
            change="-3%"
            changeType="decrease"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <RecentActivity activities={recentActivity} isLoading={isLoading} />
          </div>

          {/* Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-gray-600" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors group">
                  <div className="flex items-center">
                    <PersonAdd className="h-5 w-5 text-orange-600 mr-3" />
                    <span className="text-sm font-medium text-orange-700">Approve Astrologers</span>
                  </div>
                  <span className="bg-orange-200 text-orange-800 text-xs px-2 py-1 rounded-full">
                    {stats.pendingApprovals}
                  </span>
                </button>
                <button className="w-full flex items-center p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
                  <Analytics className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-sm font-medium text-blue-700">View Analytics</span>
                </button>
                <button className="w-full flex items-center p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <Payment className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-sm font-medium text-green-700">Payment Reports</span>
                </button>
                <button className="w-full flex items-center p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
                  <Security className="h-5 w-5 text-purple-600 mr-3" />
                  <span className="text-sm font-medium text-purple-700">Security Settings</span>
                </button>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-gray-600" />
                System Status
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Server Status</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-green-600">Online</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Database</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-green-600">Connected</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Payment Gateway</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-green-600">Active</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Email Service</span>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium text-yellow-600">Limited</span>
                    <h1>testing....</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

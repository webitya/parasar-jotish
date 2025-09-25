"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import {
  Dashboard,
  People,
  Star,
  CalendarToday,
  Chat,
  AccountBalance,
  Settings,
  ExitToApp,
  Menu,
  Close,
  Assessment,
  Security,
} from "@mui/icons-material"
import { useAuth } from "@/hooks/use-auth"

const sidebarItems = [
  { name: "Dashboard", href: "/admin", icon: Dashboard },
  { name: "Users", href: "/admin/users", icon: People },
  { name: "Astrologers", href: "/admin/astrologers", icon: Star },
  { name: "Bookings", href: "/admin/bookings", icon: CalendarToday },
  { name: "Chats", href: "/admin/chats", icon: Chat },
  { name: "Transactions", href: "/admin/transactions", icon: AccountBalance },
  { name: "Analytics", href: "/admin/analytics", icon: Assessment },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

const superAdminItems = [
  { name: "Content Management", href: "/admin/content", icon: Security },
  { name: "System Settings", href: "/admin/system", icon: Settings },
]

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { user, logout } = useAuth()
  const router = useRouter()
  const pathname = usePathname()

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const allSidebarItems = user?.role === "superadmin" ? [...sidebarItems, ...superAdminItems] : sidebarItems

  return (
    <div className="min-h-screen bg-muted">
      {/* Mobile sidebar backdrop */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          x: sidebarOpen ? 0 : "-100%",
        }}
        className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0"
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="TalkAstro Logo" width={32} height={32} />
              <span className="ml-2 text-xl font-bold text-gradient">TalkAstro</span>
            </Link>
            <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <Close className="h-6 w-6" />
            </button>
          </div>

          {/* Admin Info */}
          <div className="p-6 border-b border-border">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold">
                {user?.name?.charAt(0).toUpperCase()}
              </div>
              <div className="ml-3">
                <p className="font-medium">{user?.name}</p>
                <p className="text-sm text-muted-foreground capitalize">
                  {user?.role === "superadmin" ? "Super Admin" : "Admin"}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {allSidebarItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-primary text-white"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Icon className="h-5 w-5 mr-3" />
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-border">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-3 text-muted-foreground hover:bg-accent hover:text-foreground rounded-lg transition-colors"
            >
              <ExitToApp className="h-5 w-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Mobile header */}
        <header className="lg:hidden bg-white shadow-sm border-b border-border p-4">
          <div className="flex items-center justify-between">
            <button onClick={() => setSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="TalkAstro Logo" width={24} height={24} />
              <span className="ml-2 text-lg font-bold text-gradient">TalkAstro</span>
            </Link>
            <div className="w-6"></div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}

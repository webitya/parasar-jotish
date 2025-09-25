"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Dashboard,
  Visibility,
  Add,
  Edit,
  Delete,
  Logout,
  Menu,
  Close,
  AdminPanelSettings,
  Person,
  NotificationsNone,
  SearchOutlined,
  Home,
} from "@mui/icons-material"

export default function AdminLayout({ children }) {
  const router = useRouter()
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem("auth")
    if (auth !== "c2FtQGdtYWlsLmNvbTpzYW1AMTIz") {
      router.push("/Signin")
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("auth")
    router.push("/Signin")
  }

  const navigationItems = [
    { href: "/adminpanel/viewpanel", label: "View", icon: Visibility },
    { href: "/adminpanel/addpanel", label: "Add", icon: Add },
    { href: "/adminpanel/updatepanel", label: "Update", icon: Edit },
    { href: "/adminpanel/deletepanel", label: "Delete", icon: Delete },
  ]

  const isActiveRoute = (href) => pathname === href
  const currentPage = navigationItems.find((item) => isActiveRoute(item.href))

  return (
    <div className="h-screen flex bg-gray-50 overflow-hidden">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/30 z-40" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sticky Left Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="h-full flex flex-col bg-white border-r border-gray-200 shadow-sm">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <AdminPanelSettings className="text-white text-lg" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Admin</h2>
                <p className="text-xs text-gray-500">Dashboard</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1.5 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Close className="text-gray-400 text-lg" />
            </button>
          </div>

          {/* Admin Profile */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <Person className="text-gray-600 text-lg" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 truncate">Administrator</p>
                <p className="text-xs text-gray-500 truncate">sam@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-3 space-y-1">
            {navigationItems.map(({ href, label, icon: Icon }) => {
              const isActive = isActiveRoute(href)
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    group flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border-r-2 border-blue-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }
                  `}
                >
                  <Icon
                    className={`text-lg ${isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600"}`}
                  />
                  <span className="font-medium text-sm">{label}</span>
                  {isActive && <div className="w-1.5 h-1.5 bg-blue-600 rounded-full ml-auto" />}
                </Link>
              )
            })}

            {/* Back to Home and Logout Buttons */}
            <div className="pt-4 border-t border-gray-100 mt-4 space-y-1">
              <Link
                href="/"
                onClick={() => setSidebarOpen(false)}
                className="w-full group flex items-center space-x-3 px-3 py-2.5 text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200"
              >
                <Home className="text-lg" />
                <span className="font-medium text-sm">Back to Home</span>
              </Link>
              <button
                onClick={handleLogout}
                className="w-full group flex items-center space-x-3 px-3 py-2.5 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
              >
                <Logout className="text-lg" />
                <span className="font-medium text-sm">Logout</span>
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Sticky Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-4 lg:px-6 py-4">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Menu className="text-gray-600 text-xl" />
              </button>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  {currentPage ? (
                    <currentPage.icon className="text-blue-600 text-lg" />
                  ) : (
                    <Dashboard className="text-blue-600 text-lg" />
                  )}
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">{currentPage?.label || "Dashboard"}</h1>
                  <p className="text-sm text-gray-500">Management Panel</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-3">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <SearchOutlined className="text-gray-600 text-xl" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
                <NotificationsNone className="text-gray-600 text-xl" />
                <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></div>
              </button>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <Person className="text-gray-600 text-lg" />
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="p-4 lg:p-6">
            <div className="max-w-7xl mx-auto">
              {/* Content Container */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm min-h-[calc(100vh-200px)]">
                <div className="p-6">{children}</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

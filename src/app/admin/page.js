"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  AdminPanelSettings,
  Security,
  Shield,
  Warning,
  Dashboard,
  Star,
} from "@mui/icons-material"
import { useAuth } from "@/hooks/use-auth"
import { toast, toastTypes } from "@/components/ui/toaster"

export default function AdminLoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loginAttempts, setLoginAttempts] = useState(0)
  const [isLocked, setIsLocked] = useState(false)
  const [lockTimeRemaining, setLockTimeRemaining] = useState(0)
  const [securityLevel, setSecurityLevel] = useState("medium")
  const router = useRouter()
  const { login } = useAuth()

  // Security lockout timer
  useEffect(() => {
    if (isLocked && lockTimeRemaining > 0) {
      const timer = setTimeout(() => {
        setLockTimeRemaining(lockTimeRemaining - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (lockTimeRemaining === 0) {
      setIsLocked(false)
      setLoginAttempts(0)
    }
  }, [isLocked, lockTimeRemaining])

  // Password strength checker
  useEffect(() => {
    if (password.length === 0) {
      setSecurityLevel("none")
    } else if (password.length < 6) {
      setSecurityLevel("weak")
    } else if (password.length < 10) {
      setSecurityLevel("medium")
    } else {
      setSecurityLevel("strong")
    }
  }, [password])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isLocked) {
      toast(`Account locked. Try again in ${lockTimeRemaining} seconds.`, toastTypes.ERROR)
      return
    }

    setIsLoading(true)

    try {
      // Check if it's admin credentials
      if (email !== "aditya@gmail.com" || password !== "12345678") {
        throw new Error("Invalid admin credentials")
      }

      // Simulate admin login
      const adminUser = {
        id: "admin_001",
        email: "aditya@gmail.com",
        name: "Aditya",
        role: "super_admin",
        permissions: ["all"],
      }

      // Store admin session
      localStorage.setItem("admin_user", JSON.stringify(adminUser))
      localStorage.setItem("admin_token", "admin_token_" + Date.now())

      toast("Admin login successful! Redirecting to dashboard...", toastTypes.SUCCESS)
      router.push("/admin")
    } catch (error) {
      const newAttempts = loginAttempts + 1
      setLoginAttempts(newAttempts)

      if (newAttempts >= 3) {
        setIsLocked(true)
        setLockTimeRemaining(300) // 5 minutes lockout
        toast("Too many failed attempts. Account locked for 5 minutes.", toastTypes.ERROR)
      } else {
        toast(`Invalid credentials. ${3 - newAttempts} attempts remaining.`, toastTypes.ERROR)
      }
    } finally {
      setIsLoading(false)
    }
  }

  const getSecurityColor = () => {
    switch (securityLevel) {
      case "weak":
        return "text-red-400"
      case "medium":
        return "text-yellow-400"
      case "strong":
        return "text-green-400"
      default:
        return "text-gray-500"
    }
  }

  const getSecurityWidth = () => {
    switch (securityLevel) {
      case "weak":
        return "w-1/4"
      case "medium":
        return "w-1/2"
      case "strong":
        return "w-full"
      default:
        return "w-0"
    }
  }

  const getSecurityBg = () => {
    switch (securityLevel) {
      case "weak":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "strong":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8">
          {/* Security Badge */}
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center bg-red-500 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
              <Shield className="h-3 w-3 mr-1" />
              SECURE ADMIN PANEL ACCESS
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-8 mt-4">
            {/* Logo */}
            <div className="flex items-center justify-center mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1">
                  <AdminPanelSettings className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  TalkAstro
                </div>
                <div className="text-xs text-red-400 font-semibold">ADMIN PANEL</div>
              </div>
            </div>

            <h1 className="text-2xl font-bold text-white mb-2">Super Admin Access</h1>
            <p className="text-gray-300 text-sm mb-4">Secure authentication required</p>

            {/* Security Status */}
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Security className="h-4 w-4 text-blue-400" />
              <span className="text-xs text-blue-400">Multi-layer Security Enabled</span>
            </div>
          </div>

          {/* Login Attempts Warning */}
          {loginAttempts > 0 && !isLocked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-center"
            >
              <Warning className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-yellow-400 text-xs">
                {loginAttempts} failed attempt{loginAttempts > 1 ? "s" : ""}. {3 - loginAttempts} remaining.
              </span>
            </motion.div>
          )}

          {/* Lockout Warning */}
          {isLocked && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-center"
            >
              <Lock className="h-6 w-6 text-red-400 mx-auto mb-2" />
              <div className="text-red-400 font-semibold text-sm">Account Temporarily Locked</div>
              <div className="text-red-300 text-xs mt-1">
                Unlock in: {Math.floor(lockTimeRemaining / 60)}:{(lockTimeRemaining % 60).toString().padStart(2, "0")}
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
                Admin Email
              </label>
              <div className="relative">
                <Email className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 text-sm transition-all duration-200"
                  placeholder="aditya@gmail.com"
                  required
                  disabled={isLocked}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-200">
                Admin Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-white/5 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 text-sm transition-all duration-200"
                  placeholder="Enter admin password"
                  required
                  disabled={isLocked}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  disabled={isLocked}
                >
                  {showPassword ? <VisibilityOff className="h-4 w-4" /> : <Visibility className="h-4 w-4" />}
                </button>
              </div>

              {/* Password Strength Indicator */}
              {password && (
                <div className="mt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">Security Level</span>
                    <span className={`font-medium ${getSecurityColor()}`}>
                      {securityLevel.charAt(0).toUpperCase() + securityLevel.slice(1)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-1">
                    <div
                      className={`h-1 rounded-full transition-all duration-300 ${getSecurityWidth()} ${getSecurityBg()}`}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Admin Options */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-600 bg-white/5 text-orange-500 focus:ring-orange-500 focus:ring-offset-0"
                  disabled={isLocked}
                />
                <span className="ml-2 text-gray-300">Keep me signed in</span>
              </label>
              <Link href="/admin/forgot-password" className="text-orange-400 hover:text-orange-300 transition-colors">
                Reset Password
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading || isLocked}
              className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Authenticating...
                </div>
              ) : isLocked ? (
                "Account Locked"
              ) : (
                <div className="flex items-center justify-center">
                  <Dashboard className="h-4 w-4 mr-2" />
                  Access Admin Panel
                </div>
              )}
            </button>
          </form>

          {/* Back to Main Site */}
          <p className="mt-8 text-center text-sm text-gray-400">
            <Link href="/" className="text-orange-400 hover:text-orange-300 font-medium transition-colors">
              ← Back to TalkAstro
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}

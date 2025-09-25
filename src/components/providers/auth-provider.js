"use client"

import { createContext, useState, useEffect } from "react"
import { toast, toastTypes } from "@/components/ui/toaster"

export const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("talkastro_user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse stored user:", error)
        localStorage.removeItem("talkastro_user")
      }
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // In a real app, this would be an API call
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Login failed")
      }

      const userData = await response.json()
      setUser(userData.user)
      localStorage.setItem("talkastro_user", JSON.stringify(userData.user))
      toast("Login successful! Welcome back.", toastTypes.SUCCESS)
      return userData.user
    } catch (error) {
      console.error("Login error:", error)
      toast(error.message || "Login failed. Please check your credentials.", toastTypes.ERROR)
      throw error
    }
  }

  const signup = async (userData) => {
    try {
      // In a real app, this would be an API call
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Signup failed")
      }

      const data = await response.json()
      setUser(data.user)
      localStorage.setItem("talkastro_user", JSON.stringify(data.user))
      toast("Account created successfully! Welcome to TalkAstro.", toastTypes.SUCCESS)
      return data.user
    } catch (error) {
      console.error("Signup error:", error)
      toast(error.message || "Signup failed. Please try again.", toastTypes.ERROR)
      throw error
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("talkastro_user")
    toast("You have been logged out successfully.", toastTypes.INFO)
  }

  return <AuthContext.Provider value={{ user, login, signup, logout, loading }}>{children}</AuthContext.Provider>
}

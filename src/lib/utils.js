import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount, currency = "INR") {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Intl.DateTimeFormat("en-IN", { ...defaultOptions, ...options }).format(new Date(date))
}

export function formatTime(date, options = {}) {
  const defaultOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }
  return new Intl.DateTimeFormat("en-IN", { ...defaultOptions, ...options }).format(new Date(date))
}

export function generateId() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone) {
  const phoneRegex = /^[+]?[1-9][\d]{9,14}$/
  return phoneRegex.test(phone.replace(/\s/g, ""))
}

export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}

export function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("")
    .substring(0, 2)
}

export function calculateAge(birthDate) {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }

  return age
}

export function getTimeSlots(startHour = 9, endHour = 18, intervalMinutes = 60) {
  const slots = []
  for (let hour = startHour; hour < endHour; hour++) {
    const startTime = `${hour.toString().padStart(2, "0")}:00`
    const endTime = `${(hour + 1).toString().padStart(2, "0")}:00`
    slots.push(`${startTime}-${endTime}`)
  }
  return slots
}

export function isValidTimeSlot(timeSlot) {
  const timeSlotRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]-([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/
  return timeSlotRegex.test(timeSlot)
}

export function getRandomColor() {
  const colors = [
    "from-purple-500 to-indigo-600",
    "from-orange-500 to-red-600",
    "from-green-500 to-teal-600",
    "from-blue-500 to-cyan-600",
    "from-yellow-500 to-amber-600",
    "from-pink-500 to-rose-600",
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}

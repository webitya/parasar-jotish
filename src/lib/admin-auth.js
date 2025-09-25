// Admin authentication utilities
export const ADMIN_CREDENTIALS = {
  SUPER_ADMIN: {
    email: process.env.SUPER_ADMIN_EMAIL || "aditya@gmail.com",
    password: process.env.SUPER_ADMIN_PASSWORD || "12345678",
    name: process.env.SUPER_ADMIN_NAME || "Aditya",
    role: "super_admin",
    permissions: ["all"],
  },
  ADMIN: {
    email: process.env.ADMIN_EMAIL || "admin@talkastro.com",
    password: process.env.ADMIN_PASSWORD || "admin123",
    name: process.env.ADMIN_NAME || "Admin",
    role: "admin",
    permissions: ["users", "bookings", "reports"],
  },
}

export function validateAdminCredentials(email, password) {
  const { SUPER_ADMIN, ADMIN } = ADMIN_CREDENTIALS

  if (email === SUPER_ADMIN.email && password === SUPER_ADMIN.password) {
    return { ...SUPER_ADMIN, id: "super_admin_001" }
  }

  if (email === ADMIN.email && password === ADMIN.password) {
    return { ...ADMIN, id: "admin_001" }
  }

  return null
}

export function isValidAdminSession(adminData, token) {
  if (!adminData || !token) return false

  try {
    const admin = JSON.parse(adminData)
    return admin.role === "super_admin" || admin.role === "admin"
  } catch {
    return false
  }
}

export function hasPermission(adminUser, permission) {
  if (!adminUser) return false

  if (adminUser.role === "super_admin") return true

  return adminUser.permissions && adminUser.permissions.includes(permission)
}

import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { findUserByEmail, createUser } from "./db-utils"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function hashPassword(password) {
  return await bcrypt.hash(password, 12)
}

export async function verifyPassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword)
}

export function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" })
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch (error) {
    return null
  }
}

export async function authenticateUser(email, password) {
  const user = await findUserByEmail(email)
  if (!user) {
    throw new Error("User not found")
  }

  const isValid = await verifyPassword(password, user.password)
  if (!isValid) {
    throw new Error("Invalid password")
  }

  // Remove password from user object
  const { password: _, ...userWithoutPassword } = user
  return userWithoutPassword
}

export async function registerUser(userData) {
  const existingUser = await findUserByEmail(userData.email)
  if (existingUser) {
    throw new Error("User already exists")
  }

  const hashedPassword = await hashPassword(userData.password)
  const newUser = {
    ...userData,
    password: hashedPassword,
    role: userData.role || "user",
    approved: userData.role === "astrologer" ? false : true,
  }

  const result = await createUser(newUser)

  // Remove password from response
  const { password: _, ...userWithoutPassword } = newUser
  return { ...userWithoutPassword, _id: result.insertedId }
}

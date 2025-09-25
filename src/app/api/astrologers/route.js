import { NextResponse } from "next/server"
import { getAllAstrologers } from "@/lib/db-utils"

// Mock astrologers data
const mockAstrologers = [
  {
    id: "1",
    name: "Acharya Sharma",
    email: "sharma@example.com",
    specialties: ["Vedic Astrology", "Palmistry"],
    experience: 15,
    bio: "With over 15 years of experience in Vedic astrology, I provide accurate readings and guidance for your life path.",
    rating: 4.9,
    reviewCount: 128,
    hourlyRate: 1200,
    availability: {
      monday: ["10:00-13:00", "15:00-18:00"],
      tuesday: ["10:00-13:00", "15:00-18:00"],
      wednesday: ["10:00-13:00", "15:00-18:00"],
      thursday: ["10:00-13:00", "15:00-18:00"],
      friday: ["10:00-13:00", "15:00-18:00"],
      saturday: ["10:00-13:00"],
      sunday: [],
    },
    image: "/astrologers/astrologer-1.jpg",
    languages: ["English", "Hindi", "Sanskrit"],
  },
  {
    id: "2",
    name: "Divya Jyotishi",
    email: "divya@example.com",
    specialties: ["Tarot Reading", "Numerology"],
    experience: 8,
    bio: "Tarot card expert with a gift for seeing beyond the veil. I help clients find clarity in confusing situations.",
    rating: 4.7,
    reviewCount: 93,
    hourlyRate: 900,
    availability: {
      monday: ["09:00-14:00"],
      tuesday: ["09:00-14:00"],
      wednesday: ["09:00-14:00"],
      thursday: ["09:00-14:00"],
      friday: ["09:00-14:00"],
      saturday: ["10:00-15:00"],
      sunday: ["10:00-15:00"],
    },
    image: "/astrologers/astrologer-2.jpg",
    languages: ["English", "Hindi", "Gujarati"],
  },
  {
    id: "3",
    name: "Pandit Rajesh",
    email: "rajesh@example.com",
    specialties: ["Vastu Shastra", "Gemology"],
    experience: 20,
    bio: "Master of Vastu Shastra and gemology with decades of experience helping people harmonize their living spaces.",
    rating: 4.8,
    reviewCount: 215,
    hourlyRate: 1500,
    availability: {
      monday: ["11:00-17:00"],
      tuesday: ["11:00-17:00"],
      wednesday: ["11:00-17:00"],
      thursday: ["11:00-17:00"],
      friday: ["11:00-17:00"],
      saturday: ["11:00-15:00"],
      sunday: [],
    },
    image: "/astrologers/astrologer-3.jpg",
    languages: ["English", "Hindi", "Tamil"],
  },
  {
    id: "4",
    name: "Maya Devi",
    email: "maya@example.com",
    specialties: ["Sound Healing", "Meditation"],
    experience: 12,
    bio: "Certified sound healer and meditation guide. I help clients find inner peace and balance through ancient techniques.",
    rating: 4.9,
    reviewCount: 87,
    hourlyRate: 1100,
    availability: {
      monday: ["08:00-12:00", "16:00-20:00"],
      tuesday: ["08:00-12:00", "16:00-20:00"],
      wednesday: ["08:00-12:00", "16:00-20:00"],
      thursday: ["08:00-12:00", "16:00-20:00"],
      friday: ["08:00-12:00", "16:00-20:00"],
      saturday: ["09:00-13:00"],
      sunday: ["09:00-13:00"],
    },
    image: "/astrologers/astrologer-4.jpg",
    languages: ["English", "Hindi", "Bengali"],
  },
  {
    id: "5",
    name: "Guru Patel",
    email: "guru@example.com",
    specialties: ["Rudraksha Consultation", "Puja Rituals"],
    experience: 25,
    bio: "Expert in Rudraksha and sacred rituals. I guide clients in selecting the right Rudraksha and performing effective pujas.",
    rating: 4.8,
    reviewCount: 176,
    hourlyRate: 1300,
    availability: {
      monday: ["10:00-16:00"],
      tuesday: ["10:00-16:00"],
      wednesday: ["10:00-16:00"],
      thursday: ["10:00-16:00"],
      friday: ["10:00-16:00"],
      saturday: ["10:00-14:00"],
      sunday: ["10:00-14:00"],
    },
    image: "/astrologers/astrologer-5.jpg",
    languages: ["English", "Hindi", "Gujarati"],
  },
]

export async function GET(request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url)
    const specialty = searchParams.get("specialty")
    const minRating = searchParams.get("minRating")

    let astrologers = mockAstrologers

    const filters = {}
    if (specialty) filters.specialty = specialty
    if (minRating) filters.minRating = minRating

    if (Object.keys(filters).length > 0) {
      astrologers = astrologers.filter((astrologer) => {
        let isValid = true
        if (filters.specialty) {
          isValid =
            isValid && astrologer.specialties.some((s) => s.toLowerCase().includes(filters.specialty.toLowerCase()))
        }
        if (filters.minRating) {
          isValid = isValid && astrologer.rating >= Number.parseFloat(filters.minRating)
        }
        return isValid
      })
    } else {
      astrologers = await getAllAstrologers(filters)
    }

    // Transform data for frontend
    const transformedAstrologers = astrologers.map((astrologer) => ({
      id: astrologer.id.toString(),
      name: astrologer.name,
      email: astrologer.email,
      specialties: astrologer.specialties || [],
      experience: astrologer.experience || 0,
      bio: astrologer.bio || "",
      rating: astrologer.rating || 0,
      reviewCount: astrologer.reviewCount || 0,
      hourlyRate: astrologer.hourlyRate || 1000,
      availability: astrologer.availability || {},
      image: astrologer.image || "/placeholder.svg",
      languages: astrologer.languages || ["English", "Hindi"],
    }))

    return NextResponse.json(transformedAstrologers)
  } catch (error) {
    console.error("Error fetching astrologers:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

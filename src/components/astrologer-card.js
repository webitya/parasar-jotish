"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import {
  Star,
  Schedule,
  Language,
  Chat,
  Verified,
  Favorite,
  FavoriteBorder,
  CheckCircle,
  AccessTime,
  Call,
} from "@mui/icons-material"

export default function AstrologerCard({ astrologer }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-border h-full flex flex-col transition-all duration-300"
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={toggleFavorite}
          className="bg-white p-1.5 rounded-full shadow-md hover:scale-110 transition-transform"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          {isFavorite ? (
            <Favorite className="h-5 w-5 text-red-500" />
          ) : (
            <FavoriteBorder className="h-5 w-5 text-gray-500" />
          )}
        </button>
      </div>

      {/* Header */}
      <div className="p-6 pb-4 relative">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <Image
              src={astrologer.image || "/placeholder.svg?height=80&width=80&query=indian astrologer portrait"}
              alt={astrologer.name}
              width={80}
              height={80}
              className="rounded-full object-cover border-2 border-orange-100"
            />
            {astrologer.isOnline && (
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 bg-green-500 rounded-full border-2 border-white" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center">
              <h3 className="text-xl font-semibold mb-1">{astrologer.name}</h3>
              {astrologer.isVerified && <Verified className="h-4 w-4 text-blue-500 ml-1" />}
            </div>
            <div className="flex items-center mb-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(astrologer.rating)
                        ? "text-yellow-500"
                        : i < astrologer.rating
                          ? "text-yellow-500 opacity-50"
                          : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="font-medium ml-1">{astrologer.rating}</span>
              <span className="text-muted-foreground text-sm ml-1">({astrologer.reviewCount})</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center">
              <AccessTime className="h-3.5 w-3.5 mr-1" />
              {astrologer.experience} years experience
            </p>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="px-6 pb-4">
        <div className="flex flex-wrap gap-2">
          {astrologer.specialties.slice(0, 3).map((specialty) => (
            <span key={specialty} className="px-2 py-1 bg-orange-50 text-xs font-medium rounded-full text-orange-800">
              {specialty}
            </span>
          ))}
          {astrologer.specialties.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-xs font-medium rounded-full text-gray-700">
              +{astrologer.specialties.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Bio */}
      <div className="px-6 pb-4 flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3">{astrologer.bio}</p>
      </div>

      {/* Languages */}
      <div className="px-6 pb-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Language className="h-4 w-4 mr-2" />
          <span>{astrologer.languages.join(", ")}</span>
        </div>
      </div>

      {/* Availability */}
      <div className="px-6 pb-4">
        <div className="flex items-center text-sm">
          <Schedule className="h-4 w-4 mr-2 text-green-600" />
          <span className="text-green-600 font-medium">
            {astrologer.isOnline ? "Available now" : "Next available in 2 hours"}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pt-4 border-t border-border mt-auto">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-lg font-bold text-orange-600">₹{astrologer.hourlyRate}/hour</p>
          </div>
          <div className="flex items-center gap-1">
            {astrologer.achievements?.map((achievement, index) => (
              <span key={index} className="bg-amber-50 p-1 rounded-full" title={achievement.title}>
                <CheckCircle className="h-4 w-4 text-amber-600" />
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Link
            href={`/astrologers/${astrologer.id}`}
            className="py-2 px-3 border border-input rounded-lg text-center hover:bg-accent transition-colors text-sm font-medium"
          >
            Profile
          </Link>
          <Link
            href={`/call/${astrologer.id}`}
            className="py-2 px-3 bg-orange-50 text-orange-700 border border-orange-200 rounded-lg text-center hover:bg-orange-100 transition-colors text-sm font-medium flex items-center justify-center"
          >
            <Call className="h-4 w-4 mr-1" />
            Call
          </Link>
          <Link
            href={`/chat/${astrologer.id}`}
            className="py-2 px-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg text-center hover:opacity-90 transition-colors text-sm font-medium flex items-center justify-center"
          >
            <Chat className="h-4 w-4 mr-1" />
            Chat
          </Link>
        </div>
      </div>

      {/* Quick View Overlay - Shows on hover */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white"
        >
          <h3 className="text-xl font-bold mb-2">{astrologer.name}</h3>
          <p className="text-sm mb-4 line-clamp-2">{astrologer.bio}</p>
          <Link
            href={`/astrologers/${astrologer.id}`}
            className="py-2 px-4 bg-white text-gray-900 rounded-lg text-center font-medium hover:bg-gray-100 transition-colors"
          >
            View Full Profile
          </Link>
        </motion.div>
      )}
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowForward } from "@mui/icons-material"

export default function ServiceCard({ service }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col"
    >
      <div className={`h-2 bg-gradient-to-r ${service.color} rounded-t-xl`}></div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="mb-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-lg opacity-20"></div>
          <Image
            src={service.icon || "/placeholder.svg?height=48&width=48&query=spiritual icon"}
            alt={service.title}
            width={48}
            height={48}
            className="rounded-lg relative z-10"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
        <p className="text-gray-600 mb-6 flex-1">{service.description}</p>
        <Link
          href={`/services/${service.id}`}
          className="inline-flex items-center text-orange-500 hover:text-red-500 transition-colors font-medium mt-auto"
        >
          Learn more
          <ArrowForward className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

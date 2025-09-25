"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import VastuService from "@/components/Services/VastuService"

export default function VastuPage() {
  return (
    <>
      <Navbar />
      <VastuService />
      <Footer />
    </>
  )
}

"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import PujaService from "@/components/Services/PujaService"

export default function PujaPage() {
  return (
    <>
      <Navbar />
      <PujaService />
      <Footer />
    </>
  )
}

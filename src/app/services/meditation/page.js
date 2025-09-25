"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import MeditationService from "@/components/Services/MeditationService"

export default function MeditationPage() {
  return (
    <>
      <Navbar />
      <MeditationService />
      <Footer />
    </>
  )
}

"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TarotService from "@/components/Services/TarotService"

export default function TarotPage() {
  return (
    <>
      <Navbar />
      <TarotService />
      <Footer />
    </>
  )
}

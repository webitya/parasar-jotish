"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import VedicTrustService from "@/components/Services/VedicTrustService"

export default function VedicTrustPage() {
  return (
    <>
      <Navbar />
      <VedicTrustService />
      <Footer />
    </>
  )
}

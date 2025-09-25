"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import YagyaService from "@/components/Services/YagyaService"

export default function YagyaPage() {
  return (
    <>
      <Navbar />
      <YagyaService />
      <Footer />
    </>
  )
}

"use client"

import ContactUsHero from "./ContactUsHero"
import ContactUsForm from "./ContactUsForm"
import ContactUsInfo from "./ContactUsInfo"
import ContactUsFAQ from "./ContactUsFAQ"

export default function ContactUs() {
  return (
    <main className="pt-20">
      <ContactUsHero />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactUsForm />
        <ContactUsInfo />
      </div>
      <ContactUsFAQ />
    </main>
  )
}

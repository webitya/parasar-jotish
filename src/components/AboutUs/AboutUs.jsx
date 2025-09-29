"use client"

import AboutUsHero from "./AboutUsHero"
import AboutUsStory from "./AboutUsStory"
import AboutUsTeam from "./AboutUsTeam"
import AboutUsValues from "./AboutUsValues"
import AboutUsCTA from "./AboutUsCTA"

export default function AboutUs() {
  return (
    <main className="pt-20">
      <AboutUsHero />
      <AboutUsStory />
      <AboutUsValues />
      {/* <AboutUsTeam /> */}
      <AboutUsCTA />
    </main>
  )
}

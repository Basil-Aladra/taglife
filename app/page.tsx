import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { TrustedBy } from "@/components/landing/trusted-by"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Services } from "@/components/landing/services"
import { CardShowcase } from "@/components/landing/card-showcase"
import { DigitalProfile } from "@/components/landing/digital-profile"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBy />
      <HowItWorks />
      <Services />
      <CardShowcase />
      <DigitalProfile />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}

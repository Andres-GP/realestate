import Hero from "@/components/hero"
import PropertyListings from "@/components/property-listings"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PropertyListings />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

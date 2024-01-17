import Domains from "@/components/Domains"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Registeration from "@/components/Registeration"
import Timeline from "@/components/Timeline"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Timeline />
      <Domains />
      <Registeration />
      <Footer />
    </div> 
  )
}

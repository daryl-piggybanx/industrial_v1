"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PiggyBank, Warehouse, Users, FileText, UserPlus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const [isLaunched, setIsLaunched] = useState(false)
  const [isButtonPressed, setIsButtonPressed] = useState(false)

  const handleLaunchClick = () => {
    setIsButtonPressed(true)
    setTimeout(() => {
      setIsLaunched(true)
      setTimeout(() => {
        setIsLaunched(false)
        setIsButtonPressed(false)
      }, 3000)
    }, 300)
  }

  return (
    <div className="min-h-screen text-off-white font-mono overflow-hidden relative">
      {/* Grid background elements - lowest z-index */}
      <div className="fixed inset-0 bg-grid-pattern z-0" style={{ zIndex: -10 }}></div>
      <div className="fixed inset-0 grid-overlay z-0" style={{ zIndex: -10 }}></div>
      <div className="fixed inset-0 shimmer-overlay z-0" style={{ zIndex: -10 }}></div>
      <div className="fixed inset-0 grid-scan-line z-0" style={{ zIndex: -10 }}></div>
      <div className="fixed inset-0 grid-container z-0" style={{ zIndex: -10 }}>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
        <div className="grid-item"></div>
      </div>

      {/* Header banner */}
      <div className="h-8 bg-charcoal overflow-hidden sticky top-0 z-30">
        <div className="animate-marquee whitespace-nowrap">
          {Array(20)
            .fill(0)
            .map((_, i) => (
              <span key={i} className="inline-block mx-2 font-bold">
                <span className="text-red-accent">/// PIGGYBANX </span>
                <span className="text-charcoal bg-red-accent px-1">NEW ERA COLLECTIVE</span>
                <span className="text-red-accent"> ///</span>
              </span>
            ))}
        </div>
      </div>

      {/* Logo and navigation */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center z-20 relative">
        <div className="flex items-center">
          <PiggyBank className="h-8 w-8 text-red-accent mr-2" />
          <h1 className="text-3xl font-bold tracking-tighter text-off-white">
            PIGGY<span className="text-red-accent">BANX</span>
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6 uppercase text-sm">
            <li>
              <Link href="#" className="text-stone-gray hover:text-red-accent transition-colors">
                About
              </Link>
            </li>
            {/* <li>
              <Link href="#" className="text-stone-gray hover:text-red-accent transition-colors">
                Gallery
              </Link>
            </li> */}
          </ul>
        </nav>
      </header>

      {/* Main CTA grid with center launch button */}
      <main className="container mx-auto px-4 mt-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[calc(100vh-12rem)] relative z-10">
          {/* Drop Site */}
          <motion.div
            className="relative overflow-hidden bg-silver-gray/10 border border-white/20 z-10 rounded-tl-[15%] bg-clip-content"
            onHoverStart={() => setHoveredSection("drop")}
            onHoverEnd={() => setHoveredSection(null)}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="#" className="block h-full p-8 relative z-10">
              <div className="flex items-start">
                <Warehouse className="h-10 w-10 text-red-accent" />
              </div>
              <div className="mt-auto pt-24">
                <h2 className="text-4xl font-stencil tracking-wider uppercase text-charcoal">DROP SITE</h2>
                <p className="text-stone-gray mt-2 max-w-xs">
                  Access exclusive drops and limited releases
                </p>
              </div>
            </Link>

            {/* Animation elements */}
            <motion.div
              className="absolute inset-0 bg-charcoal"
              animate={{
                opacity: 1,
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/shipping-container_grayscale.png')",
                  opacity: hoveredSection === "drop" || isLaunched ? 0.9 : 0.7,
                }}
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-red-accent glow-effect"
              animate={{
                width: hoveredSection === "drop" || isLaunched ? "100%" : "0%",
              }}
              initial={{ width: "0%" }}
              transition={{ duration: isLaunched ? 0.8 : 0.5 }}
            />
          </motion.div>

          {/* Club House */}
          <motion.div
            className="relative overflow-hidden bg-silver-gray/10 border border-white/20 z-10 rounded-tr-[15%] bg-clip-content"
            onHoverStart={() => setHoveredSection("club")}
            onHoverEnd={() => setHoveredSection(null)}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="#" className="block h-full p-8 relative z-10">
              <div className="flex items-start justify-end">
                <Users className="h-10 w-10 text-red-accent" />
              </div>
              <div className="mt-auto pt-24 text-right">
                <h2 className="text-4xl font-stencil tracking-wider uppercase text-off-white">CLUB HOUSE</h2>
                <p className="text-off-white mt-2 ml-auto max-w-xs">
                  Join our exclusive community of collectors
                </p>
              </div>
            </Link>

            {/* Animation elements */}
            <motion.div
              className="absolute inset-0 bg-charcoal"
              animate={{
                opacity: 1,
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/hexagonal_bg.png')",
                  opacity: hoveredSection === "club" || isLaunched ? 0.9 : 0.7,
                }}
              />
            </motion.div>
            <motion.div
              className="absolute top-0 bottom-0 right-0 w-1 bg-red-accent glow-effect"
              animate={{
                height: hoveredSection === "club" || isLaunched ? "100%" : "0%",
              }}
              initial={{ height: "0%" }}
              transition={{ duration: isLaunched ? 0.8 : 0.5 }}
            />
          </motion.div>

          {/* OG Form */}
          <motion.div
            className="relative overflow-hidden bg-silver-gray/10 border border-white/20 z-10 rounded-bl-[15%] bg-clip-content"
            onHoverStart={() => setHoveredSection("og")}
            onHoverEnd={() => setHoveredSection(null)}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="#" className="block h-full p-8 relative z-10">
              <div className="flex items-start">
                <FileText className="h-10 w-10 text-red-accent" />
              </div>
              <div className="mt-auto pt-24">
                <h2 className="text-4xl font-stencil tracking-wider uppercase text-charcoal">OG FORM</h2>
                <p className="text-stone-gray mt-2 max-w-xs">
                  Original members access
                </p>
              </div>
            </Link>

            {/* Animation elements - updated with new caution tape background */}
            <motion.div
              className="absolute inset-0 bg-charcoal"
              animate={{
                opacity: 1,
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/caution-tape_bg.png')",
                  opacity: hoveredSection === "og" || isLaunched ? 0.9 : 0.7,
                }}
              />
            </motion.div>
            <motion.div
              className="absolute top-0 left-0 right-0 h-1 bg-red-accent glow-effect"
              animate={{
                width: hoveredSection === "og" || isLaunched ? "100%" : "0%",
              }}
              initial={{ width: "0%" }}
              transition={{ duration: isLaunched ? 0.8 : 0.5 }}
            />
          </motion.div>

          {/* New Collector Application */}
          <motion.div
            className="relative overflow-hidden bg-silver-gray/10 border border-white/20 z-10 rounded-br-[15%] bg-clip-content"
            onHoverStart={() => setHoveredSection("new")}
            onHoverEnd={() => setHoveredSection(null)}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="#" className="block h-full p-8 relative z-10">
              <div className="flex items-start justify-end">
                <UserPlus className="h-10 w-10 text-red-accent" />
              </div>
              <div className="mt-auto pt-24 text-right">
                <h2 className="text-4xl font-stencil tracking-wider uppercase text-off-white">NEW COLLECTOR</h2>
                <p className="text-off-white mt-2 ml-auto max-w-xs">
                  Apply to become part of our growing new era
                </p>
              </div>
            </Link>

            {/* Animation elements */}
            <motion.div
              className="absolute inset-0 bg-charcoal"
              animate={{
                opacity: 1,
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: "url('/images/piggybanx_bg.jpg')",
                  opacity: hoveredSection === "new" || isLaunched ? 0.9 : 0.5,
                }}
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 top-0 left-0 w-1 bg-red-accent glow-effect"
              animate={{
                height: hoveredSection === "new" || isLaunched ? "100%" : "0%",
              }}
              initial={{ height: "0%" }}
              transition={{ duration: isLaunched ? 0.8 : 0.5 }}
            />
          </motion.div>
        </div>

        {/* Launch Button - highest z-index */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <motion.button
            className="relative w-32 h-32 rounded-full bg-silver-gray border-4 border-red-accent flex items-center justify-center overflow-hidden"
            onClick={handleLaunchClick}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: isButtonPressed ? 4 : 0,
            }}
          >
            {/* Button inner elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-charcoal flex items-center justify-center relative">
                {/* Logo */}
                <div className="relative w-16 h-16">
                  <Image src="/images/g2_bolt_icon_white.png" alt="PiggyBanx Logo" fill className="object-contain" />
                </div>
              </div>
            </div>
          </motion.button>
        </div>
      </main>

      {/* Industrial footer element */}
      <footer className="mt-8 border-t-4 border-red-accent py-4 bg-charcoal relative z-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <p className="text-xs uppercase text-stone-gray">© {new Date().getFullYear()} PiggyBanx Collective</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-xs uppercase text-stone-gray hover:text-red-accent">
                Privacy
              </Link>
              <Link href="#" className="text-xs uppercase text-stone-gray hover:text-red-accent">
                Terms
              </Link>
              <Link href="#" className="text-xs uppercase text-stone-gray hover:text-red-accent">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

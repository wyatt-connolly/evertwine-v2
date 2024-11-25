"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Share2, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { ShareDialog } from "@/components/share-dialog"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isShareOpen, setIsShareOpen] = useState(false)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prevOffset) => (prevOffset + 1) % 100)
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1C1633] to-[#2A1F4D] text-white relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundPosition: `${offset}px ${offset}px`
        }}
      />
      {/* Navigation */}
      <nav className="p-4 flex justify-between items-center relative z-10">
        <div className="font-bold text-2xl">Lemon8</div>
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-white/80"
            onClick={() => setIsShareOpen(true)}
          >
            <Share2 className="h-5 w-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:text-white/80"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <select className="bg-transparent border border-white/20 rounded-md px-2 py-1 text-white">
            <option>English</option>
          </select>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 max-w-2xl leading-tight">
            Fresh
            <br />
            discoveries
            <br />
            every day
          </h1>
          
          <p className="text-xl mb-8 max-w-2xl">
            Explore new content and ideas daily with our curated discoveries.
          </p>
          
          {/* Phone Mockup */}
          <div className="relative w-full max-w-[320px] aspect-[9/19]">
            <div className="absolute inset-0 rounded-[3rem] border-8 border-white/10 overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-white/10 rounded-b-2xl"></div>
              <Image
                src="/placeholder.svg?height=800&width=380"
                alt="App Interface"
                width={380}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link href="#" className="transition-transform hover:scale-105">
            <Image
              src="/placeholder.svg?height=40&width=135"
              alt="Download on the App Store"
              width={135}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
          <Link href="#" className="transition-transform hover:scale-105">
            <Image
              src="/placeholder.svg?height=40&width=135"
              alt="Get it on Google Play"
              width={135}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm mt-12 text-white/60">
          © 2024 Heliophilia Pte. Ltd. All Rights Reserved.
        </footer>
      </main>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <ShareDialog isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </div>
  )
}


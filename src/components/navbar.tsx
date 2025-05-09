"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full py-4 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <svg
              viewBox="0 0 24 24"
              className="h-8 w-8 text-white"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L2 7L12 12L22 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17L12 22L22 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12L12 17L22 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-white">NFT Oasis</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/collection"
            className="text-white/90 hover:text-white transition-colors"
          >
            Collection
          </Link>
          <Link
            href="/marketplace"
            className="text-white/90 hover:text-white transition-colors"
          >
            Marketplace
          </Link>
          <Link
            href="/roadmap"
            className="text-white/90 hover:text-white transition-colors"
          >
            Roadmap
          </Link>
          <Link
            href="/docs"
            className="text-white/90 hover:text-white transition-colors"
          >
            Docs
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-white hover:text-white/90 hover:bg-white/10"
          >
            Log In
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Connect Wallet
          </Button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-blue-900/95 backdrop-blur-md z-50 p-4 border-t border-white/10">
          <nav className="flex flex-col gap-4">
            <Link
              href="/collection"
              className="text-white/90 hover:text-white transition-colors py-2"
            >
              Collection
            </Link>
            <Link
              href="/marketplace"
              className="text-white/90 hover:text-white transition-colors py-2"
            >
              Marketplace
            </Link>
            <Link
              href="/roadmap"
              className="text-white/90 hover:text-white transition-colors py-2"
            >
              Roadmap
            </Link>
            <Link
              href="/docs"
              className="text-white/90 hover:text-white transition-colors py-2"
            >
              Docs
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
              <Button
                variant="ghost"
                className="justify-center text-white hover:text-white/90 hover:bg-white/10"
              >
                Log In
              </Button>
              <Button className="justify-center bg-blue-500 hover:bg-blue-600 text-white">
                Connect Wallet
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

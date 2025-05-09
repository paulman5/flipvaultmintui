import Link from "next/link"
import { Twitter, Instagram, DiscIcon as Discord, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
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
            <p className="text-white/70 mb-6 max-w-md">
              A seamless platform to mint and collect unique digital assets
              across multiple blockchains, featuring secure, real-time minting
              capabilities.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Discord className="w-5 h-5" />
                <span className="sr-only">Discord</span>
              </Link>
              <Link
                href="#"
                className="text-white/70 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">Github</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/collection"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Collection
                </Link>
              </li>
              <li>
                <Link
                  href="/marketplace"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/roadmap"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} NFT Oasis. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-white/50 text-sm">Powered by Ethereum & IPFS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

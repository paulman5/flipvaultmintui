import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
        Exclusive NFT
        <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Minting Experience
        </span>
      </h1>

      <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10">
        A seamless platform to create, mint, and collect unique digital assets
        across multiple blockchains, featuring secure, real-time minting
        capabilities
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8"
        >
          Mint Now
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-white/20 text-white hover:bg-white/10 text-lg px-8"
        >
          Explore Collection
        </Button>
      </div>

      <div className="mt-16 md:mt-24 relative">
        <div className="aspect-[16/9] max-w-4xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent z-10 rounded-xl"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
          <div className="w-full h-full rounded-xl overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-800/40 to-purple-800/40 backdrop-blur-sm flex items-center justify-center">
              <div className="w-[80%] h-[80%] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 md:w-80 md:h-80 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg transform rotate-6"></div>
                    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] bg-cover bg-center rounded-lg transform -rotate-3 border-4 border-white/20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

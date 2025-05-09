import { Shield, Zap, Layers } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Safety, Flexibility, Ease</h2>
        <p className="text-white/80 max-w-2xl mx-auto">
          Our platform provides a seamless minting experience with features designed for both beginners and experienced
          collectors.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Secure Minting</h3>
          <p className="text-white/70">
            All transactions are secured through smart contracts with multi-signature verification and real-time
            monitoring.
          </p>
        </div>

        <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
            <Layers className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Cross-Chain Support</h3>
          <p className="text-white/70">
            Mint and trade your NFTs across multiple blockchains including Ethereum, Polygon, and Solana with seamless
            bridging.
          </p>
        </div>

        <div className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Gas Optimization</h3>
          <p className="text-white/70">
            Our platform automatically optimizes gas fees and transaction timing to ensure you get the best rates when
            minting.
          </p>
        </div>
      </div>

      <div className="mt-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
        <div className="relative z-10 bg-blue-900/30 backdrop-blur-sm rounded-xl p-8 border border-white/10 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/20 to-transparent"></div>

          <div className="max-w-3xl relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Join the NFT Oasis Community</h3>
            <p className="text-white/80 mb-6">
              Owning an NFT Oasis collectible grants you access to exclusive events, airdrops, and our vibrant community
              of creators and collectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">10,000 Unique NFTs</div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">
                Exclusive Community Access
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">Future Airdrops</div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white">Metaverse Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


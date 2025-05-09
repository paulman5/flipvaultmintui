"use client"
import Image from "next/image"
import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import flipvault from "@/public/flipvault.png"
import flipvaultlogo from "@/public/FlipvaultNFT.svg"
import { WalletSelector } from "@/components/WalletSelector"
import { useWallet } from "@aptos-labs/wallet-adapter-react"

export default function Home() {
  const maxSupply = 10000
  const minted = 0

  const { account } = useWallet()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | string>(null)

  async function handleMint() {
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch("/api/mint-nft", {
        method: "POST",
      })

      const data = await res.json()
      if (data.success) {
        setStatus("✅ NFT Minted")
      } else {
        setStatus(`❌ Mint failed`)
      }
    } catch (err) {
      console.error("Mint error:", err)
      setStatus(`❌ Mint failed: ${err.message || "Unknown error"}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-radial from-blue-950 via-blue-900 to-black overflow-hidden relative flex flex-col items-center justify-center">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-500/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute top-[30%] left-[-10%] w-[30%] h-[30%] rounded-full bg-blue-400/10 blur-[80px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl px-4 py-8 flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 flex items-center">
          <Image
            src={flipvault}
            alt="FlipVault"
            className="h-10/12 w-10/12 text-white mr-2"
          />
        </div>

        {/* Main content */}
        <div className="w-full max-w-4xl">
          {/* Headline */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Mint Your
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                FlipVault NFT
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Secure, cross-chain NFT collection with exclusive community
              benefits
            </p>
          </div>

          {/* NFT Display and Mint Card */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* NFT Preview */}
            <div className="relative w-full max-w-md mx-auto aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative z-10 w-full h-full p-4">
                <div className="w-full h-full relative bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                  <Image
                    src={flipvaultlogo}
                    alt="NFT preview"
                    width={10000}
                    height={10000}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent flex items-end p-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">
                        FlipVault Collection
                      </h3>
                      <p className="text-blue-300 text-sm">
                        Limited edition of {maxSupply} unique NFTs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mint Card */}
            <Card className="bg-blue-900/40 backdrop-blur-md border-white/10">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Minted</span>
                    <span className="text-white font-medium">
                      {minted} / {maxSupply}
                    </span>
                  </div>

                  <div className="w-full bg-white/10 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{ width: `${(minted / maxSupply) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex flex-col items-center py-4">
                    {account ? (
                      <>
                        <Button
                          disabled={loading}
                          onClick={handleMint}
                          className="text-white font-medium text-base cursor-pointer bg-blue-500 hover:bg-blue-600"
                        >
                          {loading ? "Minting..." : "Mint NFT"}
                        </Button>
                        {status && (
                          <p className="mt-4 text-sm text-white/80 text-center">
                            {status}
                          </p>
                        )}
                      </>
                    ) : (
                      <span className="text-white font-medium text-xl">
                        Connect Wallet to Mint
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <WalletSelector />
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

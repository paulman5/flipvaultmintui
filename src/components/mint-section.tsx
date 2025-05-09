"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function MintSection() {
  const [quantity, setQuantity] = useState(1)
  const price = 0.08
  const maxSupply = 10000
  const minted = 3768

  return (
    <section
      className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto"
      id="mint"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Mint Your <span className="text-blue-400">NFT Oasis</span>{" "}
            Collection
          </h2>

          <p className="text-white/80 mb-8">
            Each NFT is uniquely generated from over 200 hand-drawn traits,
            stored on IPFS, and grants you access to exclusive community
            benefits and future airdrops.
          </p>

          <Card className="bg-blue-900/40 backdrop-blur-md border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Mint Details</CardTitle>
              <CardDescription className="text-white/70">
                {minted} / {maxSupply} minted
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white/80">Quantity</span>
                    <span className="text-white font-medium">{quantity}</span>
                  </div>
                  <Slider
                    value={[quantity]}
                    min={1}
                    max={5}
                    step={1}
                    onValueChange={(value) => setQuantity(value[0])}
                    className="my-4"
                  />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-white/80">Price per NFT</span>
                  <span className="text-white font-medium">{price} ETH</span>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <span className="text-white font-medium">Total</span>
                  <span className="text-white font-bold">
                    {(price * quantity).toFixed(2)} ETH
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                Mint Now
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-6 text-white/60 text-sm">
            <p>* Gas fees not included. Connect your wallet to mint.</p>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative z-10 w-full h-full p-4">
              <div className="w-full h-full relative bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="grid grid-cols-2 grid-rows-2 h-full">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="relative overflow-hidden border border-white/5"
                      >
                        <Image
                          src={`/placeholder.svg?height=300&width=300`}
                          alt={`NFT preview ${i}`}
                          width={300}
                          height={300}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/50 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">
                      NFT Oasis Collection
                    </h3>
                    <p className="text-blue-300 text-sm">
                      Limited edition of {maxSupply} unique NFTs
                    </p>
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

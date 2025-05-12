import { AptosClient } from "aptos"

const client = new AptosClient("https://fullnode.mainnet.aptoslabs.com")
const LAUNCHPAD_ADDRESS =
  "0xb987f44f1cc3173c96f13c5735e7dd1707d1a476016e0c554ad396d209683417"
const COLLECTION_OBJECT_ADDRESS =
  "0xb212388936b130efde42230ed85f3b0f1a2f5aa8bd7375ec0e40f03c6c1e4f5c"

export async function fetchMinted(): Promise<number> {
  try {
    const result = await client.view({
      function: `${LAUNCHPAD_ADDRESS}::launchpad::collection::count`,
      type_arguments: [],
      arguments: [COLLECTION_OBJECT_ADDRESS],
    })

    console.log("Minted count result:", result)
    return Number(result[0])
  } catch (error) {
    console.error("Error fetching minted count:", error)
    return 0
  }
}

import { AptosClient, AptosAccount } from "aptos"
import dotenv from "dotenv"
import fs from "fs"

dotenv.config()

// Constants
const NODE_URL = "https://fullnode.mainnet.aptoslabs.com"
const client = new AptosClient(NODE_URL)

// Replace this with your private key (from .env or directly as hex)
const PRIVATE_KEY =
  "0xe2f2f1fdccb1fd1beb84373cf2f044d65f5c5637831c831894c1929021e93c0c"
const account = AptosAccount.fromAptosAccountObject({
  privateKeyHex: PRIVATE_KEY,
})

const LAUNCHPAD_ADDRESS =
  "0xb987f44f1cc3173c96f13c5735e7dd1707d1a476016e0c554ad396d209683417"
const COLLECTION_OBJ_ADDR =
  "0x729a8dc468da7039377f17ff2c110b6be2a3357ffce0272433137ec6495c4a9a"

// Load allowlist from file
const raw = fs.readFileSync("adminbatch.json", "utf-8")
const json = JSON.parse(raw)
const allowlist: string[] = json.allowlist
const mintAddress = allowlist[0] // Get the first (and only) address from allowlist

async function main() {
  const payload = {
    type: "entry_function_payload",
    function: `${LAUNCHPAD_ADDRESS}::launchpad::mint_nft`,
    type_arguments: [],
    arguments: [
      COLLECTION_OBJ_ADDR, // collection object address
      6000, // amount to mint (all NFTs)
    ],
  }

  const txnRequest = await client.generateTransaction(
    account.address(),
    payload
  )
  const signedTxn = await client.signTransaction(account, txnRequest)
  const res = await client.submitTransaction(signedTxn)
  await client.waitForTransaction(res.hash)

  console.log("✅ Batch mint successful!")
  console.log("Txn hash:", res.hash)
  console.log(`Minted 7000 NFTs to address: ${mintAddress}`)
}

export function batchMint() {
  return {
    type: "entry_function_payload",
    function: `${LAUNCHPAD_ADDRESS}::launchpad::mint_nft`,
    type_arguments: [],
    arguments: [
      COLLECTION_OBJ_ADDR, // collection object address
      6000, // amount to mint
    ],
  }
}

main().catch(console.error)

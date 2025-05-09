import { AptosClient, AptosAccount } from "aptos"
import dotenv from "dotenv"
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

const collectionURI =
  "https://bafybeibqqgymuxsi5qnemyxpijg6ym35hzcf4prkz2gnguwxytvq4uaqhe.ipfs.w3s.link/collection.json"
const allowlist: string[] = [] // optional, array of addresses
const startTime = Math.floor(Date.now() / 1000) // now
const endTime = startTime + 60 * 60 * 24 * 7 // 7 days laterc

async function main() {
  const payload = {
    type: "entry_function_payload",
    function: `${LAUNCHPAD_ADDRESS}::launchpad::create_collection`,
    type_arguments: [],
    arguments: [
      "Flipvault NFT OG Collection launch", // description
      "Flipvault NFT Genesis Collection", // name
      collectionURI, // uri
      10000, // max_supply
      null, // royalty_percentage
      null, // pre_mint_amount
      allowlist, // allowlist (even if empty)
      startTime, // allowlist_start_time
      endTime, // allowlist_end_time
      1, // allowlist_mint_limit_per_addr
      0, // allowlist_mint_fee_per_nft
      null, // public_mint_start_time
      null, // public_mint_end_time
      null, // public_mint_limit_per_addr
      null, // public_mint_fee_per_nft
    ],
  }

  const txnRequest = await client.generateTransaction(
    account.address(),
    payload
  )
  const signedTxn = await client.signTransaction(account, txnRequest)
  const res = await client.submitTransaction(signedTxn)
  await client.waitForTransaction(res.hash)

  console.log("✅ Collection created!")
  console.log("Txn hash:", res.hash)
}

main().catch(console.error)

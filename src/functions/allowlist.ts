import { AptosClient, AptosAccount } from "aptos"
import dotenv from "dotenv"
import fs from "fs"

dotenv.config()

const NODE_URL = "https://fullnode.mainnet.aptoslabs.com"
const client = new AptosClient(NODE_URL)

const PRIVATE_KEY =
  "0xe2f2f1fdccb1fd1beb84373cf2f044d65f5c5637831c831894c1929021e93c0c"
if (!PRIVATE_KEY) {
  throw new Error("APTOS_PRIVATE_KEY environment variable is not set")
}

const account = AptosAccount.fromAptosAccountObject({
  privateKeyHex: PRIVATE_KEY,
})

// Your launchpad + collection object
const LAUNCHPAD_ADDRESS =
  "0xb987f44f1cc3173c96f13c5735e7dd1707d1a476016e0c554ad396d209683417"
const COLLECTION_OBJ_ADDR =
  "0x47dae243b7bb8342f2a005d7705277f28f1dede555ae5e2de3735b880b31ce47"

// Load allowlist from file
const raw = fs.readFileSync("./json/adminbatch.json", "utf-8")
const json = JSON.parse(raw)
const allowlist: string[] = json.allowlist[0]
const mintLimitPerAddr: number = json.mint_limit_per_address

async function main() {
  const payload = {
    type: "entry_function_payload",
    function: `${LAUNCHPAD_ADDRESS}::launchpad::batch_upsert_allowlist`,
    type_arguments: [],
    arguments: [COLLECTION_OBJ_ADDR, allowlist, mintLimitPerAddr],
  }

  const txnRequest = await client.generateTransaction(
    account.address(),
    payload
  )
  const signedTxn = await client.signTransaction(account, txnRequest)
  const res = await client.submitTransaction(signedTxn)
  await client.waitForTransaction(res.hash)

  console.log("✅ Allowlist uploaded!")
  console.log("Txn hash:", res.hash)
}

main().catch(console.error)

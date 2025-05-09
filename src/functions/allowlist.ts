import { AptosClient, AptosAccount } from "aptos"
import dotenv from "dotenv"
import fs from "fs"

dotenv.config()

const NODE_URL = "https://fullnode.mainnet.aptoslabs.com"
const client = new AptosClient(NODE_URL)

const PRIVATE_KEY =
  "0xe2f2f1fdccb1fd1beb84373cf2f044d65f5c5637831c831894c1929021e93c0c"
const account = AptosAccount.fromAptosAccountObject({
  privateKeyHex: PRIVATE_KEY,
})

// Your launchpad + collection object
const LAUNCHPAD_ADDRESS =
  "0xb987f44f1cc3173c96f13c5735e7dd1707d1a476016e0c554ad396d209683417"
const COLLECTION_OBJ_ADDR =
  "0xb212388936b130efde42230ed85f3b0f1a2f5aa8bd7375ec0e40f03c6c1e4f5c"

// Load allowlist from file
const raw = fs.readFileSync("./allowaddress.json", "utf-8")
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

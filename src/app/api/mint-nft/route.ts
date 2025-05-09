// /src/app/api/mint-nft/route.ts
import { NextResponse } from "next/server"
import { AptosClient, AptosAccount } from "aptos"
import dotenv from "dotenv"

dotenv.config()

const NODE_URL = "https://fullnode.mainnet.aptoslabs.com"
const client = new AptosClient(NODE_URL)

const PRIVATE_KEY = process.env.APTOS_PRIVATE_KEY!
const account = AptosAccount.fromAptosAccountObject({
  privateKeyHex: PRIVATE_KEY,
})

const LAUNCHPAD_ADDRESS =
  "0xb987f44f1cc3173c96f13c5735e7dd1707d1a476016e0c554ad396d209683417"
const COLLECTION_OBJECT_ADDRESS =
  "0xb212388936b130efde42230ed85f3b0f1a2f5aa8bd7375ec0e40f03c6c1e4f5c"

export async function POST() {
  try {
    const payload = {
      type: "entry_function_payload",
      function: `${LAUNCHPAD_ADDRESS}::launchpad::mint_nft`,
      type_arguments: [],
      arguments: [COLLECTION_OBJECT_ADDRESS, 1],
    }

    const txnRequest = await client.generateTransaction(
      account.address(),
      payload
    )
    const signedTxn = await client.signTransaction(account, txnRequest)
    const response = await client.submitTransaction(signedTxn)
    await client.waitForTransaction(response.hash)

    return NextResponse.json(
      { success: true, hash: response.hash },
      { status: 200 }
    )
  } catch (error: unknown) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    )
  }
}

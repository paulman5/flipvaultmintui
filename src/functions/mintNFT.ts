import type { NextApiRequest, NextApiResponse } from "next"
import { AptosClient, AptosAccount } from "aptos"
import dotenv from "dotenv"

dotenv.config()

const NODE_URL = "https://fullnode.mainnet.aptoslabs.com"
const client = new AptosClient(NODE_URL)

const PRIVATE_KEY =
  "0xe2f2f1fdccb1fd1beb84373cf2f044d65f5c5637831c831894c1929021e93c0c"
const account = AptosAccount.fromAptosAccountObject({
  privateKeyHex: PRIVATE_KEY,
})

const LAUNCHPAD_ADDRESS =
  "0xb987f44f1cc3173c96f13c5735e7dd1707d1a476016e0c554ad396d209683417"

const COLLECTION_OBJECT_ADDRESS =
  "0xb212388936b130efde42230ed85f3b0f1a2f5aa8bd7375ec0e40f03c6c1e4f5c"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method Not Allowed" })
  }

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

    res.status(200).json({ success: true, hash: response.hash })
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message })
  }
}

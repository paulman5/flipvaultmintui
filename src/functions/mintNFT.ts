// import { NextResponse } from "next/server"

// const LAUNCHPAD_ADDRESS =
//   "0xb987f44f1cc3173c96f13c5735e7dd1707d1a476016e0c554ad396d209683417"

// const COLLECTION_OBJECT_ADDRESS =
//   "0xb212388936b130efde42230ed85f3b0f1a2f5aa8bd7375ec0e40f03c6c1e4f5c"

// export async function POST() {
//   try {
//     const transaction = {
//       type: "entry_function_payload", // ✅ REQUIRED for wallet adapter
//       function: `${LAUNCHPAD_ADDRESS}::launchpad::mint_nft`,
//       type_arguments: [],
//       arguments: [COLLECTION_OBJECT_ADDRESS, 1],
//     }

//     return NextResponse.json({ success: true, transaction })
//   } catch (error: unknown) {
//     return NextResponse.json(
//       {
//         success: false,
//         error: error instanceof Error ? error.message : "Unknown error",
//       },
//       { status: 500 }
//     )
//   }
// }

import { InputTransactionData } from "@aptos-labs/wallet-adapter-react"

const COLLECTION_OBJECT_ADDRESS =
  "0x47dae243b7bb8342f2a005d7705277f28f1dede555ae5e2de3735b880b31ce47"

const LAUNCHPAD_ADDRESS =
  "0xb987f44f1cc3173c96f13c5735e7dd1707d1a476016e0c554ad396d209683417"

export const mintNft = (): InputTransactionData => {
  return {
    data: {
      function: `${LAUNCHPAD_ADDRESS}::launchpad::mint_nft`,
      functionArguments: [COLLECTION_OBJECT_ADDRESS, 100],
      typeArguments: [],
    },
  }
}

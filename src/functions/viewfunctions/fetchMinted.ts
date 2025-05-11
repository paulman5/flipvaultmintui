// src/utils/fetchMinted.ts
export async function fetchMinted(
  creatorAddress: string,
  collectionName: string
): Promise<number> {
  // Fetch the collections resource
  const res = await fetch(
    `https://fullnode.mainnet.aptoslabs.com/v1/accounts/${creatorAddress}/resource/0x3::token::Collections`
  )
  const data = await res.json()
  const collections = data.data.collections.handle

  // Fetch the collection data by name
  const collectionRes = await fetch(
    `https://fullnode.mainnet.aptoslabs.com/v1/tables/${collections}/item`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        key_type: "0x1::string::String",
        value_type: "0x3::token::Collection",
        key: collectionName,
      }),
    }
  )
  const collectionData = await collectionRes.json()
  return Number(collectionData.supply)
}

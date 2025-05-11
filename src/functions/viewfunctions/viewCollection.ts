import { AptosClient } from "aptos"

const client = new AptosClient("https://fullnode.mainnet.aptoslabs.com")
const LAUNCHPAD_ADDRESS =
  "0xb987f44f1cc3173c96f13c5735e7dd1707d1a476016e0c554ad396d209683417"

async function checkRegistry() {
  const result = await client.view({
    function: `${LAUNCHPAD_ADDRESS}::launchpad::get_registry`,
    type_arguments: [],
    arguments: [],
  })

  console.log("Registry result:", result)
}

checkRegistry().catch(console.error)

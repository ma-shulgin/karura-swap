import {options} from '@acala-network/api'
import {ApiPromise} from '@polkadot/api'
import {WsProvider} from '@polkadot/rpc-provider'

const provider = new WsProvider('wss://karura-rpc-3.aca-api.network/ws')
const api = new ApiPromise(options({provider}))
api.isReady.catch(() => {})

export async function acala(): Promise<ApiPromise> {
    await api.isReady
    return api
}

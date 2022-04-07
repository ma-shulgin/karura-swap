import {CurrencyId, CurrencyId_Token} from "../types/v2041"
import * as types from "../types/events"
import {DexLiquidityPoolStorage} from "../types/storage"
import {Store, SubstrateEvent, EventHandlerContext, SubstrateBlock} from "@subsquid/substrate-processor"
import {} from "@subsquid/substrate-processor"
import assert from "assert"
import {Block} from "@polkadot/types/interfaces"
import {LiquidityChange, LiquidityChangeReason} from "../model/generated"
import * as v1000 from '../types/v1000'
import * as v1008 from '../types/v1008'
import * as v1009 from '../types/v1009'
import * as v1019 from '../types/v1019'
import * as v2001 from '../types/v2001'
import * as v2010 from '../types/v2010'
import * as v2011 from '../types/v2011'
import * as v2022 from '../types/v2022'
import * as v2041 from '../types/v2041'


export type EntityConstructor<T> = {
    new (...args: any[]): T;
  };


export async function get<T extends { id: string }>(
    store: Store,
    EntityConstructor: EntityConstructor<T>,
    id: string
  ): Promise<T | undefined> {
    let entity = await store.get<T>(EntityConstructor, {
      where: { id },
    });
    return entity;
  }


async function getLiquidityPool(ctx : EventHandlerContext, key:[CurrencyId,CurrencyId]): Promise<[bigint, bigint]>{
    const storage = new DexLiquidityPoolStorage(ctx)
    if (storage.isV1008) {
        const balances = storage.getAsV1008(key as [v1008.CurrencyId,v1008.CurrencyId])
        return balances
    }
    if (storage.isV1009) {
        const balances = storage.getAsV1009(key as [v1009.CurrencyId,v1009.CurrencyId])
        return balances
    }
    if (storage.isV1019) {
        const balances = storage.getAsV1019(key as [v1019.CurrencyId,v1019.CurrencyId])
        return balances
    }
    if (storage.isV2001) {
        const balances = storage.getAsV2001(key as [v2001.CurrencyId,v2001.CurrencyId])
        return balances
    }
    if (storage.isV2010) {
        const balances = storage.getAsV2010(key as [v2001.CurrencyId,v2001.CurrencyId])
        return balances
    }
    if (storage.isV2011) {
        const balances = storage.getAsV2011(key as [v2011.CurrencyId,v2011.CurrencyId])
        return balances
    }
    if (storage.isV2022) {
        const balances = storage.getAsV2022(key as [v2022.CurrencyId,v2022.CurrencyId])
        return balances
    }
        const balances = storage.getAsV2041(key as [v2041.CurrencyId,v2041.CurrencyId])
        return balances
} 



export async function addLiquidityChange(
    ctx : EventHandlerContext,
    reason: LiquidityChangeReason,
    currency0: CurrencyId_Token,
    currency1: CurrencyId_Token,
    amount0: bigint,
    amount1: bigint,
    swapStep?: number
): Promise<void> {
    const {store, event, block} = ctx
    let pair = currency0.value.__kind + '-' + currency1.value.__kind
    let initial = await get(store, LiquidityChange, 'initial--' + pair)
    if (initial == null) {

        let [b0, b1]: [bigint, bigint] = await getLiquidityPool(ctx,[currency0,currency1])
        //let parentBlock = await (ctx._chain as any).client.call("chain_getBlock",[block.parentHash]) as any
        initial = new LiquidityChange()
        initial.id = 'initial--' + pair
        initial.timestamp = BigInt(block.timestamp - 1)
        initial.blockNumber = block.height - 1
        initial.eventIdx = -1
        initial.step = 0
        initial.reason = LiquidityChangeReason.INIT
        initial.currencyZero = currency0.value.__kind
        initial.currencyOne = currency1.value.__kind
        initial.amountZero = 0n
        initial.amountOne = 0n
        initial.balanceZero = b0
        initial.balanceOne = b1
        await store.save(initial)
    }
    let balance = await getPrevBalance(store, currency0, currency1)
    let change = new LiquidityChange()
    change.id = swapStep ? event.id + '-' + swapStep : event.id
    change.timestamp = BigInt(block.timestamp)
    change.blockNumber = block.height
    change.eventIdx = event.indexInBlock
    change.step = swapStep || 0
    change.reason = reason
    change.currencyZero = currency0.value.__kind
    change.currencyOne = currency1.value.__kind
    change.amountZero = amount0
    change.amountOne = amount1
    change.balanceZero = balance[0] + amount0
    change.balanceOne = balance[1] + amount1
    await store.save(change)
}


async function getPrevBalance(store: Store, currency0: CurrencyId_Token, currency1: CurrencyId_Token): Promise<[bigint, bigint]> {
    let rows = await store.find(LiquidityChange, {
        select: ['balanceZero', 'balanceOne'],
        where: {
            currencyZero: currency0.value.__kind,
            currencyOne: currency1.value.__kind
        },
        order: {
            blockNumber: 'DESC',
            eventIdx: 'DESC',
            step: 'DESC'
        },
        take: 1
    })
    assert(rows.length == 1)
    return [rows[0].balanceZero, rows[0].balanceOne]
}


// function getBlockTimestamp(block: Block): number {
//     // let ex = block.extrinsics.find(({method: {method, section}}) => section === 'timestamp' && method === 'set')
//     // return ex ? (ex.args[0].toJSON() as number) : 0
//     // @ts-ignore
//     return block.timestamp ? block.timestamp : 0
// }
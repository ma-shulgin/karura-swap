import {CurrencyId} from "@acala-network/types/interfaces"
import {Balance, Block} from "@polkadot/types/interfaces"
import {Store, SubstrateEvent} from "@subsquid/substrate-processor"
import {SubstrateBlock} from "@subsquid/substrate-processor"
import assert from "assert"
import {LiquidityChange, LiquidityChangeReason} from "../model/generated"
import {acala} from "./api"


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

export async function addLiquidityChange(
    store: Store,
    block: SubstrateBlock,
    event: SubstrateEvent,
    reason: LiquidityChangeReason,
    currency0: CurrencyId,
    currency1: CurrencyId,
    amount0: bigint,
    amount1: bigint,
    swapStep?: number
): Promise<void> {
    let pair = currency0.asToken.toString() + '-' + currency1.asToken.toString()
    let initial = await get(store, LiquidityChange, 'initial--' + pair)
    if (initial == null) {
        let api = await acala()
        let [b0, b1]: [Balance, Balance] = await api.query.dex.liquidityPool.at(block.parentHash, [currency0, currency1]) as any
        let parentBlock = await api.rpc.chain.getBlock(block.parentHash)
        initial = new LiquidityChange()
        initial.id = 'initial--' + pair
        initial.timestamp = BigInt(getBlockTimestamp(parentBlock.block))
        initial.blockNumber = block.height - 1
        initial.eventIdx = -1
        initial.step = 0
        initial.reason = LiquidityChangeReason.INIT
        initial.currencyZero = currency0.asToken.toString()
        initial.currencyOne = currency1.asToken.toString()
        initial.amountZero = 0n
        initial.amountOne = 0n
        initial.balanceZero = BigInt(b0.toNumber())
        initial.balanceOne = BigInt(b1.toNumber())
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
    change.currencyZero = currency0.asToken.toString()
    change.currencyOne = currency1.asToken.toString()
    change.amountZero = amount0
    change.amountOne = amount1
    change.balanceZero = balance[0] + amount0
    change.balanceOne = balance[1] + amount1
    await store.save(change)
}


async function getPrevBalance(store: Store, currency0: CurrencyId, currency1: CurrencyId): Promise<[bigint, bigint]> {
    let rows = await store.find(LiquidityChange, {
        select: ['balanceZero', 'balanceOne'],
        where: {
            currencyZero: currency0.asToken.toString(),
            currencyOne: currency1.asToken.toString()
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


function getBlockTimestamp(block: Block): number {
    let ex = block.extrinsics.find(({method: {method, section}}) => section === 'timestamp' && method === 'set')
    return ex ? (ex.args[0].toJSON() as number) : 0
}
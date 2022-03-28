import {EventHandlerContext} from "@subsquid/substrate-processor"
import {DexRemoveLiquidityEvent} from "../types/events"
import {LiquidityChangeReason} from "../model/generated"
import {addLiquidityChange} from "./utility" 


interface RemoveLiquidityParams {
    who: Uint8Array,
    currency0 : any,
    pool0: bigint,
    currency1: any,
    pool1: bigint,
    shareDecrement: bigint
  }

async function getRemoveLiquidityParams(ctx: EventHandlerContext): Promise<RemoveLiquidityParams> {
    const event = new DexRemoveLiquidityEvent(ctx)
    if (event.isV1008) {
        const [who,currency0,pool0,currency1,pool1,shareDecrement] = event.asV1008
        return {who,currency0,pool0,currency1,pool1,shareDecrement}
    }
    if (event.isV1009) {
        const [who,currency0,pool0,currency1,pool1,shareDecrement] = event.asV1009
        return {who,currency0,pool0,currency1,pool1,shareDecrement}
    }
    if (event.isV1019) {
        const [who,currency0,pool0,currency1,pool1,shareDecrement] = event.asV1019
        return {who,currency0,pool0,currency1,pool1,shareDecrement}
    }
    if (event.isV2001) {
        const [who,currency0,pool0,currency1,pool1,shareDecrement] = event.asV2001
        return {who,currency0,pool0,currency1,pool1,shareDecrement}
    }
    if (event.isV2010) {
        const [who,currency0,pool0,currency1,pool1,shareDecrement] = event.asV2010
        return {who,currency0,pool0,currency1,pool1,shareDecrement}
    }
    if (event.isV2011) {
        const [who,currency0,pool0,currency1,pool1,shareDecrement] = event.asV2011
        return {who,currency0,pool0,currency1,pool1,shareDecrement}
    }
    if (event.isV2012) {
        const {who,currency0,pool0,currency1,pool1,shareDecrement} = event.asV2012
        return {who,currency0,pool0,currency1,pool1,shareDecrement}
    }
    if (event.isV2022) {
        const {who,currency0,pool0,currency1,pool1,shareDecrement} = event.asV2022
        return {who,currency0,pool0,currency1,pool1,shareDecrement}
    }
    
        const {who,currency0,pool0,currency1,pool1,shareDecrement} = event.asV2041
        return {who,currency0,pool0,currency1,pool1,shareDecrement}
    
    
}
    

export async function handleRemoveLiquidity( ctx : EventHandlerContext): Promise<void> {
    const {store, event, block} = ctx
    let {who, currency0, pool0, currency1, pool1, shareDecrement} = await getRemoveLiquidityParams(ctx)
    if (!currency0.isToken || !currency1.isToken) return
    await addLiquidityChange(
        store,
        block,
        event,
        LiquidityChangeReason.REMOVE,
        currency0,
        currency1,
        - BigInt(pool0),
        - BigInt(pool1)
    )
}
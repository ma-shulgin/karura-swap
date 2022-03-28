import {EventHandlerContext} from "@subsquid/substrate-processor"
import {DexAddLiquidityEvent} from "../types/events"
import {LiquidityChangeReason} from "../model/generated"
import {addLiquidityChange} from "./utility" 


interface AddLiquidityParams {
    who: Uint8Array,
    currency0 : any,
    pool0: bigint,
    currency1: any,
    pool1: bigint,
    shareIncrement: bigint
  }

async function getAddLiquidityParams(ctx: EventHandlerContext): Promise<AddLiquidityParams> {
    const event = new DexAddLiquidityEvent(ctx)

    if (event.isV1008) {
        const [who,currency0,pool0,currency1,pool1,shareIncrement] = event.asV1008
        return {who,currency0,pool0,currency1,pool1,shareIncrement}
    }
    if (event.isV1009) {
        const [who,currency0,pool0,currency1,pool1,shareIncrement] = event.asV1009
        return {who,currency0,pool0,currency1,pool1,shareIncrement}
    }
    if (event.isV1019) {
        const [who,currency0,pool0,currency1,pool1,shareIncrement] = event.asV1019
        return {who,currency0,pool0,currency1,pool1,shareIncrement}
    }
    if (event.isV2001) {
        const [who,currency0,pool0,currency1,pool1,shareIncrement] = event.asV2001
        return {who,currency0,pool0,currency1,pool1,shareIncrement}
    }
    if (event.isV2010) {
        const [who,currency0,pool0,currency1,pool1,shareIncrement] = event.asV2010
        return {who,currency0,pool0,currency1,pool1,shareIncrement}
    }
    if (event.isV2011) {
        const [who,currency0,pool0,currency1,pool1,shareIncrement] = event.asV2011
        return {who,currency0,pool0,currency1,pool1,shareIncrement}
    }
    if (event.isV2012) {
        const {who,currency0,pool0,currency1,pool1,shareIncrement} = event.asV2012
        return {who,currency0,pool0,currency1,pool1,shareIncrement}
    }
    if (event.isV2022) {
        const {who,currency0,pool0,currency1,pool1,shareIncrement} = event.asV2022
        return {who,currency0,pool0,currency1,pool1,shareIncrement}
    }
    
        const {who,currency0,pool0,currency1,pool1,shareIncrement} = event.asV2041
        return {who,currency0,pool0,currency1,pool1,shareIncrement}
    
    
}
    

export async function handleAddLiquidity(ctx : EventHandlerContext): Promise<void> {
    const {store, event, block} = ctx
    let {who, currency0, pool0, currency1, pool1, shareIncrement} = await getAddLiquidityParams(ctx)
    if (!currency0.isToken || !currency1.isToken) return
    await addLiquidityChange(
        store,
        block,
        event,
        LiquidityChangeReason.ADD,
        currency0,
        currency1,
        BigInt(pool0),
        BigInt(pool1)
    )
}
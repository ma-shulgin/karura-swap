import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'
import * as v1000 from './v1000'
import * as v1008 from './v1008'
import * as v1009 from './v1009'
import * as v1019 from './v1019'
import * as v2001 from './v2001'
import * as v2010 from './v2010'
import * as v2011 from './v2011'
import * as v2012 from './v2012'
import * as v2022 from './v2022'
import * as v2041 from './v2041'

export class DexAddLiquidityEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'dex.AddLiquidity')
  }

  /**
   *  Add liquidity success. \[who, currency_id_0, pool_0_increment,
   *  currency_id_1, pool_1_increment, share_increment\]
   */
  get isV1000(): boolean {
    return this.ctx._chain.getEventHash('dex.AddLiquidity') === 'e11dbab4924212ae5321f2190867e93a44683b878bf6b0fa5bd0c478df353671'
  }

  /**
   *  Add liquidity success. \[who, currency_id_0, pool_0_increment,
   *  currency_id_1, pool_1_increment, share_increment\]
   */
  get asV1000(): [Uint8Array, v1000.CurrencyId, bigint, v1000.CurrencyId, bigint, bigint] {
    assert(this.isV1000)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   *  Add liquidity success. \[who, currency_id_0, pool_0_increment,
   *  currency_id_1, pool_1_increment, share_increment\]
   */
  get isV1008(): boolean {
    return this.ctx._chain.getEventHash('dex.AddLiquidity') === 'dac8e7f19530af93245ad8f3f9a3fb307353b5da3c9d192e9c2d54e5f5746b5b'
  }

  /**
   *  Add liquidity success. \[who, currency_id_0, pool_0_increment,
   *  currency_id_1, pool_1_increment, share_increment\]
   */
  get asV1008(): [Uint8Array, v1008.CurrencyId, bigint, v1008.CurrencyId, bigint, bigint] {
    assert(this.isV1008)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   *  Add liquidity success. \[who, currency_id_0, pool_0_increment,
   *  currency_id_1, pool_1_increment, share_increment\]
   */
  get isV1009(): boolean {
    return this.ctx._chain.getEventHash('dex.AddLiquidity') === 'c4e384f72410776ee9490dba40495441132fedb8a20c4a71a4d01655db78cc36'
  }

  /**
   *  Add liquidity success. \[who, currency_id_0, pool_0_increment,
   *  currency_id_1, pool_1_increment, share_increment\]
   */
  get asV1009(): [Uint8Array, v1009.CurrencyId, bigint, v1009.CurrencyId, bigint, bigint] {
    assert(this.isV1009)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Add liquidity success. \[who, currency_id_0, pool_0_increment,
   * currency_id_1, pool_1_increment, share_increment\]
   */
  get isV1019(): boolean {
    return this.ctx._chain.getEventHash('dex.AddLiquidity') === '00f48305f7a101e91f106e66ef4cf3b4e54bb65d8ff2c05876f632d9198c3987'
  }

  /**
   * Add liquidity success. \[who, currency_id_0, pool_0_increment,
   * currency_id_1, pool_1_increment, share_increment\]
   */
  get asV1019(): [v1019.AccountId32, v1019.CurrencyId, bigint, v1019.CurrencyId, bigint, bigint] {
    assert(this.isV1019)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Add liquidity success. \[who, currency_id_0, pool_0_increment,
   * currency_id_1, pool_1_increment, share_increment\]
   */
  get isV2001(): boolean {
    return this.ctx._chain.getEventHash('dex.AddLiquidity') === '354c2ff936c963344c4b899c6137734881516ba92dd776baf5835c892a808cc8'
  }

  /**
   * Add liquidity success. \[who, currency_id_0, pool_0_increment,
   * currency_id_1, pool_1_increment, share_increment\]
   */
  get asV2001(): [v2001.AccountId32, v2001.CurrencyId, bigint, v2001.CurrencyId, bigint, bigint] {
    assert(this.isV2001)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Add liquidity success. \[who, currency_id_0, pool_0_increment,
   * currency_id_1, pool_1_increment, share_increment\]
   */
  get isV2010(): boolean {
    return this.ctx._chain.getEventHash('dex.AddLiquidity') === '0bfb94974d42ca6e11a86e708767ef4922387b3e65caf887431c83e36917e8b6'
  }

  /**
   * Add liquidity success. \[who, currency_id_0, pool_0_increment,
   * currency_id_1, pool_1_increment, share_increment\]
   */
  get asV2010(): [v2010.AccountId32, v2010.CurrencyId, bigint, v2010.CurrencyId, bigint, bigint] {
    assert(this.isV2010)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Add liquidity success. \[who, currency_id_0, pool_0_increment,
   * currency_id_1, pool_1_increment, share_increment\]
   */
  get isV2011(): boolean {
    return this.ctx._chain.getEventHash('dex.AddLiquidity') === '4ae886c2125aa566a67140764e7a8488f8209e0ded561252836bf554963fd564'
  }

  /**
   * Add liquidity success. \[who, currency_id_0, pool_0_increment,
   * currency_id_1, pool_1_increment, share_increment\]
   */
  get asV2011(): [v2011.AccountId32, v2011.CurrencyId, bigint, v2011.CurrencyId, bigint, bigint] {
    assert(this.isV2011)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Add liquidity success.
   */
  get isV2012(): boolean {
    return this.ctx._chain.getEventHash('dex.AddLiquidity') === '5aee014044823f626080c38be422d0720b77289a69bf83a52c1e3c9844d9244f'
  }

  /**
   * Add liquidity success.
   */
  get asV2012(): {who: v2012.AccountId32, currency0: v2012.CurrencyId, pool0: bigint, currency1: v2012.CurrencyId, pool1: bigint, shareIncrement: bigint} {
    assert(this.isV2012)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Add liquidity success.
   */
  get isV2022(): boolean {
    return this.ctx._chain.getEventHash('dex.AddLiquidity') === '99fa235396ab02894f82f32c8e265f56010449d40baea50f8f80ba627908a21e'
  }

  /**
   * Add liquidity success.
   */
  get asV2022(): {who: v2022.AccountId32, currency0: v2022.CurrencyId, pool0: bigint, currency1: v2022.CurrencyId, pool1: bigint, shareIncrement: bigint} {
    assert(this.isV2022)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Add liquidity success.
   */
  get isV2041(): boolean {
    return this.ctx._chain.getEventHash('dex.AddLiquidity') === '62e1e684ce366ed9825c840a91de173fbd369e5dc66bb88cf04506b1cfc0490b'
  }

  /**
   * Add liquidity success.
   */
  get asV2041(): {who: v2041.AccountId32, currency0: v2041.CurrencyId, pool0: bigint, currency1: v2041.CurrencyId, pool1: bigint, shareIncrement: bigint} {
    assert(this.isV2041)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2041
  }

  get asLatest(): {who: v2041.AccountId32, currency0: v2041.CurrencyId, pool0: bigint, currency1: v2041.CurrencyId, pool1: bigint, shareIncrement: bigint} {
    deprecateLatest()
    return this.asV2041
  }
}

export class DexRemoveLiquidityEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'dex.RemoveLiquidity')
  }

  /**
   *  Remove liquidity from the trading pool success. \[who,
   *  currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   *  share_decrement\]
   */
  get isV1000(): boolean {
    return this.ctx._chain.getEventHash('dex.RemoveLiquidity') === 'e11dbab4924212ae5321f2190867e93a44683b878bf6b0fa5bd0c478df353671'
  }

  /**
   *  Remove liquidity from the trading pool success. \[who,
   *  currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   *  share_decrement\]
   */
  get asV1000(): [Uint8Array, v1000.CurrencyId, bigint, v1000.CurrencyId, bigint, bigint] {
    assert(this.isV1000)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   *  Remove liquidity from the trading pool success. \[who,
   *  currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   *  share_decrement\]
   */
  get isV1008(): boolean {
    return this.ctx._chain.getEventHash('dex.RemoveLiquidity') === 'dac8e7f19530af93245ad8f3f9a3fb307353b5da3c9d192e9c2d54e5f5746b5b'
  }

  /**
   *  Remove liquidity from the trading pool success. \[who,
   *  currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   *  share_decrement\]
   */
  get asV1008(): [Uint8Array, v1008.CurrencyId, bigint, v1008.CurrencyId, bigint, bigint] {
    assert(this.isV1008)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   *  Remove liquidity from the trading pool success. \[who,
   *  currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   *  share_decrement\]
   */
  get isV1009(): boolean {
    return this.ctx._chain.getEventHash('dex.RemoveLiquidity') === 'c4e384f72410776ee9490dba40495441132fedb8a20c4a71a4d01655db78cc36'
  }

  /**
   *  Remove liquidity from the trading pool success. \[who,
   *  currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   *  share_decrement\]
   */
  get asV1009(): [Uint8Array, v1009.CurrencyId, bigint, v1009.CurrencyId, bigint, bigint] {
    assert(this.isV1009)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Remove liquidity from the trading pool success. \[who,
   * currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   * share_decrement\]
   */
  get isV1019(): boolean {
    return this.ctx._chain.getEventHash('dex.RemoveLiquidity') === '00f48305f7a101e91f106e66ef4cf3b4e54bb65d8ff2c05876f632d9198c3987'
  }

  /**
   * Remove liquidity from the trading pool success. \[who,
   * currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   * share_decrement\]
   */
  get asV1019(): [v1019.AccountId32, v1019.CurrencyId, bigint, v1019.CurrencyId, bigint, bigint] {
    assert(this.isV1019)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Remove liquidity from the trading pool success. \[who,
   * currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   * share_decrement\]
   */
  get isV2001(): boolean {
    return this.ctx._chain.getEventHash('dex.RemoveLiquidity') === '354c2ff936c963344c4b899c6137734881516ba92dd776baf5835c892a808cc8'
  }

  /**
   * Remove liquidity from the trading pool success. \[who,
   * currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   * share_decrement\]
   */
  get asV2001(): [v2001.AccountId32, v2001.CurrencyId, bigint, v2001.CurrencyId, bigint, bigint] {
    assert(this.isV2001)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Remove liquidity from the trading pool success. \[who,
   * currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   * share_decrement\]
   */
  get isV2010(): boolean {
    return this.ctx._chain.getEventHash('dex.RemoveLiquidity') === '0bfb94974d42ca6e11a86e708767ef4922387b3e65caf887431c83e36917e8b6'
  }

  /**
   * Remove liquidity from the trading pool success. \[who,
   * currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   * share_decrement\]
   */
  get asV2010(): [v2010.AccountId32, v2010.CurrencyId, bigint, v2010.CurrencyId, bigint, bigint] {
    assert(this.isV2010)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Remove liquidity from the trading pool success. \[who,
   * currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   * share_decrement\]
   */
  get isV2011(): boolean {
    return this.ctx._chain.getEventHash('dex.RemoveLiquidity') === '4ae886c2125aa566a67140764e7a8488f8209e0ded561252836bf554963fd564'
  }

  /**
   * Remove liquidity from the trading pool success. \[who,
   * currency_id_0, pool_0_decrement, currency_id_1, pool_1_decrement,
   * share_decrement\]
   */
  get asV2011(): [v2011.AccountId32, v2011.CurrencyId, bigint, v2011.CurrencyId, bigint, bigint] {
    assert(this.isV2011)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Remove liquidity from the trading pool success.
   */
  get isV2012(): boolean {
    return this.ctx._chain.getEventHash('dex.RemoveLiquidity') === '0c775682443949d0835542cd27535b71d2b830e565ebaaa24b8c7768409b8547'
  }

  /**
   * Remove liquidity from the trading pool success.
   */
  get asV2012(): {who: v2012.AccountId32, currency0: v2012.CurrencyId, pool0: bigint, currency1: v2012.CurrencyId, pool1: bigint, shareDecrement: bigint} {
    assert(this.isV2012)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Remove liquidity from the trading pool success.
   */
  get isV2022(): boolean {
    return this.ctx._chain.getEventHash('dex.RemoveLiquidity') === 'eeb329f75745576fac1da0d7201aa838eb5187741c5f533a41727b52f1117c06'
  }

  /**
   * Remove liquidity from the trading pool success.
   */
  get asV2022(): {who: v2022.AccountId32, currency0: v2022.CurrencyId, pool0: bigint, currency1: v2022.CurrencyId, pool1: bigint, shareDecrement: bigint} {
    assert(this.isV2022)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Remove liquidity from the trading pool success.
   */
  get isV2041(): boolean {
    return this.ctx._chain.getEventHash('dex.RemoveLiquidity') === '2b2651076d7c6e31eabc5030ae823d73df2a7f329cdfadb79d6ca67116c061d8'
  }

  /**
   * Remove liquidity from the trading pool success.
   */
  get asV2041(): {who: v2041.AccountId32, currency0: v2041.CurrencyId, pool0: bigint, currency1: v2041.CurrencyId, pool1: bigint, shareDecrement: bigint} {
    assert(this.isV2041)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2041
  }

  get asLatest(): {who: v2041.AccountId32, currency0: v2041.CurrencyId, pool0: bigint, currency1: v2041.CurrencyId, pool1: bigint, shareDecrement: bigint} {
    deprecateLatest()
    return this.asV2041
  }
}

export class DexSwapEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'dex.Swap')
  }

  /**
   *  Use supply currency to swap target currency. \[trader, trading_path,
   *  supply_currency_amount, target_currency_amount\]
   */
  get isV1000(): boolean {
    return this.ctx._chain.getEventHash('dex.Swap') === '1e6db1aaa1528185ee48201072351137372acd57f47f1bac07e33cfa4ee8eda7'
  }

  /**
   *  Use supply currency to swap target currency. \[trader, trading_path,
   *  supply_currency_amount, target_currency_amount\]
   */
  get asV1000(): [Uint8Array, v1000.CurrencyId[], bigint, bigint] {
    assert(this.isV1000)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   *  Use supply currency to swap target currency. \[trader, trading_path,
   *  liquidity_change_list\]
   */
  get isV1008(): boolean {
    return this.ctx._chain.getEventHash('dex.Swap') === 'c4170da8b3959e067c6fe9a38ed51db2ca48b6627c98a3bf3c4f5881d97df214'
  }

  /**
   *  Use supply currency to swap target currency. \[trader, trading_path,
   *  liquidity_change_list\]
   */
  get asV1008(): [Uint8Array, v1008.CurrencyId[], bigint[]] {
    assert(this.isV1008)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   *  Use supply currency to swap target currency. \[trader, trading_path,
   *  liquidity_change_list\]
   */
  get isV1009(): boolean {
    return this.ctx._chain.getEventHash('dex.Swap') === '9027d2d6b34de0fc3da5ac35afbb0cec5eb0409fec668872634d52cc6c76067b'
  }

  /**
   *  Use supply currency to swap target currency. \[trader, trading_path,
   *  liquidity_change_list\]
   */
  get asV1009(): [Uint8Array, v1009.CurrencyId[], bigint[]] {
    assert(this.isV1009)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Use supply currency to swap target currency. \[trader, trading_path,
   * liquidity_change_list\]
   */
  get isV1019(): boolean {
    return this.ctx._chain.getEventHash('dex.Swap') === '4aa8123334801970a490aba70995bfd90392468c46e0567f29d4e1fb00e44131'
  }

  /**
   * Use supply currency to swap target currency. \[trader, trading_path,
   * liquidity_change_list\]
   */
  get asV1019(): [v1019.AccountId32, v1019.CurrencyId[], bigint[]] {
    assert(this.isV1019)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Use supply currency to swap target currency. \[trader, trading_path,
   * liquidity_change_list\]
   */
  get isV2001(): boolean {
    return this.ctx._chain.getEventHash('dex.Swap') === 'cdd8cf79d973f2ded497b5e4397c5750320632d038e55a81a50be778b336152c'
  }

  /**
   * Use supply currency to swap target currency. \[trader, trading_path,
   * liquidity_change_list\]
   */
  get asV2001(): [v2001.AccountId32, v2001.CurrencyId[], bigint[]] {
    assert(this.isV2001)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Use supply currency to swap target currency. \[trader, trading_path,
   * liquidity_change_list\]
   */
  get isV2010(): boolean {
    return this.ctx._chain.getEventHash('dex.Swap') === 'd193deea7699797fb42eede887d7e475ea06d09b70aa3998779c795ecbd60de9'
  }

  /**
   * Use supply currency to swap target currency. \[trader, trading_path,
   * liquidity_change_list\]
   */
  get asV2010(): [v2010.AccountId32, v2010.CurrencyId[], bigint[]] {
    assert(this.isV2010)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Use supply currency to swap target currency. \[trader, trading_path,
   * liquidity_change_list\]
   */
  get isV2011(): boolean {
    return this.ctx._chain.getEventHash('dex.Swap') === '803fba5af336935482c918fa5bdbbdf47e29d9addee83a97d07c888426eeb6aa'
  }

  /**
   * Use supply currency to swap target currency. \[trader, trading_path,
   * liquidity_change_list\]
   */
  get asV2011(): [v2011.AccountId32, v2011.CurrencyId[], bigint[]] {
    assert(this.isV2011)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Use supply currency to swap target currency.
   */
  get isV2012(): boolean {
    return this.ctx._chain.getEventHash('dex.Swap') === 'c7172b5cf5413078c0438488593e69b029a9f38719e4775135336a1c1e555840'
  }

  /**
   * Use supply currency to swap target currency.
   */
  get asV2012(): {trader: v2012.AccountId32, path: v2012.CurrencyId[], liquidityChanges: bigint[]} {
    assert(this.isV2012)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Use supply currency to swap target currency.
   */
  get isV2022(): boolean {
    return this.ctx._chain.getEventHash('dex.Swap') === '55e9eb574f6e192ebbc58cadeedf4424258a7a584bca448fe4d00ac1624e224b'
  }

  /**
   * Use supply currency to swap target currency.
   */
  get asV2022(): {trader: v2022.AccountId32, path: v2022.CurrencyId[], liquidityChanges: bigint[]} {
    assert(this.isV2022)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Use supply currency to swap target currency.
   */
  get isV2041(): boolean {
    return this.ctx._chain.getEventHash('dex.Swap') === 'f9d12a038f92db18c22b196b3b3d2deb8559e06742524b52307581c4f08c83e4'
  }

  /**
   * Use supply currency to swap target currency.
   */
  get asV2041(): {trader: v2041.AccountId32, path: v2041.CurrencyId[], liquidityChanges: bigint[]} {
    assert(this.isV2041)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV2041
  }

  get asLatest(): {trader: v2041.AccountId32, path: v2041.CurrencyId[], liquidityChanges: bigint[]} {
    deprecateLatest()
    return this.asV2041
  }
}

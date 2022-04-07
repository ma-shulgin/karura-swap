import assert from 'assert'
import {StorageContext, Result} from './support'
import * as v1000 from './v1000'
import * as v1008 from './v1008'
import * as v1009 from './v1009'
import * as v1019 from './v1019'
import * as v2001 from './v2001'
import * as v2010 from './v2010'
import * as v2011 from './v2011'
import * as v2022 from './v2022'
import * as v2041 from './v2041'

export class DexLiquidityPoolStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  get isV1000() {
    return this.ctx._chain.getStorageItemTypeHash('Dex', 'LiquidityPool') === 'd36b6516f999ce52afe7e5d34eba76a6103072dbd819a39ec3b1418d9136f8ef'
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  async getAsV1000(key: [v1000.CurrencyId, v1000.CurrencyId]): Promise<[bigint, bigint]> {
    assert(this.isV1000)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Dex', 'LiquidityPool', key)
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  get isV1008() {
    return this.ctx._chain.getStorageItemTypeHash('Dex', 'LiquidityPool') === 'de265369ad17f126db702275a2a87758f75b389296104730e9a55c95d7932d89'
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  async getAsV1008(key: [v1008.CurrencyId, v1008.CurrencyId]): Promise<[bigint, bigint]> {
    assert(this.isV1008)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Dex', 'LiquidityPool', key)
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  get isV1009() {
    return this.ctx._chain.getStorageItemTypeHash('Dex', 'LiquidityPool') === '19af852fae9993516c6453a75f675c6523aaaffa98c00428436a96b43709fb88'
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  async getAsV1009(key: [v1009.CurrencyId, v1009.CurrencyId]): Promise<[bigint, bigint]> {
    assert(this.isV1009)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Dex', 'LiquidityPool', key)
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  get isV1019() {
    return this.ctx._chain.getStorageItemTypeHash('Dex', 'LiquidityPool') === 'b1d9c13f36b64f6df9387c34d1fd019c47e2f0fcb4987d0575208c5b978d6748'
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  async getAsV1019(key: v1019.TradingPair): Promise<[bigint, bigint]> {
    assert(this.isV1019)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Dex', 'LiquidityPool', key)
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  get isV2001() {
    return this.ctx._chain.getStorageItemTypeHash('Dex', 'LiquidityPool') === 'f6834389babfe8760a25854f3ea1a3a8f1b03b2f852f5c3a33dfa97402758ff5'
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  async getAsV2001(key: v2001.TradingPair): Promise<[bigint, bigint]> {
    assert(this.isV2001)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Dex', 'LiquidityPool', key)
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  get isV2010() {
    return this.ctx._chain.getStorageItemTypeHash('Dex', 'LiquidityPool') === 'a0f4e1dcd7960c1c91d2590ad3801788a6eaab75afd778b5edbfef6bedf5f7d9'
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  async getAsV2010(key: v2010.TradingPair): Promise<[bigint, bigint]> {
    assert(this.isV2010)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Dex', 'LiquidityPool', key)
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  get isV2011() {
    return this.ctx._chain.getStorageItemTypeHash('Dex', 'LiquidityPool') === '1842086c00044bc92994c1faddcd897b0b82736681b9f3a39331fdc7ad0b3fa2'
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  async getAsV2011(key: v2011.TradingPair): Promise<[bigint, bigint]> {
    assert(this.isV2011)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Dex', 'LiquidityPool', key)
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  get isV2022() {
    return this.ctx._chain.getStorageItemTypeHash('Dex', 'LiquidityPool') === 'c95a3fb41aa1287d826cbb883e35b77b2655f08dda3ae98e032d261e23b6c2cc'
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  async getAsV2022(key: v2022.TradingPair): Promise<[bigint, bigint]> {
    assert(this.isV2022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Dex', 'LiquidityPool', key)
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  get isV2041() {
    return this.ctx._chain.getStorageItemTypeHash('Dex', 'LiquidityPool') === '32eb7c97e0c0a08c96cdde15f7a65ee4d2d841c67acaf2e56256b5931899576c'
  }

  /**
   *  Liquidity pool for TradingPair.
   * 
   *  LiquidityPool: map TradingPair => (Balance, Balance)
   */
  async getAsV2041(key: v2041.TradingPair): Promise<[bigint, bigint]> {
    assert(this.isV2041)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Dex', 'LiquidityPool', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Dex', 'LiquidityPool') != null
  }
}

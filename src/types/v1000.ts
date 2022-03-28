import type {Result} from './support'

export type CurrencyId = CurrencyId_Token | CurrencyId_DEXShare | CurrencyId_ERC20 | CurrencyId_StableAssetPoolToken | CurrencyId_LiquidCroadloan | CurrencyId_ForeignAsset

export interface CurrencyId_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface CurrencyId_DEXShare {
  __kind: 'DEXShare'
  value: [DexShare, DexShare]
}

export interface CurrencyId_ERC20 {
  __kind: 'ERC20'
  value: Uint8Array
}

export interface CurrencyId_StableAssetPoolToken {
  __kind: 'StableAssetPoolToken'
  value: number
}

export interface CurrencyId_LiquidCroadloan {
  __kind: 'LiquidCroadloan'
  value: number
}

export interface CurrencyId_ForeignAsset {
  __kind: 'ForeignAsset'
  value: number
}

export type TokenSymbol = TokenSymbol_ACA | TokenSymbol_AUSD | TokenSymbol_DOT | TokenSymbol_LDOT | TokenSymbol_RENBTC | TokenSymbol_KAR | TokenSymbol_KUSD | TokenSymbol_KSM | TokenSymbol_LKSM | TokenSymbol_CASH

export interface TokenSymbol_ACA {
  __kind: 'ACA'
}

export interface TokenSymbol_AUSD {
  __kind: 'AUSD'
}

export interface TokenSymbol_DOT {
  __kind: 'DOT'
}

export interface TokenSymbol_LDOT {
  __kind: 'LDOT'
}

export interface TokenSymbol_RENBTC {
  __kind: 'RENBTC'
}

export interface TokenSymbol_KAR {
  __kind: 'KAR'
}

export interface TokenSymbol_KUSD {
  __kind: 'KUSD'
}

export interface TokenSymbol_KSM {
  __kind: 'KSM'
}

export interface TokenSymbol_LKSM {
  __kind: 'LKSM'
}

export interface TokenSymbol_CASH {
  __kind: 'CASH'
}

export type DexShare = DexShare_Token | DexShare_Erc20

export interface DexShare_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface DexShare_Erc20 {
  __kind: 'Erc20'
  value: Uint8Array
}

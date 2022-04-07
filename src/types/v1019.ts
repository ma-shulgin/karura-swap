import type {Result} from './support'

export type AccountId32 = Uint8Array

export type CurrencyId = CurrencyId_Token | CurrencyId_DexShare | CurrencyId_Erc20 | CurrencyId_StableAssetPoolToken

export interface CurrencyId_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface CurrencyId_DexShare {
  __kind: 'DexShare'
  value: [DexShare, DexShare]
}

export interface CurrencyId_Erc20 {
  __kind: 'Erc20'
  value: H160
}

export interface CurrencyId_StableAssetPoolToken {
  __kind: 'StableAssetPoolToken'
  value: number
}

export type TradingPair = [CurrencyId, CurrencyId]

export type TokenSymbol = TokenSymbol_ACA | TokenSymbol_AUSD | TokenSymbol_DOT | TokenSymbol_LDOT | TokenSymbol_RENBTC | TokenSymbol_CASH | TokenSymbol_KAR | TokenSymbol_KUSD | TokenSymbol_KSM | TokenSymbol_LKSM | TokenSymbol_BNC | TokenSymbol_VSKSM

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

export interface TokenSymbol_CASH {
  __kind: 'CASH'
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

export interface TokenSymbol_BNC {
  __kind: 'BNC'
}

export interface TokenSymbol_VSKSM {
  __kind: 'VSKSM'
}

export type DexShare = DexShare_Token | DexShare_Erc20

export interface DexShare_Token {
  __kind: 'Token'
  value: TokenSymbol
}

export interface DexShare_Erc20 {
  __kind: 'Erc20'
  value: H160
}

export type H160 = Uint8Array

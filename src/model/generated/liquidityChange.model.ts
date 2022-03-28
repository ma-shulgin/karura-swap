import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_} from "typeorm"
import * as marshal from "./marshal"
import {LiquidityChangeReason} from "./_liquidityChangeReason"

@Entity_()
export class LiquidityChange {
  constructor(props?: Partial<LiquidityChange>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  timestamp!: bigint

  @Column_("integer", {nullable: false})
  blockNumber!: number

  @Column_("integer", {nullable: false})
  eventIdx!: number

  @Column_("integer", {nullable: false})
  step!: number

  @Column_("varchar", {length: 6, nullable: false})
  reason!: LiquidityChangeReason

  @Column_("text", {nullable: false})
  currencyZero!: string

  @Column_("text", {nullable: false})
  currencyOne!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  amountZero!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  amountOne!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  balanceZero!: bigint

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
  balanceOne!: bigint
}

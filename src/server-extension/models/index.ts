import { IsDateString, Min } from "class-validator";
import {
  Arg,
  Field,
  Float,
  InputType,
  Int,
  ObjectType,
  Query,
  Resolver,
} from "type-graphql";

@ObjectType()
export class ExchangeStats {
  @Field(() => String, { nullable: false })
  pair!: string;

  @Field(() => String, { nullable: false })
  period!: string; // ISO string

  @Field(() => Int, { nullable: false })
  intervalMinutes!: number;

  @Field(() => Float, { nullable: false })
  minRate!: number;

  @Field(() => Float, { nullable: false })
  maxRate!: number;

  @Field(() => Float, { nullable: false })
  avgRate!: number;


}

@InputType()
export class ExchangeRatesInput {
  @Field(() => Int, { nullable: false })
  @Min(1)
  intervalMinutes!: number;

  @Field(() => String, { nullable: true })
  pair?: string;

  @Field(() => String, { nullable: true })
  @IsDateString()
  periodFrom?: string;

  @Field(() => String, { nullable: true })
  @IsDateString()
  periodTo?: string;

}


@ObjectType()
export class LastExchange {
  @Field(() => String, { nullable: false })
  pair!: string;

  @Field(() => String, { nullable: false })
  fromAmount!: string;

  @Field(() => String, { nullable: false })
  toAmount!: string;

  @Field(() => Float, { nullable: false })
  rate!: number;

  @Field(() => String, { nullable: false })
  timestamp!: string;


}

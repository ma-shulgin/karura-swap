import { IsDateString, Min } from "class-validator";
import {Swap} from "../../model"
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
import { EntityManager, Timestamp } from "typeorm";
import { InjectManager } from "typeorm-typedi-extensions";
import {ExchangeRatesInput,LastExchange,ExchangeStats} from "../models"
@Resolver()
export class RatesResolver {
  constructor(private tx: () => Promise<EntityManager>) {}

  @Query(() => [ExchangeStats])
  async ratesHistory(
    @Arg("params", { validate: true }) input: ExchangeRatesInput
  ): Promise<ExchangeStats[]> {
    const interval_ms = input.intervalMinutes * 60 * 1000;
    const params: any[] = [interval_ms];
    const where: string[] = [];

    let from: number;
    if (input.periodFrom) {
      from = new Date(input.periodFrom).valueOf();
    } else {
      const d = new Date();
      d.setDate(d.getDate() - 7);
      from = d.valueOf();
    }
    from = Math.floor(from / interval_ms) * interval_ms;
    where.push(`timestamp > $${params.push(from)}`);

    if (input.periodTo) {
      let to = new Date(input.periodTo).valueOf();
      to = Math.ceil(to / interval_ms) * interval_ms;
      where.push(`timestamp < $${params.push(to)}`);
    }

    if (input.pair) {
      where.push(
        `concat(to_currency, '/', from_currency) = $${params.push(input.pair)}`
      );
    }

    const manager = await this.tx()
    const rows: any[] = await manager.getRepository(Swap).query(
      `
            select
                   round(timestamp / $1) * $1 as period,
                   concat(to_currency, '/', from_currency) as pair,
                   MIN(from_amount / to_amount) as min_rate,
                   MAX(from_amount / to_amount) as max_rate,
                   SUM(from_amount) / SUM(to_amount) as avg_rate
            from swap
            where ${where.join(" AND ")}
            group by period, pair
            order by period DESC, pair
        `,
      params
    );

    return rows.map((row) => {
      const e = new ExchangeStats();
      e.pair = row.pair;
      e.period = new Date(parseInt(row.period)).toISOString();
      e.intervalMinutes = input.intervalMinutes;
      e.minRate = Number(row.min_rate);
      e.maxRate = Number(row.max_rate);
      e.avgRate = Number(row.avg_rate);
      return e;
    });
  }

  @Query(() => [ExchangeStats])
  async currentExchangeRates(
    @Arg("intervalMinutes", () => Int, { defaultValue: 10 })
    intervalMinutes: number
  ) {
    const interval_ms = intervalMinutes * 60 * 1000;
    const now = new Date();
    const manager = await this.tx()
    const rows: any[] = await manager.getRepository(Swap).query(
      `
            select concat(to_currency, '/', from_currency) as pair,
                   MIN(from_amount / to_amount) as min_rate,
                   MAX(from_amount / to_amount) as max_rate,
                   SUM(from_amount) / SUM(to_amount) as avg_rate
            from swap
            where timestamp > $1
            group by pair
            order by pair
        `,
      [now.valueOf() - interval_ms]
    );
    return rows.map((row) => {
      const e = new ExchangeStats();
      e.pair = row.pair;
      e.period = now.toISOString();
      e.intervalMinutes = intervalMinutes;
      e.minRate = Number(row.min_rate);
      e.maxRate = Number(row.max_rate);
      e.avgRate = Number(row.avg_rate);
      return e;
    });
  }

  @Query(() => [LastExchange])
  async lastExchanges() {
    const manager = await this.tx()
    const rows: any[] = await manager.getRepository(Swap).query(`
            select
                distinct on (concat(to_currency, '/', from_currency)) concat(to_currency, '/', from_currency) as pair,
                from_amount,
                to_amount,
                from_amount / to_amount as rate,
                timestamp
            from swap
            order by pair, timestamp DESC
        `);
    return rows.map((row) => {
      const e = new LastExchange();
      e.pair = row.pair;
      e.fromAmount = row.from_amount;
      e.toAmount = row.to_amount;
      e.rate = Number(row.rate);
      e.timestamp = new Date(parseInt(row.timestamp)).toISOString();
      return e;
    });
  }
}

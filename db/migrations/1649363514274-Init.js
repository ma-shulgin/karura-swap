module.exports = class Init1649363514274 {
  name = 'Init1649363514274'

  async up(db) {
    await db.query(`CREATE TABLE "swap" ("id" character varying NOT NULL, "timestamp" numeric NOT NULL, "block_number" integer NOT NULL, "event_idx" integer NOT NULL, "step" integer NOT NULL, "from_currency" text NOT NULL, "to_currency" text NOT NULL, "from_amount" numeric NOT NULL, "to_amount" numeric NOT NULL, CONSTRAINT "PK_4a10d0f359339acef77e7f986d9" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "liquidity_change" ("id" character varying NOT NULL, "timestamp" numeric NOT NULL, "block_number" integer NOT NULL, "event_idx" integer NOT NULL, "step" integer NOT NULL, "reason" character varying(6) NOT NULL, "currency_zero" text NOT NULL, "currency_one" text NOT NULL, "amount_zero" numeric NOT NULL, "amount_one" numeric NOT NULL, "balance_zero" numeric NOT NULL, "balance_one" numeric NOT NULL, CONSTRAINT "PK_470573b79a4d135580c7e7c8179" PRIMARY KEY ("id"))`)
  }

  async down(db) {
    await db.query(`DROP TABLE "swap"`)
    await db.query(`DROP TABLE "liquidity_change"`)
  }
}

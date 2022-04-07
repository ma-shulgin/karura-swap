process: build
	@node -r dotenv/config lib/processor.js


serve:
	@npx squid-graphql-server


migrate:
	@npx sqd db:migrate


migration:
	@npx sqd db:create-migration Data


build:
	@npm run build


codegen:
	@npx sqd codegen


typegen: karuraVersions.json
	@npx squid-substrate-typegen typegen.json


karuraVersions.json:
	@make explore


explore:
	@npx squid-substrate-metadata-explorer \
		--chain wss://karura-rpc-3.aca-api.network/ws \
		--archive https://karura.indexer.gc.subsquid.io/v4/graphql \
		--out karuraVersions.json


up:
	@docker-compose up -d


down:
	@docker-compose down


.PHONY: process serve start codegen migration migrate up down

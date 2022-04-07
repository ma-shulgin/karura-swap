import * as handlers from './mappings'
import { lookupArchive } from "@subsquid/archive-registry";
import { SubstrateProcessor } from '@subsquid/substrate-processor';

const processor = new SubstrateProcessor("karura_swap");

processor.setBatchSize(500);
processor.setDataSource({
  archive: lookupArchive("karura")[0].url,
  chain: "wss://karura-rpc-3.aca-api.network/ws",
});
processor.setTypesBundle("karura")
//processor.setBlockRange({from:446936})
processor.setBlockRange({from:1600000})
processor.addEventHandler("dex.Swap", handlers.handleSwap)
processor.addEventHandler("dex.AddLiquidity", handlers.handleAddLiquidity)
processor.addEventHandler("dex.RemoveLiquidity", handlers.handleRemoveLiquidity)

processor.run();


import { INTERVAL_ALL, INTERVAL_DAY } from "./helper/constats";
import { getCurrentBlock } from "./helper/eth";
import { alchemicaSubgraph } from "./helper/subgraphs";

export const getAlchemicaTotalSupplyFromBlock = async (block = 0) => {
  let query = `{block${block}: erc20Contracts ${
    block !== 0 ? `(block: { number: ${block}})` : ""
  } {
      name,
      totalSupply {
        id
        value
      }
    }}`;
  const result = await alchemicaSubgraph({ query });
  const supplies = result.data["block" + block].map((e) => ({
    name: e.name,
    totalSupply: e.totalSupply.value,
  }));

  return supplies;
};

export const getAlchemicaTotalSupplyFromMultipleBlocks = async (
  blocks = [123, 345, 789, 12]
) => {
  let innerQuery = "";
  for (let i = 0; i < blocks.length; i++) {
    innerQuery =
      innerQuery +
      `block${blocks[i]}: erc20Contracts (block: { number: ${blocks[i]}}) {
      name,
      totalSupply {
        id
        value
      }
    } `;
  }

  let query = `{${innerQuery}}`;

  const result = await alchemicaSubgraph({ query });
  const blockResults = Object.keys(result.data).map((e) => ({
    data: result.data[e].map((token) => ({
      name: token.name,
      totalSupply: token.totalSupply.value,
    })),
    block: parseInt(e.substring(5)),
  }));
  return blockResults;
};

export const getAlchemicaTotalSupplyDiff = async (
  interval = INTERVAL_ALL,
  asTimeSeries = false
) => {
  let currentBlockNr = await getCurrentBlock();
  let previousBlockNr = currentBlockNr - interval;

  if (currentBlockNr === previousBlockNr) {
    return getAlchemicaTotalSupplyFromBlock();
  }

  if (asTimeSeries) {
    let blocks = [];
    while (interval >= INTERVAL_DAY) {
      blocks.push(currentBlockNr - interval);
      interval -= INTERVAL_DAY;
    }
    return getAlchemicaTotalSupplyFromMultipleBlocks(blocks);
  }

  let values = await Promise.all([
    getAlchemicaTotalSupplyFromBlock(),
    getAlchemicaTotalSupplyFromBlock(previousBlockNr),
  ]);

  let diffValues = values[0].map((e, i) => ({
    name: e.name,
    totalSupply: e.totalSupply - values[1][i].totalSupply,
  }));

  return diffValues;
};

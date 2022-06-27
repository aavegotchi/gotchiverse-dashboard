import { INTERVAL_ALL, INTERVAL_DAY } from "./helper/constats";
import { getCurrentBlock } from "./helper/eth";
import { gotchiverseSubgraph } from "./helper/subgraphs";

export const getStatsFromBlock = async (block = 0) => {
  let query = `{block${block}: stat(id: "overall" ${
    block !== 0 ? `block: { number: ${block}}` : ""
  }) {
        countChannelAlchemicaEvents
        countParcelInstallations
        countInstallationTypes
        countUpgradesInitiated
        alchemicaSpendOnInstallations
        alchemicaSpendOnUpgrades
        alchemicaSpendOnTiles
        alchemicaSpendTotal
        alchemicaChanneledTotal
        alchemicaClaimedTotal
        alchemicaExitedTotal
        tilesMinted
        installationsMintedTotal
        installationsUpgradedTotal
        gltrSpendTotal
        gltrSpendOnCrafts
        gltrSpendOnUpgrades
      }}`;
  const result = await gotchiverseSubgraph({ query });
  const supplies = result.data["block" + block];

  return supplies;
};

export const getStatsFromMultipleBlocks = async (
  blocks = [123, 345, 789, 12]
) => {
  let innerQuery = "";
  for (let i = 0; i < blocks.length; i++) {
    innerQuery =
      innerQuery +
      `block${blocks[i]}: stat (id: "overall" block: { number: ${blocks[i]}}) {
        countChannelAlchemicaEvents
        countParcelInstallations
        countInstallationTypes
        countUpgradesInitiated
        alchemicaSpendOnInstallations
        alchemicaSpendOnUpgrades
        alchemicaSpendOnTiles
        alchemicaSpendTotal
        alchemicaChanneledTotal
        alchemicaClaimedTotal
        alchemicaExitedTotal
        tilesMinted
        installationsMintedTotal
        installationsUpgradedTotal
        gltrSpendTotal
        gltrSpendOnCrafts
        gltrSpendOnUpgrades
      }`;
  }

  let query = `{${innerQuery}}`;

  const result = await gotchiverseSubgraph({ query });
  const blockResults = Object.keys(result.data).map((e) => ({
    data: result.data[e],
    block: parseInt(e.substring(5)),
  }));
  return blockResults;
};

export const getStatsDiff = async (
  interval = INTERVAL_ALL,
  asTimeSeries = false
) => {
  let currentBlockNr = await getCurrentBlock();
  let previousBlockNr = currentBlockNr - interval;

  if (currentBlockNr === previousBlockNr) {
    return getStatsFromBlock();
  }

  if (asTimeSeries) {
    let blocks = [];
    while (interval >= INTERVAL_DAY) {
      blocks.push(currentBlockNr - interval);
      interval -= INTERVAL_DAY;
    }
    return getStatsFromMultipleBlocks(blocks);
  }

  let [newValues, oldValues] = await Promise.all([
    getStatsFromBlock(),
    getStatsFromBlock(previousBlockNr),
  ]);

  let keys = Object.keys(newValues);
  keys.forEach((e) => {
    if (Array.isArray(newValues[e])) {
      newValues[e] = newValues[e].map((v, j) => {
        return newValues[e][j] - oldValues[e][j];
      });
    } else {
      newValues[e] = newValues[e] - oldValues[e];
    }
  });

  return newValues;
};

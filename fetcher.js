const apollo = require("apollo-fetch");

const gotchiverseSubgraph = apollo.createApolloFetch({
  uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/gotchiverse-matic",
});

const coreMaticSubgraph = apollo.createApolloFetch({
  //uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic",
  uri: "https://api.thegraph.com/subgraphs/id/QmdLiG6MpgHmGUrUAbG7MgHJRfcusX1P3ucJdKCm6nunS1",
});

const alchemicaSubgraph = apollo.createApolloFetch({
  uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-alchemica",
});

const aavegotchiSvgSubgraph = apollo.createApolloFetch({
  uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-svg",
});

const gltrStakingSubgraph = apollo.createApolloFetch({
  uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-gltr-staking",
});

export const getAlchemicaTotalSupply = async () => {
  let query = `{erc20Contracts {
      name,
      totalSupply {
        id
        value
      }
    }}`;
  const result = await alchemicaSubgraph({ query });

  return result.data.erc20Contracts.map((e) => ({
    name: e.name,
    totalSupply: e.totalSupply.value,
  }));
};

export const getStats = async () => {
  let query = `{stat(id:"overall") {
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
    }}`;

  const result = await gotchiverseSubgraph({ query });

  return result.data.stat;
};

export const getGotchis = async () => {
  let query = `{statistics {
      aavegotchisClaimed 
      aavegotchisSacrificed
      aavegotchisBorrowed
    }}`;

  let result = await coreMaticSubgraph({ query });
  let gotchisClaimed = result.data.statistics[0].aavegotchisClaimed;

  query = `{user(id:"0x0000000000000000000000000000000000000000") {
      gotchisOwned(first: 1000) {
        id
      }
    }}`;

  result = await coreMaticSubgraph({ query });
  let gotchisSacrificed = result.data.user.gotchisOwned.length.toString();

  return { gotchisClaimed, gotchisSacrificed };
};

export const getActiveWallets = async () => {
  const data = await Promise.all([
    fetch(
      "https://dappradar.com/v2/api/dapp/polygon/games/aavegotchi/statistic/24h?currency=USD"
    ),
    fetch(
      "https://dappradar.com/v2/api/dapp/polygon/games/aavegotchi/statistic/week?currency=USD"
    ),
    fetch(
      "https://dappradar.com/v2/api/dapp/polygon/games/aavegotchi/statistic/month?currency=USD"
    ),
  ]);

  for (let i = 0; i < data.length; i++) {
    data[i] = (await data[i].json()).userActivity.toString();
  }

  return data;
};

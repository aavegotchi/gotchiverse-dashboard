const apollo = require("apollo-fetch");

const gotchiverseSubgraph = apollo.createApolloFetch({
  uri: "http://157.90.182.138:8000/subgraphs/name/aavegotchi/gotchiverse",
  //uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/gotchiverse-matic",
});

const coreMaticSubgraph = apollo.createApolloFetch({
  uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic",
  // uri: "https://api.thegraph.com/subgraphs/id/QmdLiG6MpgHmGUrUAbG7MgHJRfcusX1P3ucJdKCm6nunS1",
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

export const getPoolInfo = async () => {
  let query = `{
    erc20Balances(
      where: {account_in: ["0x1fe64677ab1397e20a1211afae2758570fea1b8c"], contract_not: "0x3801c3b3b5c98f88a9c9005966aa96aa440b9afc"}
    ) {
      value
      account {
        id
      }
      contract {
        name
        id
        totalSupply {
          value
        }
      }
    }
  }`;

  const result = await gltrStakingSubgraph({ query });
  const balancesOfPools = result.data.erc20Balances;

  return balancesOfPools.map((e) => ({
    pool: e.contract.id,
    staked: e.value,
    totalSupply: e.contract.totalSupply.value,
    percentageStaked: (e.value / e.contract.totalSupply.value) * 100,
  }));
};

export const getStats = async () => {
  // let query = `{stat(id:"overall") {
  //     countChannelAlchemicaEvents
  //     countParcelInstallations
  //     countInstallationTypes
  //     countUpgradesInitiated
  //     alchemicaSpendOnInstallations
  //     alchemicaSpendOnUpgrades
  //     alchemicaSpendOnTiles
  //     alchemicaSpendTotal
  //     alchemicaChanneledTotal
  //     alchemicaClaimedTotal
  //     alchemicaExitedTotal
  //     tilesMinted
  //     installationsMintedTotal
  //     installationsUpgradedTotal
  //   }}`;

  // const result = await gotchiverseSubgraph({ query });

  // console.log(JSON.stringify(result));
  // return result.data.stat;

  let data = {
    countChannelAlchemicaEvents: "261158",
    countParcelInstallations: "16656",
    countInstallationTypes: "0",
    countUpgradesInitiated: "0",
    alchemicaSpendOnInstallations: [
      "9325100000000000000000000",
      "5018550000000000000000000",
      "4073025000000000000000000",
      "1218920000000000000000000",
    ],
    alchemicaSpendOnUpgrades: [
      "2224400000000000000000000",
      "1150950000000000000000000",
      "784225000000000000000000",
      "193030000000000000000000",
    ],
    alchemicaSpendOnTiles: [
      "389300000000000000000000",
      "389300000000000000000000",
      "1167900000000000000000000",
      "389300000000000000000000",
    ],
    alchemicaSpendTotal: [
      "11938800000000000000000000",
      "6558800000000000000000000",
      "6025150000000000000000000",
      "1801250000000000000000000",
    ],
    alchemicaChanneledTotal: [
      "32794492800000000000000000",
      "16397246400000000000000000",
      "8198623200000000000000000",
      "3279449280000000000000000",
    ],
    alchemicaClaimedTotal: ["0", "0", "0", "0"],
    alchemicaExitedTotal: ["0", "0", "0", "0"],
    tilesMinted: "15572",
    installationsMintedTotal: "53406",
    installationsUpgradedTotal: "24798",
  };

  return data;
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

export const getBurnedGLTR = async () => {
  // let query = `{stat(id:"overall") {
  //   gltrSpendTotal
  //   gltrSpendOnCrafts
  //   gltrSpendOnUpgrades
  // }}`;

  // const { data } = await gotchiverseSubgraph({ query });
  // const stat = data.stat;

  // Object.keys(stat).forEach((e) => {
  //   let value = stat[e];
  //   stat[e] =
  //     value.length >= 18
  //       ? value.slice(0, -18) + "." + value.slice(-18, -16)
  //       : value;
  // });

  // return stat;

  let data = {
    gltrSpendTotal: "11000",
    gltrSpendOnCrafts: "1000",
    gltrSpendOnUpgrades: "10000",
  };

  return data;
};

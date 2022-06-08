const apollo = require("apollo-fetch");

const gotchiverseSubgraph = apollo.createApolloFetch({
  uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/gotchiverse-matic",
});

const coreMaticSubgraph = apollo.createApolloFetch({
  uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic",
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

export default async (url) => {
  const getAlchemicaTotalSupply = async () => {
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

  const getStats = async () => {
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

  const getGotchis = async () => {
    let query = `{statistics {
      aavegotchisClaimed 
    }}`;

    let result = await coreMaticSubgraph({ query });
    let gotchisClaimed = result.data.statistics[0].aavegotchisClaimed;

    query = `{user(id:"0x0000000000000000000000000000000000000000") {
      gotchisOwned(first: 1000) {
        id
      }
    }}`;

    result = await coreMaticSubgraph({ query });
    let gotchisSacrificed = result.data.user.gotchisOwned.length;

    return { gotchisClaimed, gotchisSacrificed };
  };

  const stats = await getStats();
  const totalSupply = await getAlchemicaTotalSupply();
  const gotchis = await getGotchis();

  return {
    alchemica: {
      minted: stats.alchemicaChanneledTotal.map((e, i) => ({
        name: totalSupply[i].name,
        value: e,
      })),
      totalSupply: totalSupply,
      spendOn: {
        tiles: stats.alchemicaSpendOnTiles,
        installations: stats.alchemicaSpendOnInstallations,
        upgrades: stats.alchemicaSpendOnUpgrades,
      },
    },
    tilesMinted: stats.tilesMinted,
    installationsMinted: stats.installationsMintedTotal,
    installationsUpgraded: stats.installationsUpgradedTotal,
    numberOfChannels: stats.countChannelAlchemicaEvents,
    gltrSpendOnUpgrades: "todo",
    activeWallets: "todo",
    playersBanned: "todo",
    playersUnbanned: "todo",
    alchemicaSoldByBannedPlayers: "todo",
    gltrStaking: {
      stakers: "todo",
      stakedPoolTokens: ["todo", "todo", "todo", "todo", "todo", "todo"],
    },
    numberOfExtractors: "todo",
    gotchisSummoned: gotchis.gotchisClaimed - gotchis.gotchisSacrificed,
    gotchisSacrificed: gotchis.gotchisSacrificed,
    gotchisBorrowed: "todo",
    numberOfGotchisChanneled: "todo",
  };
};

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

import { INTERVAL_ALL } from "./helper/constats";
import { gltrStakingSubgraph, gotchiverseSubgraph } from "./helper/subgraphs";

export const getBurnedGLTR = async () => {
  let query = `{stat(id:"overall") {
    gltrSpendTotal
    gltrSpendOnCrafts
    gltrSpendOnUpgrades
  }}`;

  const { data } = await gotchiverseSubgraph({ query });
  const stat = data.stat;

  Object.keys(stat).forEach((e) => {
    let value = stat[e];
    stat[e] =
      value.length >= 18
        ? value.slice(0, -18) + "." + value.slice(-18, -16)
        : value;
  });

  return stat;

  return data;
};

export const getPoolInfo = async (interval = INTERVAL_ALL) => {
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

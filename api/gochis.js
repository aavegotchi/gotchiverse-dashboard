import { INTERVAL_ALL } from "./helper/constats";
import { coreMaticSubgraph } from "./helper/subgraphs";

export const getGotchis = async (interval = INTERVAL_ALL) => {
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

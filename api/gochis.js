import { INTERVAL_ALL } from "./helper/constats";
import { coreMaticSubgraph } from "./helper/subgraphs";

export const getGotchis = async (interval = INTERVAL_ALL) => {
  let query = `{statistic(id: "0") {
      aavegotchisClaimed 
      aavegotchisSacrificed
      aavegotchisBorrowed
    }}`;

  let result = await coreMaticSubgraph({ query });
  console.log("result", result);
  let data = result.data.statistic;
  console.log(data);

  return data;
};

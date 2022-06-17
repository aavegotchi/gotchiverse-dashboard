import { INTERVAL_ALL } from "./helper/constats";

export const getActiveWallets = async (interval = INTERVAL_ALL) => {
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

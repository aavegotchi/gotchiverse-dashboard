import {
  getAlchemicaTotalSupplyDiff,
  getAlchemicaTotalSupplyFromBlock,
} from "./api/alchemica";
import { getGotchis } from "./api/gochis";
import { INTERVAL_ALL, INTERVAL_DAY } from "./api/helper/constats";
import { getStatsDiff } from "./api/stats";

export default async function Fetcher(url) {
  let urlParts = url.split("/");
  let asTimeSeries = false;
  if (urlParts[5] == "series") {
    asTimeSeries = true;
  }

  if (url == "/api/alchemica/supply") {
    return getAlchemicaTotalSupplyDiff();
  }
  if (url == "/api/gotchiverse/stats") {
    return getStatsDiff();
  }
  if (url == "/api/gotchis/stats") {
    return getGotchis();
  }
  if (urlParts[1] !== "api") {
    return false;
  }

  if (
    !["alchemica", "gltr", "wallets", "gotchis", "gotchiverse"].includes(
      urlParts[2]
    )
  ) {
    return false;
  }
  let fetchMethod = getCategoryMethod(urlParts[2], urlParts[3]);
  if (!fetchMethod) {
    return false;
  }

  let interval = INTERVAL_ALL;
  if (urlParts[3]) {
    interval = INTERVAL_DAY * parseInt(urlParts[4].substring(-1));
  }

  const result = await fetchMethod(interval, asTimeSeries);
  return result;
}

function getCategoryMethod(category, attribute) {
  if (category == "alchemica" && attribute == "supply") {
    return getAlchemicaTotalSupplyDiff;
  } else if (category == "gotchiverse" && attribute == "stats") {
    return getStatsDiff;
  }

  return false;
}

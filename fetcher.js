import { getAlchemicaTotalSupplyDiff } from "./api/alchemica";
import { INTERVAL_ALL, INTERVAL_DAY } from "./api/helper/constats";

export default async function Fetcher(url) {
  let urlParts = url.split("/");
  console.log(url, urlParts);
  if (urlParts[1] !== "api") {
    return false;
  }

  if (!urlParts[2].includes(["alchemica", "gltr", "wallets", "gotchis", "stats"])) {
    return false;
  }

  let fetchMethod = getCategoryMethod(urlParts[2]);
  if (!fetchMethod) {
    return false;
  }

  let interval = INTERVAL_ALL;
  if (urlParts[3]) {
    interval = INTERVAL_DAY * parseInt(urlParts[3].substring(-1));
  }

  let asTimeSeries = false;
  if (urlParts[4] == "series") {
    asTimeSeries = true;
  }

  const result = await fetchMethod(interval, asTimeSeries);
  console.log(result);
  return {};
}

function getCategoryMethod(category) {
  if (category == "alchemica") {
    return getAlchemicaTotalSupplyDiff;
  } else if (category == "gotchis") {
    
  }



  return false;
}

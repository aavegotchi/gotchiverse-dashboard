const ethers = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(
  "https://polygon-rpc.com"
);

export const getCurrentBlock = async () => {
  return await provider.getBlockNumber();
};

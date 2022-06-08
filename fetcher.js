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
  return {};
};

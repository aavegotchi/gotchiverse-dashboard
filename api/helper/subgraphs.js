const apollo = require("apollo-fetch");

export const gotchiverseSubgraph = apollo.createApolloFetch({
  uri: "http://157.90.182.138:8000/subgraphs/name/aavegotchi/gotchiverse",
  //uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/gotchiverse-matic",
});

export const coreMaticSubgraph = apollo.createApolloFetch({
  uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic",
  // uri: "https://api.thegraph.com/subgraphs/id/QmdLiG6MpgHmGUrUAbG7MgHJRfcusX1P3ucJdKCm6nunS1",
});

export const alchemicaSubgraph = apollo.createApolloFetch({
  uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-alchemica",
});

export const aavegotchiSvgSubgraph = apollo.createApolloFetch({
  uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-svg",
});

export const gltrStakingSubgraph = apollo.createApolloFetch({
  uri: "https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-gltr-staking",
});

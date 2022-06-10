import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import useSWR from "swr";
import {
  getActiveWallets,
  getAlchemicaTotalSupply,
  getGotchis,
  getPoolInfo,
  getStats,
} from "../fetcher";
import fetcher from "../fetcher";
import dynamic from "next/dynamic";
import Helloworld from "../components/helloWorld";
import GLTRSpentOnUpgrades from "../components/gltrSpentUpgrades";

export default function Home({ data }) {
  // const { data, error } = useSWR("/api/user", fetcher);

  console.log(data);
  if (data == undefined) {
    return <div className="waitingForConnection">Loading...</div>;
  }

  let formatter = new Intl.NumberFormat(navigator.language || "us-US");

  const currentData = {
    activeWallets: "todo",
    alchemica: { minted: Array(4), totalSupply: Array(4), spendOn: Array(0) },
    alchemicaSoldByBannedPlayers: "todo",
    gltrSpendOnUpgrades: "todo",
    gltrStaking: { stakers: "todo", stakedPoolTokens: Array(6) },
    gotchisBorrowed: "todo",
    gotchisSacrificed: 655,
    gotchisSummoned: 18570,
    installationsMinted: "51008",
    installationsUpgraded: "22287",
    numberOfChannels: "198008",
    numberOfExtractors: "todo",
    numberOfGotchisChanneled: "todo",
    playersBanned: "todo",
    playersUnbanned: "todo",
    tilesMinted: "15572",
  };

  console.log(currentData, "current");

  return (
    <>
      <h2>Gotchiverse Economy</h2>
      <Row>
        <Col>
          <Card>Installations minted</Card>
        </Col>
        <Col>
          <Card>Tiles Minted</Card>
        </Col>
        <Col>
          <GLTRSpentOnUpgrades />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>Number of players banned vs total players</Card>
        </Col>
        <Col>
          <Card>Alchemica minted vs total supply</Card>
        </Col>
        <Col>
          <Card>Upgrades initiated</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>Number of channels--</Card>
        </Col>
        <Col>
          <Card>--number of channels</Card>
        </Col>
        <Col>
          <Card>Number of channels 24h, 7d 30d</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>Active Wallets 24h --</Card>
        </Col>
        <Col>
          <Card>--Active Wallets </Card>
        </Col>
        <Col>
          <Card>Active Wallets 24h, 7d 30d</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>Number of players banned vs total players</Card>
        </Col>
        <Col>
          <Card>Amount of Alchemica Sold by banned players</Card>
        </Col>
        <Col>
          <Card>Number of players unbanned</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>GLTR Stakers</Card>
        </Col>
        <Col>
          <Card>LP Tokens staked vs total LP Tokens</Card>
        </Col>
        <Col>
          <Card># Number of extractors</Card>
        </Col>
      </Row>
      <h2>Gotchi Utiliziation</h2>
      <Row>
        <Col>
          <Card>Number of Gotchis summoned</Card>
        </Col>
        <Col>
          <Card>Number of Gotchis sacrificed</Card>
        </Col>
        <Col>
          <Card>Number of Gotchis borrowed (24h, 7d, 30d)</Card>
        </Col>
        <Col>
          <Card>Number of Gotchis channeled (24h, 7d, 30d)</Card>
        </Col>
      </Row>
    </>
  );
}

export async function getServerSideProps(context) {
  const stats = await getStats();
  const totalSupply = await getAlchemicaTotalSupply();
  const gotchis = await getGotchis();
  const activeWallets = await getActiveWallets();
  const pools = await getPoolInfo();

  const props = { activeWallets, stats, totalSupply, gotchis, pools };
  console.log(props);

  return {
    props,
  };
}

import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import useSWR from "swr";
import {
  getActiveWallets,
  getAlchemicaTotalSupply,
  getGotchis,
  getStats,
} from "../fetcher";

export default function Home({ data }) {
  // const { data, error } = useSWR("/api/user", fetcher);

  console.log(data);
  if (data == undefined) {
    return <div className="waitingForConnection">Loading...</div>;
  }

  let formatter = new Intl.NumberFormat(navigator.language || "us-US");

  return (
    <>
      <h2>Gotchiverse Economy</h2>
      <Row>
        <Col>
          <Card>Alchemica Minted vs total supply</Card>
        </Col>
        <Col>
          <Card>Alchemica spent (total, tiles, upgrades, installations)</Card>
        </Col>
        <Col>
          <Card>GLTR spent (on Upgrades)</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>Tiles minted</Card>
        </Col>
        <Col>
          <Card>Installations minted</Card>
        </Col>
        <Col>
          <Card>Upgrades initiated</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>24h number of channels</Card>
        </Col>
        <Col>
          <Card>7d number of channels</Card>
        </Col>
        <Col>
          <Card>30d number of channels</Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>Active Wallets 24h</Card>
        </Col>
        <Col>
          <Card>Active Wallets 7d</Card>
        </Col>
        <Col>
          <Card>Active Wallets 30d</Card>
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

  const props = { activeWallets, stats, totalSupply, gotchis };
  console.log(props);

  return {
    props,
  };
}

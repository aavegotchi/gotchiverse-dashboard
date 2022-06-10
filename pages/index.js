import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import {
  getActiveWallets,
  getAlchemicaTotalSupply,
  getGotchis,
  getPoolInfo,
  getStats,
  getBurnedGLTR,
} from "../fetcher";
import GLTRSpentOnUpgrades from "../components/gltrSpentUpgrades";

export default function Home({ burnedGLTRCurrent }) {
  // const { data, error } = useSWR("/api/user", fetcher);

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
          <GLTRSpentOnUpgrades burnedGLTRCurrent={burnedGLTRCurrent} />
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
  const burnedGLTRCurrent = await getBurnedGLTR();

  const props = {
    activeWallets,
    stats,
    totalSupply,
    gotchis,
    pools,
    burnedGLTRCurrent,
  };

  return {
    props,
  };
}

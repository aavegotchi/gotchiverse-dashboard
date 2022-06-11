import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import {
  getActiveWallets,
  getAlchemicaTotalSupply,
  getGotchis,
  getPoolInfo,
  getStats,
  getBurnedGLTR,
  INTERVAL_DAY,
  INTERVAL_WEEK,
  INTERVAL_MONTH,
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
  const dataAll = await Promise.all([
    getStats(),
    getAlchemicaTotalSupply(),
    getGotchis(),
    getActiveWallets(),
    getPoolInfo(),
    getBurnedGLTR(),
  ]);

  const dataDay = await Promise.all([
    getStats(INTERVAL_DAY),
    getAlchemicaTotalSupply(INTERVAL_DAY),
    getGotchis(INTERVAL_DAY),
    getActiveWallets(INTERVAL_DAY),
    getPoolInfo(INTERVAL_DAY),
    getBurnedGLTR(INTERVAL_DAY),
  ]);

  const dataWeek = await Promise.all([
    getStats(INTERVAL_WEEK),
    getAlchemicaTotalSupply(INTERVAL_WEEK),
    getGotchis(INTERVAL_WEEK),
    getActiveWallets(INTERVAL_WEEK),
    getPoolInfo(INTERVAL_WEEK),
    getBurnedGLTR(INTERVAL_WEEK),
  ]);

  const dataMonth = await Promise.all([
    getStats(INTERVAL_MONTH),
    getAlchemicaTotalSupply(INTERVAL_MONTH),
    getGotchis(INTERVAL_MONTH),
    getActiveWallets(INTERVAL_MONTH),
    getPoolInfo(INTERVAL_MONTH),
    getBurnedGLTR(INTERVAL_MONTH),
  ]);

  const props = {
    dataDay,
    dataWeek,
    dataMonth,
    dataAll,
  };

  return {
    props,
  };
}

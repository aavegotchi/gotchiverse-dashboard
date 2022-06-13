import React, { useEffect, useState } from "react";
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
import UnflippedTile from "../components/unflipped";


export default function Home({ burnedGLTRCurrent, activeWallets, stats, totalSupply, gotchis, pools }) {
  // const { data, error } = useSWR("/api/user", fetcher);
  const burnedGLTRCurrentData = burnedGLTRCurrent.gltrSpendOnUpgrades;
  console.log(activeWallets[0], "active wallets", typeof activeWallets);
  console.log(stats, "stats");
  console.log(totalSupply, "total supply");
  console.log(gotchis, "gotchis");
  console.log(pools, "pools");
  
  // setting data 
  const [GLTRBurnedData, setGLTRBurnedData] = useState([]);

  const [activeWalletsData, setActiveWalletsData] = useState([]);

  const [totalSupplyData, setTotalSupplyData] = useState([]);

  const [gotchisData, setGotchisData] = useState([]);

  const [poolsData, setPoolsData] = useState([]);

  useEffect(() => {
    function setData() {
      setGLTRBurnedData(burnedGLTRCurrentData);
      setActiveWalletsData(activeWallets);
    }

    setData();

  }, [])


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
          <UnflippedTile data = { burnedGLTRCurrentData } title = {"GLTR Burned"}/>
        </Col>
      </Row>
      <Row>
        <Col md = "8">
          <Card>Alchemica minted vs total supply</Card>
        </Col>
        <Col md = "4">
          {/* <Card>Upgrades initiated</Card> */}
          <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"Upgrades Initiated"}/>
        </Col>
      </Row>
      <Row>
        <Col md = "8">
          <Card>LP Tokens staked vs total LP Tokens</Card>
        </Col>
        <Col md = "4">

          <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"Number of channels"}/>
        </Col>
      </Row>
      <Row>
        <Col md = "8">
          <Card>Gotchiverse news / announcements</Card>
        </Col>
        <Col md = "4">
          <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"Active Wallets"}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"GLTR Stakers"}/>
        </Col>
        <Col>
          
          <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"LP Tokens staked / total"}/>
        </Col>
        <Col>
            <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"Number of extractors"}/>
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
          <Card>Number of players banned</Card>
        </Col>
        <Col>
          <Card>Number of players banned</Card>
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

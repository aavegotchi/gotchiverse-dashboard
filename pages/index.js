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
import UnflippedTile from "../components/unflipped";
import PoolsUnflipped from "../components/poolsUnflipped";
import ChartTest from "../components/chartTest";
import GotchiverseNews from "../components/gotchiverseNews";
import Image from 'next/image';




export default function Home({ burnedGLTRCurrent, activeWallets, stats, totalSupply, gotchis, pools }) {
  // const { data, error } = useSWR("/api/user", fetcher);
  const burnedGLTRCurrentData = burnedGLTRCurrent.gltrSpendOnUpgrades;
  const arrayOfGLTRBurnedData = new Array(3).fill(burnedGLTRCurrentData);
  const arrayOfActiveWalletsData = activeWallets;
  const arrayOfTilesMintedData = new Array(3).fill(stats.tilesMinted);
  const arrayOfInstallationsMintedTotalData = new Array(3).fill(stats.installationsMintedTotal);
  const arrayOfUpgradesInitiatedData = new Array(3).fill(stats.installationsUpgradedTotal);
  const arrayOfPoolsData = new Array();
  

  console.log(stats, "stats");
  console.log(totalSupply, "total supply");
  console.log(gotchis, "gotchis");
  console.log(pools, "pools", typeof pools);
  

  // NOTE: EVERYTHING is still in string , could change them to integers to process in "unflipped.js"
  // setting data into arrays, [{24h}, {7d}, {30d}]
  const [GLTRBurnedData, setGLTRBurnedData] = useState([]);

  const [activeWalletsData, setActiveWalletsData] = useState([]);

  const [tilesMintedData, setTilesMintedData] = useState([]);

  const [installationsMintedData, setInstallationsMintedData] = useState([]);

  const [upgradesInitiatedData, setUpgradesInitiatedData] = useState([]);

  const [poolsData, setPoolsData] = useState([]);


  const [totalSupplyData, setTotalSupplyData] = useState([]);

  const [gotchisData, setGotchisData] = useState([]);

  

  // set all the data on mount, 
  useEffect(() => {
    function setData() {
      setGLTRBurnedData(arrayOfGLTRBurnedData);
      setActiveWalletsData(arrayOfActiveWalletsData);
      setTilesMintedData(arrayOfTilesMintedData);
      setInstallationsMintedData(arrayOfInstallationsMintedTotalData);
      setUpgradesInitiatedData(arrayOfUpgradesInitiatedData);
      setPoolsData(arrayOfPoolsData);


    }

    setData();

  }, [])

  const styling = {
    width: "100%",
    height: "100%",
  }


  return (
    <>
      <h2>Gotchiverse Economy</h2>
      <Row>
        <Col>
        <UnflippedTile data = { installationsMintedData } title = {"Installations minted"}/>
        </Col>
        <Col>
          <UnflippedTile data = { tilesMintedData } title = {"Tiles Minted"}/>
        </Col>
        <Col>
          <UnflippedTile data = { GLTRBurnedData } title = {"GLTR Burned"}/>
        </Col>
      </Row>
      <Row>
        <Col md = "8">
            {/* <Image 
            src = "/../public/images/aavegotchi-banner.jpg"
            alt = "aave banner"
            layout = "fill"
            overflow = "hidden"
            /> */}
          <div className = "bannerWrapper">
            some decorative banner here
          </div>

        </Col>
        
        <Col md = "4">
          {/* <Card>Upgrades initiated</Card> */}
          <UnflippedTile data  ={ upgradesInitiatedData } title = {"Upgrades Initiated"}/>
        </Col>
      </Row>
      <Row>
        <Col md = "8">
          {/* <Card>LP Tokens staked vs total LP Tokens</Card> */}
          
            <ChartTest />
          
        </Col>
        <Col md = "4">
          <GotchiverseNews />
        </Col>
      </Row>
      <Row>
        <Col>
        <PoolsUnflipped data = { pools } title = {"Pools staked"} />
        </Col>
        <Col>
          <PoolsUnflipped data = { pools } title = {"Pools staked"} />
          alchemicaminted / total supply
        </Col>
        <Col>
        <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"Number of channels"}/>
        </Col>

      </Row>
      <Row>
        <Col>
          <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"GLTR Stakers"}/>
        </Col>
        <Col>
          <UnflippedTile data  ={ activeWalletsData } title = {"Active Wallets"}/>
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
      <style jsx>
        {`


          .bannerWrapper {
            height: 100%;
            border: 1px solid green;
            display: relative;
            overflow: hidden;
            color: white;
          }
        `}
      </style>
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

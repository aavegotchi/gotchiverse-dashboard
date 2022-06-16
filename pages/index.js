import React, { useEffect, useState } from "react";
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



// components here 
import UnflippedTile from "../components/unflipped";
import PoolsUnflipped from "../components/poolsUnflipped";
import ChartTest from "../components/chartTest";
import GotchiverseNews from "../components/gotchiverseNews";
import UnflippedBanned from "../components/unflippedBanned";
import PoolsUnflippedV2 from "../components/poolsUnflipped2";


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
          {/* <Card>Number of players banned vs total players</Card> */}
          <UnflippedBanned data = { pools } title = {"Pools staked"}/>
        </Col>
        <Col>
          {/* <Card>Amount of Alchemica Sold by banned players</Card> */}
          <UnflippedBanned data = { pools } title = {"Pools staked"}/>
        </Col>
        <Col>
          {/* <Card>Number of players banned</Card> */}
          <UnflippedBanned data = { pools } title = {"Pools staked"}/>
        </Col>
        <Col>
          {/* <Card>Number of players banned</Card> */}
          <UnflippedBanned data = { pools } title = {"Pools staked"}/>
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
          <div className = "image__Wrapper">
            <Image 
            src = "https://res.cloudinary.com/djev64cqn/image/upload/v1655322084/aavegotchi-banner_lvy5oc.jpg"
            alt = "banner" 
            layout = {"fill"}
            objectFit = {"cover"}
            backgroundPosition = {"center"}
            />
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
        <PoolsUnflippedV2 data = { pools } title = {"Pools staked"} />
        </Col>
        <Col>
          <PoolsUnflippedV2 data = { pools } title = {"Pools staked"} />
          {/* alchemicaminted / total supply */}
        </Col>
        {/* <Col>
        <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"Channels"}/>
        </Col> */}
      </Row>
      <Row>
        <Col>
          <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"GLTR Stakers"}/>
        </Col>
        <Col>
          <UnflippedTile data  ={ activeWalletsData } title = {"Active Wallets"}/>
        </Col>
        <Col>
            <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"Extractors"}/>
        </Col>
      </Row>
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
        .image__Wrapper {
          border-radius: 5px;
          overflow: hidden;
          border-radius: 10px solid yellow;
          position: relative;
          height: 100%;
          width: 100%;

        }


        `}
      </style>
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

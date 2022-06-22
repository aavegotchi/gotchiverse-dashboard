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



// components here 
import UnflippedTile from "../components/unflipped";
import AlchemicaCard from "../components/alchemicaCard";

import ChartTest from "../components/chartTest";
import GotchiverseNews from "../components/gotchiverseNews";
import UnflippedBanned from "../components/unflippedBanned";
import PoolsUnflippedV2 from "../components/poolsUnflipped2";
import CardTile from "../components/card";
import LastSold from "../components/lastSold";
import { AnimateSharedLayout } from "framer-motion";
import LastSold2 from "../components/lastSold2";
import Image from 'next/image';
import TotalSupply from "../components/totalSupply";



export default function Home({ burnedGLTRCurrent, activeWallets, stats, totalSupply, gotchis, pools }) {
  // const { data, error } = useSWR("/api/user", fetcher);
  const burnedGLTRCurrentData = burnedGLTRCurrent.gltrSpendOnUpgrades;
  const arrayOfGLTRBurnedData = new Array(3).fill(burnedGLTRCurrentData);
  const arrayOfActiveWalletsData = activeWallets;
  
  const arrayOfTilesMintedData = new Array(3).fill(stats.tilesMinted);
  const arrayOfInstallationsMintedTotalData = new Array(3).fill(stats.installationsMintedTotal);
  const arrayOfUpgradesInitiatedData = new Array(3).fill(stats.installationsUpgradedTotal);
  const arrayOfPoolsData = new Array();
  
  console.log(stats);

  
  // NOTE: EVERYTHING is still in string , could change them to integers to process in "unflipped.js"
  // setting data into arrays, [{24h}, {7d}, {30d}]
  const [expanded, setExpanded] = useState(true);
  
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
      setTotalSupplyData(totalSupply);


    }

    setData();

  }, [])


  return (
    <>
      <div className = "mainWrapper">
        <h2 className = "title">Gotchiverse Economy</h2>
        <Row>
          <Col md = "9">          
            <ChartTest />
          </Col>
          <Col md = "3">
              <LastSold2 />
          </Col>
        </Row>

        <Row>
          <Col>
            <AlchemicaCard title = {"TILES"} />
          
          </Col>
          <Col>
            <AlchemicaCard title = {"INSTALLATIONS"}/>
          </Col>
          <Col>
            <AlchemicaCard title = {"UPGRADES"}/>
          
          </Col>
        </Row>
        
        <Row>
          <Col>
            <UnflippedTile data = { installationsMintedData } title = {"INSTALLATIONS MINTED"}/>
          </Col>
          <Col>
            <UnflippedTile data = { tilesMintedData } title = {"TILES MINTED"}/>
          </Col>
          <Col>
            <UnflippedTile data = { GLTRBurnedData } title = {"GLTR BURNED"}/>
          </Col>

        </Row>
        <Row>
          <Col>
            {/* <Card>Number of players banned vs total players</Card> */}
            <UnflippedBanned data = { pools } title = {"PLAYERS"}/>
          </Col>
          <Col>
            {/* <Card>Amount of Alchemica Sold by banned players</Card> */}
            <UnflippedBanned data = { pools } title = {"BANNED PLAYERS"}/>
          </Col>
          <Col>
            {/* <Card>Number of players banned</Card> */}
            <UnflippedBanned data = { pools } title = {"ALCHEMICA SOLD BY BANNED PLAYERS"}/>
          </Col>
          <Col>
            {/* <Card>Number of players banned</Card> */}
            <UnflippedBanned data = { pools } title = {"UNBANNED PLAYERS"}/>
          </Col>
        </Row>

        <Row>
          <Col>
          <PoolsUnflippedV2 data = { pools } title = {"POOLS STAKED"} />
          </Col>
          <Col>
            <TotalSupply data = { totalSupplyData } title = {"POOLS STAKED"} />
            {/* alchemicaminted / total supply */}
          </Col>
          {/* <Col>
          <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"Channels"}/>
          </Col> */}
        </Row>
        <Row>
          <Col>
            <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"GLTR STAKERS"}/>
          </Col>
          <Col>
            <UnflippedTile data  ={ activeWalletsData } title = {"ACTIVE WALLETS"}/>
          </Col>
          <Col>
              <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"EXTRACTORS"}/>
          </Col>
        </Row>
        <Row >
          <Col>
            <UnflippedTile data = { installationsMintedData } title = {"INSTALLATIONS MINTED"}/>
          </Col>
            
          <Col>
              <UnflippedTile data = { tilesMintedData } title = {"TILES MINTED"}/>
          </Col>
          <Col>
            <UnflippedTile data = { GLTRBurnedData } title = {"GLTR BURNED"}/>
          </Col>

        </Row>
        <h2 className = "title">Gotchi Utiliziation</h2>
        <Row>

          <Col>
          {/* <Card>Number of Gotchis summoned</Card> */}
            <UnflippedBanned data = { pools } title = {"GOTCHIS SUMMONED"}/>
          </Col>
          <Col>
          {/* <Card>Number of Gotchis sacrificed</Card> */}
            <UnflippedBanned data = { pools } title = {"GOTCHIS SACRIFICED"}/>
          </Col>
          <Col>
          {/* <Card>Number of Gotchis borrowed (24h, 7d, 30d)</Card> */}
          <UnflippedBanned data = { pools } title = {"GOTCHIS BORROWED"}/>
          </Col>
          <Col>
          {/* <Card>Number of Gotchis channeled (24h, 7d, 30d)</Card> */}
            <UnflippedBanned data = { pools } title = {"GOTCHIS CHANNELED"}/>
          </Col>

        </Row>
      </div>
      <style jsx>
        {`

        .rowWrapper {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;

          
          

        }

        .oneCard {
          flex: 1;
          margin: 2px;
        }


        .title {

          width: 85%;
          text-align: left;
          font-size: 46px;
          font-weight: 400;
          line-height: 42.73px;
          color: black;
          
        }
        .image__Wrapper {
          border-radius: 5px;
          overflow: hidden;
          position: relative;
          height: 100%;
          width: 100%;
          

        }

        .mainWrapper {
          width: 1100px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
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

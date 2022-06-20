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
import PoolsUnflipped from "../components/poolsUnflipped";
import ChartTest from "../components/chartTest";
import GotchiverseNews from "../components/gotchiverseNews";
import UnflippedBanned from "../components/unflippedBanned";
import PoolsUnflippedV2 from "../components/poolsUnflipped2";
import CardTile from "../components/card";
import LastSold from "../components/lastSold";
import { AnimateSharedLayout } from "framer-motion";
import BasicTable from "../components/table";
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
  

  console.log(stats, "stats");
  console.log(totalSupply, "total supply");
  console.log(gotchis, "gotchis");
  console.log(pools, "pools", typeof pools);
  

  // NOTE: EVERYTHING is still in string , could change them to integers to process in "unflipped.js"
  // setting data into arrays, [{24h}, {7d}, {30d}]
  const [expanded, setExpanded] = useState(true);
  console.log(expanded, "expanded");
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


  // useEffect(() => {
  //   const fetchData = async () => {
      
  //   }
  // })


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
            />
          </div>

        </Col>
        
        <Col md = "4">
          <AnimateSharedLayout>
            {
              expanded? <UnflippedTile data  = { upgradesInitiatedData } title = {"Upgrades INITIATED"}/> : <div onClick = {() => setExpanded(true)}>Hello World</div>
            }
            {/* <UnflippedTile data  = { upgradesInitiatedData } title = {"Upgrades INITIATED"}/>  */}
          </AnimateSharedLayout>
        </Col>
      </Row>
      <Row>
        <Col md = "8">
          {/* <Card>LP Tokens staked vs total LP Tokens</Card> */}
          
            <ChartTest />
          
        </Col>
        <Col md = "4">
          <div className = "latestSales">
            <LastSold />


          </div>
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
          position: relative;
          height: 100%;
          width: 100%;
          

        }

        .latestSales {
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 10px;
          // background: #7F00FF;  /* fallback for old browsers */
          // background: -webkit-linear-gradient(to right, #E100FF, #7F00FF);  
          // background: linear-gradient(to right, #E100FF, #7F00FF); 
          
        

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

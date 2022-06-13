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


const GHST_USDC = "0x096C5CCb33cFc5732Bcd1f3195C13dBeFC4c82f4";
const GHST_MATIC = "0xf69e93771F11AECd8E554aA165C3Fe7fd811530c";
const GHST_GLTR = "0xb0E35478a389dD20050D66a67FB761678af99678";
const GHST_KEK = "0xBFad162775EBfB9988db3F24ef28CA6Bc2fB92f0";
const GHST_ALPHA = "0xC765ECA0Ad3fd27779d36d18E32552Bd7e26Fd7b";
const GHST_FOMO = "0x641CA8d96b01Db1E14a5fBa16bc1e5e508A45f2B";
const GHST_FUD = "0xfEC232CC6F0F3aEb2f81B2787A9bc9F6fc72EA5C";
const wapGHST = "0xfEC232CC6F0F3aEb2f81B2787A9bc9F6fc72EA5C";

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
          <Card>Alchemica minted vs total supply</Card>
        </Col>
        <Col md = "4">
          {/* <Card>Upgrades initiated</Card> */}
          <UnflippedTile data  ={ upgradesInitiatedData } title = {"Upgrades Initiated"}/>
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
          <UnflippedTile data  ={ activeWalletsData } title = {"Active Wallets"}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"GLTR Stakers"}/>
        </Col>
        <Col>
          <PoolsUnflipped data = { pools } title = {"Pools staked"} />
          
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

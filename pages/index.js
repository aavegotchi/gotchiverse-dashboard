import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

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
import Image from "next/image";
import TotalSupply from "../components/totalSupply";
import useSWR from "swr";
import Fetcher from "../fetcher";

export default function Home() {
  let alchemicaTotalResponse = useSWR("/api/alchemica/supply", Fetcher);
  let alchemicaTotal = alchemicaTotalResponse.data;

  let alchemica7dResponse = useSWR("/api/alchemica/supply/7", Fetcher);
  let alchemica7d = alchemica7dResponse.data;

  let alchemica7dSeriesResponse = useSWR(
    "/api/alchemica/supply/7/series",
    Fetcher
  );
  let alchemica7dSeries = alchemica7dSeriesResponse.data;

  // console.log("Alchemica Total Supply", alchemicaTotal);
  // console.log("Alchemica Diff 7D", alchemica7d);
  // console.log("Alchemica Series 7D", alchemica7dSeries);

  let gotchivereStatsResponse = useSWR("/api/gotchiverse/stats", Fetcher);
  let gotchiverseStats = gotchivereStatsResponse.data;

  let gotchiverseStats7dResponse = useSWR("/api/gotchiverse/stats/7", Fetcher);
  let gotchiverseStats1dResponse = useSWR("/api/gotchiverse/stats/1", Fetcher);
  let gotchiverseStats30dResponse = useSWR(
    "/api/gotchiverse/stats/30",
    Fetcher
  );

  let gotchisResponse = useSWR("/api/gotchis/stats", Fetcher);
  let gotchiStats = gotchisResponse.data;
  console.log(gotchisResponse.error);
  let gotchiverseStats7d = gotchiverseStats7dResponse.data;
  let gotchiverseStats1d = gotchiverseStats1dResponse.data;
  let gotchiverseStats30d = gotchiverseStats30dResponse.data;


  let gotchiverseStats7dSeriesResponse = useSWR(
    "/api/gotchiverse/stats/7/series",
    Fetcher
  );
  let gotchiverseStats7dSeries = gotchiverseStats7dSeriesResponse.data;

  

  // console.log("Gotchiverse Stats Total: ", gotchiverseStats);
  // console.log("Gotchiverse Stats Diff 1D", gotchiverseStats1dResponse.data);
  // console.log("Gotchiverse Stats Diff 7D", gotchiverseStats7d);
  // console.log("Gotchiverse Stats Series 7D", gotchiverseStats7dSeries);

  let activeWallets = useSWR("/api/alchemica/");

  // NOTE: EVERYTHING is still in string , could change them to integers to process in "unflipped.js"
  // setting data into arrays, [{24h}, {7d}, {30d}]
  const [expanded, setExpanded] = useState(true);

  const [GLTRBurnedData, setGLTRBurnedData] = useState();

  const [activeWalletsData, setActiveWalletsData] = useState();

  const [tilesMintedData, setTilesMintedData] = useState();

  const [installationsMintedData, setInstallationsMintedData] = useState();
  const [upgradesInitiatedData, setUpgradesInitiatedData] = useState();

  const [poolsData, setPoolsData] = useState();

  const [totalSupplyData, setTotalSupplyData] = useState();

  const [gotchisData, setGotchisData] = useState();
  // set all the data on mount,
  useEffect(() => {
    function setData() {
      // setGLTRBurnedData(arrayOfGLTRBurnedData);
      // setActiveWalletsData(arrayOfActiveWalletsData);
      // setTilesMintedData(arrayOfTilesMintedData);
      // setInstallationsMintedData(arrayOfInstallationsMintedTotalData);
      // setUpgradesInitiatedData(arrayOfUpgradesInitiatedData);
      // setPoolsData(arrayOfPoolsData);
      // setTotalSupplyData(totalSupply);
    }

    setData();
  }, []);

<<<<<<< Updated upstream

=======
  
>>>>>>> Stashed changes
  console.log("stats", gotchiStats);
  console.log("stats7d", gotchiverseStats7d);
  console.log("stats1d", gotchiverseStats1d);
  console.log("stats30d", gotchiverseStats30d);
  console.log("statsGotchiverse", gotchiverseStats);
  console.log("alchemica",alchemicaTotal );
  console.log("activeWallets", activeWallets);

  return (
    <>
      <div className="mainWrapper">
        <h2 className="title">Gotchiverse Economy</h2>
        <Row>
          <Col md="9">
            <ChartTest />
          </Col>
          <Col md="3">
            <LastSold2 />
          </Col>
        </Row>
        {gotchiverseStats && (
          <Row>
            <Col>
              <AlchemicaCard
                title={"TILES"}
                values={gotchiverseStats.alchemicaSpendOnTiles}
              />
            </Col>
            <Col>
              <AlchemicaCard
                title={"INSTALLATIONS"}
                values={gotchiverseStats.alchemicaSpendOnInstallations}
              />
            </Col>
            <Col>
              <AlchemicaCard
                title={"UPGRADES"}
                values={gotchiverseStats.alchemicaSpendOnUpgrades}
              />
            </Col>
          </Row>
        )}
        <Row>
          {gotchiverseStats && gotchiverseStats1d && gotchiverseStats7d && gotchiverseStats30d && (
            <Col>
              <UnflippedTile
                data={gotchiverseStats.installationsMintedTotal}
                data1d = {gotchiverseStats1d.installationsMintedTotal}
                data7d = {gotchiverseStats7d.installationsMintedTotal}
                data30d = {gotchiverseStats30d.installationsMintedTotal}
                title={"INSTALLATIONS MINTED"}
              />
            </Col>
          )}
          {gotchiverseStats && gotchiverseStats1d && gotchiverseStats7d && gotchiverseStats30d && (
            <Col>
              <UnflippedTile
                data={gotchiverseStats.tilesMinted}
                data1d = {gotchiverseStats1d.tilesMinted}
                data7d = {gotchiverseStats7d.tilesMinted}
                data30d = {gotchiverseStats30d.tilesMinted}

                title={"TILES MINTED"}
              />
            </Col>
          )}

          {gotchiverseStats && gotchiverseStats1d && gotchiverseStats7d && gotchiverseStats30d &&  (
            <Col>
              <UnflippedTile
                data={gotchiverseStats.gltrSpendTotal}
                data1d = {gotchiverseStats1d.gltrSpendTotal}
                data7d = {gotchiverseStats7d.gltrSpendTotal}
                data30d = {gotchiverseStats30d.gltrSpendTotal}
                title={"GLTR BURNED"}
              />
            </Col>
          )}
        </Row>

        {poolsData && (
          <Row>
            <Col>
              {/* <Card>Number of players banned vs total players</Card> */}
              <UnflippedBanned data={poolsData} title={"PLAYERS"} />
            </Col>
            <Col>
              {/* <Card>Amount of Alchemica Sold by banned players</Card> */}
              <UnflippedBanned data={poolsData} title={"BANNED PLAYERS"} />
            </Col>
            <Col>
              {/* <Card>Number of players banned</Card> */}
              <UnflippedBanned
                data={poolsData}
                title={"ALCHEMICA SOLD BY BANNED PLAYERS"}
              />
            </Col>
            <Col>
              {/* <Card>Number of players banned</Card> */}
              <UnflippedBanned data={poolsData} title={"UNBANNED PLAYERS"} />
            </Col>
          </Row>
        )}

        <Row>
          {poolsData && (
            <Col>
              <PoolsUnflippedV2 data={poolsData} title={"POOLS STAKED"} />
            </Col>
          )}
          {totalSupplyData && (
            <Col>
              <TotalSupply data={totalSupplyData} title={"POOLS STAKED"} />
              {/* alchemicaminted / total supply */}
            </Col>
          )}
          {/* <Col>
          <UnflippedTile data  ={ burnedGLTRCurrentData } title = {"Channels"}/>
          </Col> */}
        </Row>
        <Row>
          {GLTRBurnedData && (
            <Col>
              <UnflippedTile data={GLTRBurnedData} title={"GLTR STAKERS"} />
            </Col>
          )}
          {activeWalletsData && (
            <Col>
              <UnflippedTile
                data={activeWalletsData}
                title={"ACTIVE WALLETS"}
              />
            </Col>
          )}
          {GLTRBurnedData && (
            <Col>
              <UnflippedTile data={GLTRBurnedData} title={"EXTRACTORS"} />
            </Col>
          )}
        </Row>

        {gotchiStats && (
          <>
            <h2 className="title">Gotchi Utiliziation</h2>
            <Row>
              <Col>
                {/* <Card>Number of Gotchis summoned</Card> */}
                <UnflippedBanned
                  data={gotchiStats.aavegotchisClaimed}
                  data1d = {gotchiStats.aavegotchisClaimed}
                  data7d = {gotchiStats.aavegotchisClaimed}
                  data30d = {gotchiStats.aavegotchisClaimed}
                  
                  title={"GOTCHIS SUMMONED"}
                />
              </Col>
              <Col>
                {/* <Card>Number of Gotchis sacrificed</Card> */}
                <UnflippedBanned
                  data={gotchiStats.aavegotchisSacrificed}
                  data1d = {gotchiStats.aavegotchisSacrificed}
                  data7d = {gotchiStats.aavegotchisSacrificed}
                  data30d = {gotchiStats.aavegotchisSacrificed}
                  title={"GOTCHIS SACRIFICED"}
                />
              </Col>
              <Col>
                {/* <Card>Number of Gotchis borrowed (24h, 7d, 30d)</Card> */}
                <UnflippedBanned
                  data={gotchiStats.aavegotchisBorrowed}
                  data1d = {gotchiStats.aavegotchisBorrowed}
                  data7d = {gotchiStats.aavegotchisBorrowed}
                  data30d = {gotchiStats.aavegotchisBorrowed}
                  title={"GOTCHIS BORROWED"}
                />
              </Col>
              <Col>
              {/* <Card>Number of Gotchis channeled (24h, 7d, 30d)</Card> */}
              <UnflippedBanned
                  data={gotchiStats.aavegotchisBorrowed}
                  data1d = {gotchiStats.aavegotchisBorrowed}
                  data7d = {gotchiStats.aavegotchisBorrowed}
                  data30d = {gotchiStats.aavegotchisBorrowed}
                  title={"GOTCHIS SACRIFICED FILLER"}
                />
              </Col>
            </Row>
          </>
        )}
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

          @media (max-width: 600px) {
            .mainWrapper {
              width: 100%;
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
}
